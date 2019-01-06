<?php

namespace App\Helpers;

use Admin\Service\SettingService;
use Doctrine\ORM\EntityManager;
use Shared\Entity\Menu;
use Shared\Entity\MenuItems;
use Shared\Repository\MenuItemsRepository;
use Shared\Repository\MenuRepository;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Templating\Helper\Helper;
use Symfony\Bundle\FrameworkBundle\Templating\TimedPhpEngine;

class MenuHelper extends Helper
{
    const MAIN_TOP_MENU = 'MAIN_TOP_MENU';

    /** @var string */
    private $locale;

    /** @var PhpEngine  */
    private $view;

    /**
     * @var SettingService
     */
    private $settingService;

    /**
     * @var EntityManager
     */
    protected $em;

    /**
     * ManuHelper constructor.
     * @param $templating
     * @param SettingService $settingService
     * @param EntityManager $em
     */
    public function __construct(TimedPhpEngine $templating, SettingService $settingService, EntityManager $em)
    {
        $this->view = $templating;
        $this->locale = $this->view['locale'];
        $this->settingService = $settingService;
        $this->em = $em;
    }

    /**
     * @param null $locale
     * @return $this
     */
    public function __invoke($locale = null)
    {
        if ($locale !== null) {
            $this->locale = $locale;
        }
        return $this;
    }

    /**
     * @param $code
     * @param null $locale
     * @return Menu|null
     */
    public function getMenu($code, $locale = null)
    {
        if ($locale === null) {
            $locale = $this->locale;
        }

        /** @var MenuRepository $menuRepository */
        $menuRepository = $this->em->getRepository(Menu::class);

        return $menuRepository->getSiteMenu($code, $locale);
    }

    /**
     * @return array
     */
    public function getMainTopMenu()
    {
        $menu = $this->getMenu(MenuHelper::MAIN_TOP_MENU);
        return [
            'menu' => $menu,
            'items' =>  $menu ? $this->getMenuItems($menu) : [],
        ];
    }

    /**
     * @param Menu $menu
     * @return MenuItems[]
     */
    public function getMenuItems(Menu $menu)
    {
        /** @var MenuItems[] $items */
        $items = $menu->getItems()->filter(function (MenuItems $item) {
            return ($item->isEnabled() && $item->getParent());
        });

        return $items;
    }

    /**
     * Returns the canonical name of this helper.
     * @return string The canonical name
     */
    public function getName()
    {
        return 'menu';
    }
}