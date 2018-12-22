<?php

namespace Admin\Form;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;
use Shared\Entity\Category;
use Shared\Entity\Post;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PostForm extends AbstractType
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
            ->add('title', TextType::class, [
                'required' => false,
                'label' => 'Post title',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Post title',
                ],
            ])
            ->add('slag', TextType::class, [
                'required' => false,
                'label' => 'Post slug',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'page/custom/link',
                ],
            ])
            ->add('text', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'id' => 'post-editor',
                    'class' => 'form-control form-control-editor',
                    'placeholder' => 'Post text',
                    'rows' => '10',
                ],
            ])
            ->add('categories', EntityType::class, array(
                'class' => Category::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->orderBy('u.title', 'ASC');
                },
                'choice_label' => 'title',
                'multiple' => true,
                'expanded' => true,
                'label' => 'Categories',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Categories',
                ],
            ))
            ->add('public', CheckboxType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input',
                ],
                'label' => 'Post is available for public',
            ])
        ;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Post::class,
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