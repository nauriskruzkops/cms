<?php

namespace App\Helpers;

use App\Services\SettingService;
use Doctrine\ORM\EntityManager;
use Admin\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Templating\Helper\Helper;

class LayoutHelper extends Helper
{
    /** @var Page */
    private $page;

    /** @var PhpEngine  */
    private $view;

    /** @var SettingService */
    private $settingService;

    /** @var Request|null  */
    private $request;

    /** @var string  */
    private $locale;

    /** @var ParameterBagInterface  */
    protected $parameterBag;

    /**
     * LayoutHelper constructor.
     * @param $templating
     * @param SettingService $settingService
     * @param EntityManager $em
     */
    public function __construct(PhpEngine $templating, SettingService $settingService, RequestStack $requestStack, ParameterBagInterface $parameterBag)
    {
        $this->view = $templating;
        $this->request = $requestStack->getCurrentRequest();
        $this->locale = $this->request->getLocale();
        $this->settingService = $settingService;
        $this->parameterBag = $parameterBag;
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
     * @return mixed
     * @throws \Admin\Exception\PageSettingsException
     */
    public function logo()
    {
        $logo = 'logo-white.png';
        if ($this->page) {
            $pageStyle = $this->page->getSetting('PAGE_STYLE');
            if ($pageStyle === 'light') {
                $logo = 'logo-black.png';
            }
        }

        return $this->view['assets']->getUrl($logo, 'images');
    }

    public function canonicalUrl()
    {
        $domains = $this->parameterBag->get('default_domain_locales');
        $locale = $this->request->getLocale();
        $requestURI = $this->request->getRequestUri();
        $requestURI = str_replace(sprintf('/%s', $locale), '', $requestURI.'/');
        $requestURI = trim($requestURI, '/');

        $canonical = sprintf('%s://%s/%s/%s', $this->request->getScheme(), $this->request->getHost(), $locale, $requestURI);
        $canonical = rtrim($canonical, '/');

        return $canonical;
    }

    /**
     * @return array
     */
    public function languages()
    {
        $languages = $this->view['settings']->values('languages');
        if ($languages) {
            return $this->view['menu']->getLanguageMenuItems();
        }

        return null;
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