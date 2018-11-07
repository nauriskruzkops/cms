<?php

namespace Admin\Form;

use Doctrine\ORM\EntityManager;
use Shared\Entity\Menu;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MenuForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

    /**
     * MenuForm constructor.
     * @param EntityManager $em
     */
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
            ])
            ->add('code', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    '-- Choose position --' => null,
                    'Main menu' => 'MAIN_TOP_MENU',
                ],
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Code',
                ],
            ])
            ->add('locale', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    '-- Choose language --' => null,
                    'Latvian' => 'lv',
                    'English' => 'en',
                ],
                'empty_data' => null,
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('items', CollectionType::class, [
                'entry_type' => MenuItemsForm::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
            ])
        ;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Menu::class,
        ));
        $resolver->setDefaults(array(
            'empty_data' => new Menu(),
        ));
    }
}

?>