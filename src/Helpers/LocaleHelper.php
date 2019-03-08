<?php

namespace App\Helpers;

use App\Services\LocaleService;
use Symfony\Component\Templating\Helper\Helper;

class LocaleHelper extends Helper
{
    /**
     * @var LocaleService
     */
    private $localeService;

    /**
     * ManuHelper constructor.
     * @param LocaleService $localeService
     */
    public function __construct(LocaleService $localeService)
    {
        $this->localeService = $localeService;
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->localeService;
    }

    /**
     * @return string
     */
    public function __invoke()
    {
        return (string) $this->localeService;
    }

    /**
     * Returns the canonical name of this helper.
     * @return string The canonical name
     */
    public function getName()
    {
        return 'locale';
    }
}