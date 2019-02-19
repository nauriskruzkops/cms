<?php

namespace Admin\Form\EventListener;

use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class PageListener implements EventSubscriberInterface
{
    /** @var EntityManager */
    protected $em;

    /**
     * MenuItemRelationListener constructor.
     * @param EntityManager $em
     */
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
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
        $event->setData($data);
    }

    /**
     * @param FormEvent $event
     */
    public function postSubmit(FormEvent $event)
    {
        /** @var array $data */
        $data = $event->getData();
        $event->setData($data);
    }

}