<?php

namespace Admin\Helpers;

use Admin\Service\CategoryService;
use Admin\Service\SettingService;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Templating\Helper\Helper;

class CategoryHelper extends Helper
{
    /** @var PhpEngine  */
    private $view;

    /** @var string */
    private $locale;

    /** @var SettingService */
    private $settingService;

    /** @var CategoryService */
    private $service;

    /**
     * CategoryHelper constructor.
     * @param $templating
     * @param SettingService $settingService
     * @param CategoryService $categoryService
     */
    public function __construct($templating, SettingService $settingService, CategoryService $categoryService)
    {
        $this->view = $templating;
        $this->settingService = $settingService;
        $this->service = $categoryService;
    }

    /**
     * @param null $locale
     */
    public function __invoke($locale = null)
    {
        $this->locale = $locale ? $locale : $this->settingService->value('language');

        return $this;
    }

    /**
     * @return array|\Admin\Entity\Category[]
     */
    public function getList()
    {
        return $this->service->getList($this->locale);
    }

    /**
     * Returns the canonical name of this helper.
     * @return string The canonical name
     */
    public function getName()
    {
        return 'category';
    }
}