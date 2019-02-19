<?php

namespace Admin\Form;

use Admin\Form\EventListener\PageBlockSettingsListener;
use Admin\Service\FileUploader;
use Doctrine\ORM\EntityManager;
use Shared\Repository\CategoryRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PageBlockSettingsForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

    /** @var FileUploader  */
    protected $fileUploader;

    /**
     * MenuItemRelationListener constructor.
     * @param EntityManager $em
     * @param FileUploader $fileUploader
     */
    public function __construct(EntityManager $em, FileUploader $fileUploader)
    {
        $this->em = $em;
        $this->fileUploader = $fileUploader;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('description', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control'
                ],
            ])
            ->add('text', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control'
                ],
            ])
            ->add('category', ChoiceType::class, [
                'required' => false,
                'choices' => [], // <- Listener
                'multiple' => true,
            ])
            ->add('style', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Grid' => 'grid',
                    'Slider' => 'slider',
                    'Blog' => 'blog',
                ],
                'multiple' => false,
            ])
            ->add('bg_color', ColorType::class, [
                'required' => false,
                'attr' => ['form-control'],
            ])
            ->add('bg_transparent', CheckboxType::class, [
                'required' => false,
                'attr' => [],
            ])
            ->add('bg_image_upload', FileType::class, [
                'required' => false,
                'attr' => [],
                'mapped' => false,
            ])
            ->add('bg_image', HiddenType::class, [
                'required' => false,
                'attr' => [],
            ])

            ->addEventSubscriber(new PageBlockSettingsListener($this->em, $this->fileUploader))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'empty_data' => []
        ]);
    }

    /**
     * @return \Shared\Entity\Category[]|null
     */
    private function getCategories()
    {
        /** @var CategoryRepository $repository */
        $repository = $this->em->getRepository(CategoryRepository::class);

        return $repository->getForFormChoiceType('lv');
    }
}

?>