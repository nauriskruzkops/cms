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
     * @throws \Doctrine\ORM\ORMException
     */
    public function preSubmit(FormEvent $event)
    {
        /** @var array $data */
        $data = $event->getData();

        if($data['password'] ?? false) {
           if ($data['password']['first'] ?? false) {
               if (empty($data['password']['first'])) {
                   unset($data['password']);
               }
           }
        }

        $event->setData($data);
    }

}