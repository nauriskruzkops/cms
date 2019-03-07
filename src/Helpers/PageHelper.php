<?php

namespace App\Helpers;

use App\Services\SettingService;
use Doctrine\ORM\EntityManager;
use Shared\Entity\Page;
use Shared\Entity\PageBlocks;
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
     * @param Page|null $page
     * @return boolean
     * @throws \Admin\Exception\PageSettingsException
     */
    public function hasHeader(?Page $page = null)
    {
        if (!$page instanceof Page) {
            $page = $this->page;
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
     * @param bool $withStyle
     * @return string
     * @throws \Admin\Exception\PageSettingsException
     */
    public function headerBackground($page = null, $withStyle = true)
    {
        if ($page !== null) {
            $page = $this->page;
        }

        $style = [];
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

        return implode(';', $style);
    }

    /**
     * @param PageBlocks $block
     * @return string
     */
    public function blockBackground(PageBlocks $block)
    {
        $blockConfig = is_array($block->getConfig()) ? ($block->getConfig()[0] ?? []) : [];
        if ($blockConfig['bg_transparent'] ?? true) {
            return '';
        }
        $style = [];
        $backgroundImg = $blockConfig['bg_image'] ?? null;
        if ($backgroundImg) {
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
     * Returns the canonical name of this helper.
     *
     * @return string The canonical name
     */
    public function getName()
    {
        return 'page';
    }
}