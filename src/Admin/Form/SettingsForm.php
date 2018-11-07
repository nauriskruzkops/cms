<?php

namespace Admin\Form;

use Shared\Entity\Settings;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SettingsForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('key', TextType::class, [
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'readonly' => 'readonly',
                ],
                'label_attr' => [
                    'class' => 'col-sm-2 col-form-label'
                ]
            ])
            ->add('title', TextType::class, [
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'readonly' => 'readonly',
                ],
                'label_attr' => [
                    'class' => 'col-sm-2 col-form-label'
                ]
            ])
            ->add('value', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                ],
                'label_attr' => [
                    'class' => 'col-sm-2 col-form-label'
                ]

            ])
            ->add('values', CollectionType::class, [
                'entry_type' => SettingsValueForm::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
            ])
            ->add('translatable', CheckboxType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input',
                ],
                'label_attr' => [
                    'class' => 'col-sm-2 form-check-label',
                ],

            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Settings::class,
        ));
    }
}

?>