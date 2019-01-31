<?php

namespace Admin\Form\EventListener;

use Admin\Exception\FileUploadException;
use Admin\Service\FileUploader;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class PageBlockSettingsListener implements EventSubscriberInterface
{
    /** @var EntityManager */
    protected $em;

    /** @var FileUploader  */
    protected $fileUploader;

    /**
     * MenuItemRelationListener constructor.
     * @param EntityManager $em
     */
    public function __construct(EntityManager $em, FileUploader $fileUploader)
    {
        $this->em = $em;
        $this->fileUploader = $fileUploader;
    }

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            FormEvents::PRE_SUBMIT   => 'preSubmit',
            FormEvents::POST_SUBMIT   => 'postSubmit',
        ];
    }

    /**
     * @param FormEvent $event
     */
    public function preSubmit(FormEvent $event)
    {
        /** @var array $data */
        $data = $event->getData();

        if (isset($data['bg_image_upload']) && $data['bg_image_upload'] instanceof UploadedFile) {
            try {
                $fileUploader = $this->fileUploader;
                $fileUploader->setPath('page');
                $fileUploader->setReference($event->getForm()->getRoot()->getData());
                $file = $this->fileUploader->upload($data['bg_image_upload']);
                $data['bg_image'] = $file;
            } catch (FileUploadException|OptimisticLockException|ORMException $e) {
                $data['bg_image'] = null;
            }
        }

        $event->setData($data);
    }

    /**
     * @param FormEvent $event
     */
    public function postSubmit(FormEvent $event)
    {
        /** @var array $data */
        $data = $event->getData();
        //var_dump($data);
        $event->setData($data);
    }

}