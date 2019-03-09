<?php

namespace Admin\Form\EventListener;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Admin\Entity\MenuItemRelation;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class MenuItemRelationFormListener implements EventSubscriberInterface
{
    /** @var EntityManager */
    protected $em;

    /**
     * MenuItemRelationListener constructor.
     * @param EntityManager $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            FormEvents::POST_SET_DATA => 'onPostSetData',
            FormEvents::PRE_SUBMIT   => 'onSubmit',
        ];
    }

    /**
     * @param FormEvent $event
     * @throws \Doctrine\ORM\ORMException
     */
    public function onPostSetData(FormEvent $event)
    {
        /** @var MenuItemRelation $data */
        $data = $event->getData();
        $form = $event->getForm();

        if ($data and $data->getObjectClass() && $data->getObjectId()) {
            $object = $this->em->getRepository($data->getObjectClass())->find($data->getObjectId());
            if ($object) {
                $form->get('object')->setData($object);
                $event->setData($form->getData());
            }
        }
    }

    /**
     * @param FormEvent $event
     */
    public function onSubmit(FormEvent $event)
    {
        /** @var MenuItemRelation $data */
        $data = $event->getData();
        if (isset($data['object']) && !empty($data['object'])) {
            $data['objectId'] = $data['object'];
            $event->setData($data);
        }
    }

}