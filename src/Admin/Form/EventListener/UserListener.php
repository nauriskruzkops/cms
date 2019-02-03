<?php

namespace Admin\Form\EventListener;

use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class UserListener implements EventSubscriberInterface
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
        ];
    }

    /**
     * @param FormEvent $event
     */
    public function preSubmit(FormEvent $event)
    {
        /** @var array $data */
        $data = $event->getData();

        if(($data['plainPassword'] ?? false)) {
           if (($data['plainPassword']['first'] ?? false)) {
               if (empty($data['plainPassword']['first'])) {
                   unset($data['plainPassword']);
               }
           } else {
               unset($data['plainPassword']);
           }
        }

        $event->setData($data);
    }

}