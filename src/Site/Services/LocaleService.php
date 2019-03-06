<?php
namespace App\Services;

use App\Services\SettingService;
use Symfony\Bundle\FrameworkBundle\Routing\Router;

class LocaleService
{
    /**
     * @var SettingService
     */
    private $settingService;

    /** @var Router */
    protected $router;

    /**
     * ManuHelper constructor.
     * @param SettingService $settingService
     * @param $router
     */
    public function __construct(SettingService $settingService,  $router)
    {
        $this->router = $router;
        $this->settingService = $settingService;
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->__invoke();
    }

    /**
     * @return string
     */
    public function __invoke()
    {
        return
            $this->router->getContext()->getParameter('_locale') ??
            $this->settingService->value('language');
    }

}