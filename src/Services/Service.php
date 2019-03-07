<?php
namespace App\Services;

use Admin\Service\SettingService;
use Doctrine\ORM\EntityManager;

class Service
{
    /** @var SettingService */
    private $settingService;

    /** @var EntityManager  */
    private $em;

    /**
     * Service constructor.
     * @param SettingService $settingService
     * @param EntityManager $em
     */
    public function __construct(SettingService $settingService, EntityManager $em)
    {
        $this->settingService = $settingService;
        $this->em = $em;
    }

}