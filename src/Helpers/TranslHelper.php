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
    public function __invoke($key, $group = Translation::GROUP_SITE)
    {
        return $this->trans($key, $group);
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
    public function trans($key, $group)
    {
        if (empty($group)) {
            $group = Translation::GROUP_SITE;
        }
        return $this->translationService->getTranslation($key, $this->view['locale'], $group);
    }

}