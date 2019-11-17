<?php

namespace App\EventListener;

use App\Services\SettingService;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class LocaleListener implements EventSubscriberInterface
{
    /** @var SettingService */
    private $settingService;

    /** @var array */
    private $domainLocales;

    /** @var string */
    private $locale;

    /**
     * LocaleListener constructor.
     * @param SettingService $settingService
     * @param ParameterBagInterface $parameters
     */
    public function __construct(SettingService $settingService, ParameterBagInterface $parameters)
    {
        $this->settingService = $settingService;
        $this->domainLocales = $parameters->get('default_domain_locales');
        $this->locale = $parameters->get('default_locale');
    }
    /**
     * Set default locale
     *
     * @param GetResponseEvent $event
     */
    public function onKernelRequest(GetResponseEvent $event)
    {
        $request = $event->getRequest();
        $host = $request->getHttpHost();

        $locale = $this->locale;
        if ($locale === null) {
            $this->settingService->value('language');
        }
        if ($this->domainLocales and is_array($this->domainLocales)) {
            foreach ($this->domainLocales as $domainLocale) {
                if ($domainLocale['host'] == $host) {
                    $locale = $domainLocale['locale'];
                    break;
                }
            }
        }
        $request->setLocale($locale);
    }

    /**
     * {@inheritdoc}
     */
    static public function getSubscribedEvents()
    {
        return array(
            // must be registered before the default Locale listener
            KernelEvents::REQUEST => [['onKernelRequest', 100]],
        );
    }

}