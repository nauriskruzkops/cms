<?php

namespace App\Helpers;

use App\Services\SettingService;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Templating\Helper\Helper;

class SettingsHelper extends Helper
{
    /** @var PhpEngine  */
    private $view;

    /**
     * @var SettingService
     */
    private $settingService;

    public function __construct($templating, SettingService $settingService)
    {
        $this->view = $templating;
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
        $locale = $this->view['locale'];
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


}