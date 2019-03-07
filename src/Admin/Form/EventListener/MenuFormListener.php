<?php

namespace Admin\Form\EventListener;

use Admin\Form\MenuItemsForm;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Shared\Entity\Menu;
use Shared\Entity\MenuItems;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class MenuFormListener implements EventSubscriberInterface
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
            FormEvents::PRE_SET_DATA => 'onPreSetData',
        ];
    }

    /**
     * @param FormEvent $event
     */
    public function onPreSetData(FormEvent $event)
    {
        $root = null;
        $form = $event->getForm();
        /** @var Menu $data */
        $data = $event->getData();
        $findRoot = null;
        foreach ($data->getItems() as $menuItem) {
            $root = $menuItem->getRoot();
            break;
        }
        if ($root) {
            $prototype = new MenuItems();
            $prototype->setParent($root);
            $prototype->setRoot($root);
            $prototype->setType('page');
            $prototype->setMenu($data);

            $form->add('items', CollectionType::class, [
                'entry_type' => MenuItemsForm::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'by_reference' => false,
                'prototype_data' => $prototype,
                'empty_data' => $prototype,
            ]);
        }
    }

}