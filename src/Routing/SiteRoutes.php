<?php
namespace App\Routing;

use App\Services\SettingService;
use App\Controller\ErrorController;
use App\Controller\IndexController;
use App\Controller\PageController;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Admin\Entity\MenuItemRelation;
use Admin\Entity\MenuItems;
use Admin\Entity\Page;
use Admin\Repository\MenuItemsRepository;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

class SiteRoutes
{
    const TYPE_ROOT = 'root';
    const TYPE_PAGE = 'page';
    const TYPE_POST = 'post';
    const TYPE_CATEGORY = 'category';

    /** @var SettingService */
    private $settingService;

    /** @var EntityManager  */
    private $em;

    /**
     * SiteRoutes constructor.
     * @param SettingService $settingService
     * @param EntityManager $em
     */
    public function __construct(SettingService $settingService, EntityManager $em)
    {
        $this->settingService = $settingService;
        $this->em = $em;
    }

    /**
     * @return RouteCollection
     */
    public function loadRoutes()
    {
        $default_locale = $this->settingService->value('language');
        $getLanguages = $this->settingService->values('languages');
        $languages = array_keys($getLanguages);

        $routes = new RouteCollection();

        $defaults = array(
            'slug' => SiteRoutes::TYPE_ROOT,
            'type' => SiteRoutes::TYPE_PAGE,
            '_controller' => IndexController::class,
            '_locale' => $default_locale,
        );
        $route = new Route('/{_locale}', $defaults, [
            '_locale' => implode('|', $languages)
        ]);

        $routes->add('index', $route);

        foreach ($languages as $language) {
            $menuItems = $this->getSiteMap($language);
            foreach ($menuItems as $item) {
                if ($item['slug'] ?? false) {
                    list($routeKey, $route) = $this->createRoute($item);
                    if (!$routes->get($routeKey)) {
                        if (!empty(trim($routeKey, '/'))) {
                            $routes->add($routeKey, $route);
                        }
                    }
                }
            }
        }

        $defaults = array(
            'slug' => '*',
            'type' => SiteRoutes::TYPE_PAGE,
            '_controller' => PageController::class,
            '_locale' => $default_locale,
        );
        $route = new Route('/{_locale}/{slug}', $defaults, [
            '_locale' => implode('|', $languages),
            'slug' => ".+"
        ]);
        $routes->add('any_page', $route);

        return $routes;
    }

    /**
     * @param array $item
     * @return array
     */
    private function createRoute($item)
    {

        $defaultLocale = $this->settingService->value('language');

        $defaults = [];
        $defaults['type'] = $item['template'];
        $defaults['slug'] = $item['full_slug'];

        $defaults['_locale'] = $item['locale'];
        $defaults['_page_id'] = $item['id'] ?? null;

        if ($defaults['type'] == Page::TEMPL_ROOT) {
            $defaults['_controller'] = IndexController::class;
        }  else {
            $defaults['_controller'] = PageController::class;
        }

        if ($defaultLocale === $defaults['_locale'] && $defaults['type'] == 'root') {
            $urlPattern = sprintf('/%s', $defaults['slug']);
        } else {
            $urlPattern = sprintf('/{_locale}/%s', $defaults['slug']);
        }

        $route = new Route($urlPattern, $defaults, ['slug' => ".+"]);
        return [
            $item['locale'].'_'.$item['slug'],
            $route
        ];
    }

    /**
     * @param $language
     * @return ArrayCollection|MenuItems[]
     */
    private function getSiteMap($language)
    {
        $qb = $this->em->createQueryBuilder();
        $qb->select('p.id, p.template, p.locale, p.slug, pa.slug as parent_slug');
        $qb->from(Page::class, 'p');
        $qb->leftJoin('p.parent', 'pa');
        $qb->where('p.locale = :locale')->setParameter('locale', $language);
        //$qb->andWhere('p.public = :public')->setParameter('public', true);
        $qb->andWhere('p.deletedAt is null');

        $pages = $qb->getQuery()->getArrayResult();

        foreach ($pages as $pageKey => $page) {
            $pages[$pageKey]['full_slug'] = (!$page['parent_slug'] or $page['parent_slug'] == 'index') ? '' : $page['parent_slug'].'/';
            $pages[$pageKey]['full_slug'] .= $page['slug'] !== 'index' ? $page['slug'] : '';
        }

        return new ArrayCollection($pages);
    }
}