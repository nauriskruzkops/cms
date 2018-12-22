<?php

namespace Admin\Form\EventListener;

use Admin\Form\MenuItemRelationForm;
use Doctrine\ORM\EntityManager;
use Shared\Entity\MenuItemRelation;
use Shared\Entity\MenuItems;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class MenuItemListener implements EventSubscriberInterface
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
            FormEvents::PRE_SET_DATA => 'onPreSetData',
            FormEvents::PRE_SUBMIT   => 'onSubmit',
        ];
    }

    /**
     * @param FormEvent $event
     * @throws \Doctrine\ORM\ORMException
     */
    public function onPreSetData(FormEvent $event)
    {
        $form = $event->getForm();
        $data = $event->getData();
        if ($data && $data->getType()) {
            $menuItemRelation = new MenuItemRelation();
            $menuItemRelation->setType($data->getType());
            $menuItemRelation->setMenuItem($data);
            $form->add('relations', CollectionType::class, [
                'entry_type' => MenuItemRelationForm::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'prototype_data' => $menuItemRelation,
            ]);
        }
    }

    /**
     * @param FormEvent $event
     * @throws \Doctrine\ORM\ORMException
     */
    public function onSubmit(FormEvent $event)
    {
        /** @var MenuItems $data */
        $data = $event->getData();
        if (($data['relations'] ?? false) && count($data['relations']) > 1) {
            $reference = $this->em->getReference(
                $data['relations'][0]['objectClass'],
                $data['relations'][0]['objectId']
            );

            if ($reference && method_exists($reference, 'getSlug')) {
                $data['slug'] = $reference->getSlug();
            }

            $event->setData($data);
        }
    }

}