<?php

namespace App\Controller;

use App\Services\CaptchaService;
use App\Services\SettingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController as AbstractSymfonyController;

abstract class AbstractController extends AbstractSymfonyController
{
    /**
     * @return SettingService
     */
    public function settings()
    {
        /** @var SettingService $settingService */
        $settingService = $this->container->get('settings');
        return $settingService;
    }

    /**
     * @return CaptchaService
     */
    public function captcha()
    {
        /** @var CaptchaService $reCaptchaService */
        $reCaptchaService = $this->container->get('captcha');
        return $reCaptchaService;
    }


    /**
     * @return array
     */
    public static function getSubscribedServices()
    {
        $prent = parent::getSubscribedServices();
        $prent['settings'] = '?'.SettingService::class;
        $prent['captcha'] = '?'.CaptchaService::class;

        return $prent;
    }
}
