<?php
namespace App\Routing;

use Admin\Service\SettingService;
use App\Controller\ErrorController;
use App\Controller\IndexController;
use App\Controller\PageController;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Shared\Entity\MenuItemRelation;
use Shared\Entity\MenuItems;
use Shared\Entity\Page;
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
            if ($item->getSlug()) {
                list($routeKey, $route) = $this->createRoute($item);
                $routes->add($routeKey, $route);
            }
        }

        return $routes;
    }

    /**
     * @param MenuItems $item
     * @return array
     * @throws \Doctrine\ORM\ORMException
     */
    private function createRoute(MenuItems $item)
    {
        $defaultLocale = $this->settingService->value('language');
        $language = $item->getMenu()->getLocale();
        $slug = $item->getSlug();
        $type = $item->getType();
        $uniqSlag = $item->getId();
        $defaults = [];


        if ($type === SiteRoutes::TYPE_PAGE ) {
            $controller = PageController::class;
        } elseif ($type === SiteRoutes::TYPE_CATEGORY ) {
            $controller = IndexController::class;
        } elseif ($type === SiteRoutes::TYPE_POST ) {
            $controller = IndexController::class;
            if (!$item->getRelations()->isEmpty()) {
                $slug = $item->getRelations()->first()->getSlug();
            }
        } elseif ($type === SiteRoutes::TYPE_ROOT ) {
            $controller = IndexController::class;
        } else {
            $controller = ErrorController::class;
        }

        if (empty($slug) or $slug === '/' or $slug === 'index') {
            $controller = IndexController::class;
            $slug = null;
        }

        if (!$item->getRelations()->isEmpty()) {
            /** @var MenuItemRelation $relation */
            $relation = $item->getRelations()->first();
            $relationObject = $this->em->getReference($relation->getObjectClass(), $relation->getObjectId());
            if ($relationObject) {
                $slug = $relationObject->getSlug();
            }
        }

        $defaults['type'] = $type;
        $defaults['slug'] = $slug;
        $defaults['title'] = $item->getTitle();
        $defaults['_controller'] = $controller;
        $defaults['_locale'] = $language;

        if ($defaultLocale === $language) {
            $urlPattern = sprintf('/%s', $slug);
        } else {
            $urlPattern = sprintf('/{_locale}/%s', $slug);
        }

        $route = new Route($urlPattern, $defaults);
        return [
            $uniqSlag,
            $route
        ];
    }

    /**
     * @return ArrayCollection|MenuItems[]
     */
    private function getSiteMap()
    {
        $menuItems = $this->em->getRepository(MenuItems::class)->findBy(
            ['enabled' => true],
            ['left' => 'ASC', 'level' => 'ASC']
        );

        return new ArrayCollection($menuItems);
    }
}