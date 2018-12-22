<?php

namespace Admin\Form;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;
use Shared\Entity\Page;
use Shared\Entity\PageBlocks;
use Shared\Entity\PageSettings;
use Shared\Entity\Post;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PageBlockForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

    /**
     * PageForm constructor.
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
                'required' => false,
                'attr' => [
                    'class' => 'form-control'
                ],
            ])
            ->add('sort', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'style' => 'width: 45px',
                ],
            ])
            ->add('post', EntityType::class, array(
                'class' => Post::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        //->orderBy('u.title', 'ASC')
                    ;
                },
                'choice_label' => 'title',
                'multiple' => false,
                'expanded' => false,
                'allow_extra_fields' => true,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Posts',
                ],
            ))
            ->add('isPublic', CheckboxType::class, [
                'required' => false,
                'attr' => [],
            ])
        ;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PageBlocks::class,
            'allow_extra_fields' => true,
        ]);
    }
}

?>