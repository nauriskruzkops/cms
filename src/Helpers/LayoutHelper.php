<?php

namespace App\Helpers;

use App\Services\SettingService;
use Doctrine\ORM\EntityManager;
use Admin\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Templating\Helper\Helper;

class LayoutHelper extends Helper
{
    /** @var Page */
    private $page;

    /** @var PhpEngine  */
    private $view;

    /**
     * @var SettingService
     */
    private $settingService;

    /**
     * LayoutHelper constructor.
     * @param $templating
     * @param SettingService $settingService
     * @param EntityManager $em
     */
    public function __construct(PhpEngine $templating, SettingService $settingService)
    {
        $this->view = $templating;
        $this->locale = $this->view['locale'];
        $this->settingService = $settingService;
    }

    /**
     * @param null $object
     * @return $this
     */
    public function __invoke($object = null)
    {
        if ($object instanceof Page) {
            $this->page = $object;
        }
        return $this;
    }

    /**
     * @return string
     * @throws \Admin\Exception\PageSettingsException
     */
    public function pageClass()
    {
        $class = '';
        if ($this->page) {
            $class .= ' page_content';
            $pageStyle = $this->page->getSetting('PAGE_STYLE');
            if ($pageStyle) {
                $class .= ' page_style_'.$pageStyle;
            }
        }
        $class = trim($class);
        return $class;
    }

    /**
     * Returns the canonical name of this helper.
     *
     * @return string The canonical name
     */
    public function getName()
    {
        return 'layout';
    }
}