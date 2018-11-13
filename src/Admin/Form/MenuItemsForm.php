<?php

namespace Admin\Form;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;
use Shared\Entity\Category;
use Shared\Entity\Menu;
use Shared\Entity\MenuItemRelation;
use Shared\Entity\MenuItems;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MenuItemsForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Title',
                ],
                'label' => 'Title',
            ])
            ->add('slug', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Url',
                ],
                'label' => 'Slug',
            ])
            ->add('type', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    '-- Content type --' => null,
                    'Page' => 'page',
                    'Post' => 'post',
                    'Category' => 'category',
                    'Custom' => 'custom',
                ],
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Type',
                ],
                'label' => 'Type',
            ])
            ->add('left', IntegerType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Sort',
                ],
                'label' => 'Sort',
            ])
            ->add('enabled', CheckboxType::class, [
                'required' => false,
                'attr' => [],
            ])
            ->add('parent', EntityType::class, [
                'class' => MenuItems::class,
                'required' => false,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->orderBy('u.left', 'ASC');
                },
                'choice_label' => function (MenuItems $er) {
                    return str_repeat('-', $er->getLevel()) .' '. $er->getTitle();
                },
                'label' => 'Parent menu',
                'empty_data' => '',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Parent',
                ],
            ])
        ;

        $builder->addEventListener(FormEvents::POST_SET_DATA, [$this, 'onPostSetData']);
        $builder->addEventListener(FormEvents::SUBMIT, [$this, 'onSubmit']);
    }

    /**
     * @param FormEvent $event
     */
    public function onPostSetData(FormEvent $event)
    {
        $form = $event->getForm();
        $menuItems = $form->getData();
        if ($menuItems) {
            $form->add('relations', CollectionType::class, [
                'entry_type' => MenuItemRelationForm::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'prototype_data' => (new MenuItemRelation())
                    ->setType($menuItems->getType())
                    ->setMenuItem($menuItems)
            ]);
        }
    }

    /**
     * @param FormEvent $event
     * @throws \Doctrine\ORM\ORMException
     */
    public function onSubmit(FormEvent $event)
    {
        /** @var MenuItems $menuItem */
        $menuItem = $event->getData();
        $menuItemRelations = $this->em->getRepository(MenuItemRelation::class)->findBy([
            'menuItem' => $menuItem
        ]);

        foreach ($menuItemRelations as $menuItemRelation) {
            if (!$menuItem->getRelations()->contains($menuItemRelation)) {
                $this->em->remove($menuItemRelation);
            }
        }
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => MenuItems::class,
        ]);

        $resolver->setDefaults(array(
            'empty_data' => function (FormInterface $form) {
                $menuItem = new MenuItems();
                if ($form->getParent() && $form->getParent()->getParent()->getData()) {
                    $menuItem->setMenu($form->getParent()->getParent()->getData());
                }
                return $menuItem;
            },
        ));
    }
}

?>