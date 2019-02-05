<?php

namespace Admin\Form;

use Admin\Form\EventListener\MenuItemFormListener;
use Doctrine\ORM\EntityManager;
use Shared\Entity\MenuItems;
use Shared\Repository\MenuItemsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
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
            ->add('enabled', CheckboxType::class, [
                'required' => false,
                'attr' => [],
            ])
            ->add('parent', EntityType::class, [
                'class' => MenuItems::class,
                'required' => false,
                'query_builder' => function (MenuItemsRepository $er) {
                    $qb = $er->createQueryBuilder('m');
                    return $qb;
                },
                'choice_label' => function (MenuItems $er) {
                    return str_repeat('-', $er->getLevel()) .' '. $er->getTitle();
                },
                'preferred_choices' => function (MenuItems $er) {
                    return (!$er->getParent());
                },
                'label' => 'Parent menu',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Parent',
                ],
            ])
            ->addEventSubscriber(new MenuItemFormListener($this->em))
        ;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => MenuItems::class,
//            'empty_data' => function (FormInterface $form) {
//                $menuItem = new MenuItems();
//                if ($form->getParent() && $form->getParent()->getParent()->getData()) {
//                    $menuItem->setMenu($form->getParent()->getParent()->getData());
//                }
//                return $menuItem;
//            },
        ]);
    }
}

?>