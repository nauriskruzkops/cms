<?php

namespace App\Helpers;

use Admin\Service\SettingService;
use Doctrine\ORM\EntityManager;
use Shared\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Templating\Helper\Helper;
use Symfony\Bundle\FrameworkBundle\Templating\TimedPhpEngine;

class PageHelper extends Helper
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
     * ManuHelper constructor.
     * @param $templating
     * @param SettingService $settingService
     * @param EntityManager $em
     */
    public function __construct(TimedPhpEngine $templating, SettingService $settingService)
    {
        $this->view = $templating;
        $this->locale = $this->view['locale'];
        $this->settingService = $settingService;
    }

    /**
     * @param null $locale
     * @return $this
     */
    public function __invoke(Page $page = null)
    {
        if ($page !== null) {
            $this->page = $page;
        }
        return $this;
    }

    /**
     * @return boolean
     */
    public function hasHeader()
    {
        return true;
    }

    /**
     * @return boolean
     * @throws \Admin\Exception\PageSettingsException
     */
    public function hasHeaderTitle()
    {
        return ($this->page->getSetting('SHOW_TITLE', false));
    }

    /**
     * @return string
     * @throws \Admin\Exception\PageSettingsException
     */
    public function headerBackground()
    {
        $style = [];
        $backgroundImg = $this->page->getSetting('HEADER_BACKGROUND_IMG');
        if ($backgroundImg) {
            $style[] = sprintf('background-image:url(%s)', $backgroundImg);
        }

        $backgroundColor = $this->page->getSetting('HEADER_BACKGROUND_COLOR', '#cccccc');
        if ($backgroundColor) {
            $style[] = sprintf('background-color:%s', $backgroundColor);
        }

        return implode(';', $style);
    }



    /**
     * Returns the canonical name of this helper.
     *
     * @return string The canonical name
     */
    public function getName()
    {
        return 'page';
    }
}