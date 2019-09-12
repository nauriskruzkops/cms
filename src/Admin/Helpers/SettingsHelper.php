<?php

namespace Admin\Helpers;

use Admin\Service\SettingService;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpFoundation\ParameterBag;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Templating\Helper\Helper;

class SettingsHelper extends Helper
{
    /** @var PhpEngine  */
    private $view;

    /** @var SettingService */
    private $settingService;

    /** @var string */
    private $locale;

    public function __construct($templating, $settingService, RequestStack $requestStack)
    {
        $this->view = $templating;
        $this->locale = $requestStack->getCurrentRequest()->getLocale();
        $this->settingService = $settingService;
    }

    /**
     * Returns the canonical name of this helper.
     * @return string The canonical name
     */
    public function getName()
    {
        return 'settings';
    }

    /**
     * @param $key
     * @param null $default
     * @return string
     */
    public function value($key, $default = null)
    {
        $locale = $this->locale;
        return $this->settingService->value($key, $default, (string)$locale);
    }

    /**
     * @param $key
     * @return array
     */
    public function values($key)
    {
        return $this->settingService->values($key);
    }

    /**
     * @return ParameterBag
     */
    public function parameters()
    {
        return $this->settingService->parameters();
    }
}