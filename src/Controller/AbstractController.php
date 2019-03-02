<?php

namespace App\Controller;

use Admin\Service\SettingService;
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
     * @return array
     */
    public static function getSubscribedServices()
    {
        $prent = parent::getSubscribedServices();
        $prent['settings'] = '?'.SettingService::class;

        return $prent;
    }
}
