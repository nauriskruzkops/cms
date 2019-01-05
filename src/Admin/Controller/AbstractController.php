<?php

namespace Admin\Controller;

use Admin\Service\SettingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController as AbstractSymfonyController;

abstract class AbstractController extends AbstractSymfonyController
{
    /**
     * @return SettingService
     */
    final public  function settings()
    {
        /** @var SettingService $settingService */
        $settingService = $this->container->get('settings');
        return $settingService;
    }

    /**
     * @return array
     */
    public static function getSubscribedServices()
    {
        $prent = parent::getSubscribedServices();
        $prent['settings'] = '?Admin\Service\SettingService';
        return $prent;
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function denyAccess(\Exception $e)
    {
        return $this->render('AdminBundle::layout/denied.html.php', ['exception' => $e]);
    }

    public function denyAccessUnlessGranted($attributes, $subject = null, string $message = 'Access Denied.')
    {
        if (!$this->isGranted($attributes, $subject)) {
            $message = 'User tried to access a page without having '.$attributes;
            $exception = $this->createAccessDeniedException($message);
            $exception->setAttributes($attributes);
            $exception->setSubject($subject);
            throw $exception;
        }
    }
}
