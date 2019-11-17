<?php

namespace App\Helpers;

use App\Services\SettingService;
use Doctrine\ORM\EntityManager;
use Admin\Entity\Menu;
use Admin\Entity\MenuItems;
use Admin\Repository\MenuItemsRepository;
use Admin\Repository\MenuRepository;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Templating\Helper\Helper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine as TimedPhpEngine;

class MenuHelper extends Helper
{
    const MAIN_TOP_MENU = 'MAIN_TOP_MENU';

    private $request;

    /** @var string */
    private $locale;

    /** @var PhpEngine  */
    private $view;

    /** @var ParameterBagInterface  */
    private $parameterBag;

    /** @var SettingService */
    private $settingService;

    /** @var EntityManager */
    protected $em;

    /**
     * ManuHelper constructor.
     * @param TimedPhpEngine $templating
     * @param SettingService $settingService
     * @param EntityManager $em
     * @param RequestStack $requestStack
     * @param ParameterBagInterface $parameterBag
     */
    public function __construct(PhpEngine $templating, SettingService $settingService, EntityManager $em, RequestStack $requestStack, ParameterBagInterface $parameterBag)
    {
        $this->view = $templating;
        $this->request = $requestStack->getCurrentRequest();
        $this->locale = $this->request->getLocale();
        $this->settingService = $settingService;
        $this->parameterBag = $parameterBag;
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
        $menuItems = $this->em->getRepository(MenuItems::class)->getNestedArray($menu, true);
        if ($menuItems && ($menuItems[0] ?? false) && $menuItems[0]['level'] === 0) {
            $menuItems = $menuItems['0']['__children'];
        }

        return [
            'menu' => $menu,
            'items' => $menuItems ?? [],
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
     * @return array
     */
    public function getLanguageMenuItems()
    {
        $return = [];
        $languages = $this->settingService->values('languages');
        $defaultDomainLocales = $this->parameterBag->get('default_domain_locales');

        if ($defaultDomainLocales) {
            $urlSchema = sprintf('%s://%s', $this->request->getScheme(), '%s');
            $defaultHost = array_filter($defaultDomainLocales, function (array $param) {
                return ($param['for_other_locale'] ?? false);
            });
            foreach ($languages as $languageKey => $languageTitle) {
                $localeDefaultByHost = true;
                $findHost = array_filter($defaultDomainLocales, function (array $param) use ($languageKey) {
                    return ($languageKey == $param['locale']);
                });
                if (empty($findHost)) {
                    $localeDefaultByHost = false;
                    $findHost = $defaultHost;
                }
                $findHost = end($findHost);

                $requestUri = '';
                if (!$localeDefaultByHost) {
                    $requestUri = $this->view['router']->path('index', ['_locale' => $languageKey]);
                }

                $code = sprintf('%s-%s', $languageKey, strtoupper($languageKey));
                $return[] = [
                    'locale' => $languageKey,
                    'code' => $code,
                    'title' => $languageTitle,
                    'uri' => sprintf($urlSchema, $findHost['host']).$requestUri,
                ];
            }
            return $return;
        }

        return $return;
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