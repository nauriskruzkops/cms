<?php

namespace App\Helpers;

use App\Services\SettingService;
use Doctrine\ORM\EntityManager;
use Admin\Entity\Page;
use Admin\Entity\PageBlocks;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Templating\Helper\Helper;

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
    public function __construct(PhpEngine $templating, SettingService $settingService)
    {
        $this->view = $templating;
        $this->locale = $this->view['locale'];
        $this->settingService = $settingService;
    }

    /**
     * @param Page|null $page
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
     * @param Page|null $page
     * @return boolean
     * @throws \Admin\Exception\PageSettingsException
     */
    public function hasHeader(?Page $page = null)
    {
        if (!$page instanceof Page) {
            $page = $this->page;
            if (!$page) {
                return false;
            }
        }

        return ($page->getSetting('SHOW_PAGE_HEADER', true));
    }

    /**
     * @param Page|null $page
     * @return boolean
     * @throws \Admin\Exception\PageSettingsException
     */
    public function hasHeaderTitle(?Page $page = null)
    {
        if (!$page instanceof Page) {
            $page = $this->page;
        }
        return ($page->getSetting('SHOW_TITLE', false));
    }

    /**
     * @param null $page
     * @return string
     * @throws \Admin\Exception\PageSettingsException
     */
    public function headerStyle($page = null)
    {
        if ($page !== null) {
            $page = $this->page;
        }

        $style = 'header-style-one';
        $pageStyle = $page->getSetting('PAGE_STYLE');
        if ($pageStyle == 'light') {
            $style = 'header-style-two';
        }
        $this->view['slots']->set('headerStyle', $style);

        return $style;
    }

    /**
     * @param null $page
     * @param bool $withStyle
     * @return string
     * @throws \Admin\Exception\PageSettingsException
     */
    public function headerBackground($page = null, $withStyle = true)
    {
        $backgroundColor = $this->settingService->value('page_header_bg_color');

        if ($page !== null) {
            $page = $this->page;
        }

        $style = [];

        if ($page) {
            $backgroundImg = $page->getSetting('HEADER_BACKGROUND_IMG');
            if ($backgroundImg) {
                if (!$withStyle) {
                    return $this->view['assets']->getUrl($backgroundImg, 'upload');
                }
                $style[] = sprintf('background-image:url(%s)', $this->view['assets']->getUrl($backgroundImg, 'upload'));
            } else {
                if (!$withStyle) {
                    return '';
                }
            }

            $style[] = 'background-position: center center';
            //$style[] = 'background-attachment:fixed';

            $backgroundColor = $page->getSetting('HEADER_BACKGROUND_COLOR', '#cccccc');
            $style[] = sprintf('background-color:%s', $backgroundColor);
        } else {
            $style[] = sprintf('background-color:%s', $backgroundColor);
        }


        return implode(';', $style);
    }

    /**
     * @param PageBlocks $block
     * @param bool $justFile
     * @return string
     */
    public function blockBackground(PageBlocks $block, $justFile = false)
    {
        $blockConfig = is_array($block->getConfig()) ? ($block->getConfig()[0] ?? []) : [];
        if ($blockConfig['bg_transparent'] ?? true) {
            return '';
        }
        $style = [];
        $backgroundImg = $blockConfig['bg_image'] ?? null;
        if ($backgroundImg) {
            if ($justFile) {
                return $this->view['assets']->getUrl($backgroundImg, 'upload');
            }
            $style[] = sprintf('background-image:url(%s)', $this->view['assets']->getUrl($backgroundImg, 'upload'));
            $style[] = 'background-position: center center';
            $style[] = 'background-attachment:fixed';
        }

        $backgroundColor = $blockConfig['bg_color'] ?? null;
        if ($backgroundColor) {
            $style[] = sprintf('background-color:%s', $backgroundColor);
        }

        return implode(';', $style);
    }

    /**
     * @param PageBlocks $block
     * @param bool $justFile
     * @return string
     */
    public function blockBackgroundColor(PageBlocks $block, $justColor = false)
    {
        $blockConfig = is_array($block->getConfig()) ? ($block->getConfig()[0] ?? []) : [];
        if ($blockConfig['bg_transparent'] ?? true) {
            return '';
        }

        $backgroundColor = $blockConfig['bg_color'] ?? null;
        if ($backgroundColor) {
            if ($justColor) {
                return $backgroundColor;
            }
            return sprintf('background-color:%s', $backgroundColor);
        }
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