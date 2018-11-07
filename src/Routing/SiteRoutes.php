<?php
namespace App\Routing;

use Admin\Service\SettingService;
use App\Controller\IndexController;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Shared\Entity\MenuItems;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

class SiteRoutes
{
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
        foreach ($menuItems as $items) {
            $routes->add($items->getSlug(), $this->createRoute($items));
        }

        return $routes;
    }

    /**
     * @param MenuItems $item
     * @param $controller
     * @return Route
     */
    private function createRoute(MenuItems $item, $controller = null)
    {
        $defaultLocale = $this->settingService->value('language');
        $language = $item->getMenu()->getLocale();
        $slug = $item->getSlug();

        if (!$controller) {
            $controller = IndexController::class;
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