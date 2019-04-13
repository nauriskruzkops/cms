<?php

namespace Admin\Form\EventListener;

use Admin\Entity\Page;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
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
            FormEvents::PRE_SUBMIT   => 'preSubmit',
            FormEvents::POST_SUBMIT   => 'postSubmit',
            FormEvents::PRE_SET_DATA => 'onPreSetData',
        ];
    }


    /**
     * @param FormEvent $event
     * @throws \Doctrine\ORM\ORMException
     */
    public function onPreSetData(FormEvent $event)
    {
        $form = $event->getForm();
        /** @var Page $data */
        $data = $event->getData();

        //if ($form->getParent() instanceof Form) {
        if ($data instanceof Page) {
            $locale = $data->getLocale();
            $form->remove('parent');
            $form->add('parent', EntityType::class, [
                'class' => Page::class,
                'required' => false,
                'query_builder' => function (EntityRepository $er) use ($locale) {
                    return $er->createQueryBuilder('u')
                        ->where('u.locale = :locale')->setParameter('locale', $locale)
                        ->orderBy('u.left', 'ASC');
                },
                'choice_label' => function (Page $er) {
                    return str_repeat('-', $er->getLevel()) .' '. $er->getTitle();
                },
                'label' => 'Parent page',
                'empty_data' => '',
                'attr' => [
                    'class' => 'form-control',
                ],
            ]);
        }
        //}
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