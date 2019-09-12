<?php

namespace App\Helpers;

use App\Services\SettingService;
use App\Exception\Exception;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\AssetsHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Asset\Package;
use Symfony\Component\Asset\Packages;
use Symfony\Component\Asset\PathPackage;
use Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy;
use Symfony\Component\Asset\VersionStrategy\StaticVersionStrategy;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Templating\Helper\Helper;

class ThemeHelper extends Helper
{
    /** @var PhpEngine  */
    private $view;

    /** @var SettingService */
    private $settingService;

    /** @var string */
    private $theme;

    /** @var string */
    private $locale;

    /**
     * LayoutHelper constructor.
     * @param PhpEngine $templating
     * @param SettingService $settingService
     * @param RequestStack $requestStack
     */
    public function __construct(PhpEngine $templating, SettingService $settingService, RequestStack $requestStack)
    {
        $this->view = $templating;
        $this->locale = $requestStack->getCurrentRequest()->getLocale();
        $this->settingService = $settingService;
        $this->theme = $settingService->value('site_theme', 'default');
    }

    /**
     * @return $this
     */
    public function __invoke()
    {
        return $this;
    }

    /**
     * @param $template
     * @return string
     */
    public function extend($template)
    {
        $path = $this->theme.'/'.ltrim($template, '/');
        return $this->view->extend($path);
    }

    /**
     * @param $path
     * @param array $parameters
     * @return string
     */
    public function render($path, $parameters = [])
    {
        try {
            $path = $this->theme . '/' . ltrim($path, '/');
            return $this->view->render($path, $parameters);
        } catch (\InvalidArgumentException $e) {
            return sprintf('ERROR on render content from %s : %s ', $path, $e->getMessage());
        }
    }

    public function assetsGetUrl($resource, $pckg)
    {
        $packageCode = $this->theme.'_'.$pckg;

        $package = new PathPackage('/assets/theme/'.$this->theme.DIRECTORY_SEPARATOR.$pckg, new StaticVersionStrategy('v1'));

        $packages = new Packages();
        $packages->addPackage($packageCode, $package);
        $this->view->set(new AssetsHelper($packages));

        return $this->view['assets']->getUrl($resource, $packageCode);
    }

    /**
     * @return array
     * @throws \Admin\Exception\Exception
     */
    public function config()
    {
        return $this->settingService->theme();
    }

    /**
     * Returns the canonical name of this helper.
     *
     * @return string The canonical name
     */
    public function getName()
    {
        return 'theme';
    }
}