<?php

namespace App\Helpers;

use Admin\Entity\Translation;
use Admin\Service\TranslationService;
use App\Services\SettingService;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Templating\Helper\Helper;

class TranslHelper extends Helper
{
    /** @var PhpEngine  */
    private $view;

    /**
     * @var SettingService
     */
    private $translationService;

    /**
     * TranslHelper constructor.
     * @param $templating
     * @param TranslationService $translationService
     */
    public function __construct($templating, TranslationService $translationService)
    {
        $this->view = $templating;
        $this->translationService = $translationService;
    }

    /**
     * @param $key
     * @param string $group
     * @return string
     */
    public function __invoke($key, $group = Translation::GROUP_SITE, $locale = null)
    {
        if (!$locale) {
            $this->view['locale'];
        }
        return $this->trans($key, $group, $locale);
    }

    /**
     * Returns the canonical name of this helper.
     * @return string The canonical name
     */
    public function getName()
    {
        return 'transl';
    }

    /**
     * @param $key
     * @param $group
     * @return string
     */
    public function trans($key, $group = null, $locale = null)
    {
        if (empty($group)) {
            $group = Translation::GROUP_SITE;
        }
        if (!$locale) {
            $locale = $this->view['locale'];
        }
        return $this->translationService->getTranslation($key, $locale, $group);
    }

}