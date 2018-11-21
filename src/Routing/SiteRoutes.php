<?php
namespace App\Routing;

use Admin\Service\SettingService;
use App\Controller\ErrorController;
use App\Controller\IndexController;
use App\Controller\PageController;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Shared\Entity\MenuItems;
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
            '_controller' => IndexController::class,
            '_locale' => $default_locale,
        );
        $route = new Route('/{_locale}', $defaults, [
            '_locale' => implode('|', $languages)
        ]);

        $routes->add('index', $route);

        $menuItems = $this->getSiteMap();

        foreach ($menuItems as $item) {
            $routes->add($item->getSlug(), $this->createRoute($item));
        }

        return $routes;
    }

    /**
     * @param MenuItems $item
     * @param $controller
     * @return Route
     */
    private function createRoute(MenuItems $item)
    {
        $defaultLocale = $this->settingService->value('language');
        $language = $item->getMenu()->getLocale();
        $slug = $item->getSlug();
        $type = $item->getType();

        if ($type === SiteRoutes::TYPE_PAGE ) {
            $controller = PageController::class;
        } elseif ($type === SiteRoutes::TYPE_CATEGORY ) {
            $controller = IndexController::class;
        } elseif ($type === SiteRoutes::TYPE_POST ) {
            $controller = IndexController::class;
        } elseif ($type === SiteRoutes::TYPE_ROOT ) {
            $controller = IndexController::class;
        } else {
            $controller = ErrorController::class;
        }

        $defaults = array(
            '_controller' => $controller,
            '_locale' => $language,
        );

        if ($defaultLocale === $language) {
            $urlPattern = sprintf('/%s', $slug);
        } else {
            $urlPattern = sprintf('/{_locale}/%s', $slug);
        }

        $route = new Route($urlPattern, $defaults);

        return $route;
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