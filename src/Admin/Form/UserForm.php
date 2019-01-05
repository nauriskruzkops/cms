<?php

namespace Admin\Form;

use Admin\Form\EventListener\UserListener;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Shared\Entity\Category;
use Shared\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

    /**
     * PostForm constructor.
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
            ->add('name', TextType::class, [
                'required' => false,
                'label' => 'Name',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Name',
                ],
            ])
            ->add('surname', TextType::class, [
                'required' => false,
                'label' => 'Surname',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Surname',
                ],
            ])
            ->add('email', TextType::class, [
                'required' => false,
                'label' => 'Email',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Email',
                ],
            ])
            ->add('username', TextType::class, [
                'required' => false,
                'label' => 'Username',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Username',
                ],
            ])
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'The password fields must match.',
                'options' => ['attr' => ['class' => 'password-field form-control']],
                'required' => false,
                'first_options'  => ['label' => 'Password'],
                'second_options' => ['label' => 'Repeat Password'],
            ])

            ->add('active', CheckboxType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input',
                ],
                'label' => 'Enabled',
            ])
            ->addEventSubscriber(new UserListener($this->em))
        ;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => User::class,
        ));
    }

    /**
     * @return ArrayCollection|Category[]
     */
    public function getCategories()
    {
        $categoriesRepository = $this->em->getRepository(Category::class);
        $repository = $categoriesRepository->findAll();

        return $repository;
    }
}

?>