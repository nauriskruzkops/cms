<?php
namespace App\Routing;

use App\Services\SettingService;
use App\Controller\ErrorController;
use App\Controller\IndexController;
use App\Controller\PageController;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Shared\Entity\MenuItemRelation;
use Shared\Entity\MenuItems;
use Shared\Entity\Page;
use Shared\Repository\MenuItemsRepository;
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
     * @throws \Doctrine\ORM\ORMException
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

        $menuItems = $this->getSiteMap();
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

        return $routes;
    }

    /**
     * @param array $item
     * @return array
     * @throws \Doctrine\ORM\ORMException
     */
    private function createRoute($item)
    {
        $defaultLocale = $this->settingService->value('language');

        $defaults = [];
        $defaults['type'] = $item['template'];
        $defaults['slug'] = $item['slug'];
        $defaults['title'] = $item['title'];

        $defaults['_locale'] = $item['locale'];
        $defaults['_page_id'] = $item['id'] ?? null;

        if ($defaults['type'] == Page::TEMPL_ROOT) {
            $defaults['_controller'] = IndexController::class;
        }  else {
            $defaults['_controller'] = PageController::class;
        }

        if ($defaultLocale === $defaults['_locale']) {
            $urlPattern = sprintf('/%s', $defaults['slug']);
        } else {
            $urlPattern = sprintf('/{_locale}/%s', $defaults['slug']);
        }

        $route = new Route($urlPattern, $defaults);
        return [
            $defaults['slug'],
            $route
        ];
    }

    /**
     * @return ArrayCollection|MenuItems[]
     */
    private function getSiteMap()
    {
        $pages = $this->em->getRepository(Page::class)->getNested('lv');
        return new ArrayCollection($pages);
    }
}