<?php

namespace Admin\Form;

use Admin\Form\EventListener\PageListener;
use Admin\Service\SettingService;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Admin\Entity\Page;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PageForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

    /** @var SettingService  */
    protected $settings;

    /**
     * PageForm constructor.
     * @param EntityManager $em
     * @param SettingService $settings
     */
    public function __construct(EntityManagerInterface $em, SettingService $settings)
    {
        $this->em = $em;
        $this->settings = $settings;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->setAttribute('enctype', 'multipart/form-data')
            ->add('title', TextType::class, [
                'required' => false,
                'label' => 'Page title',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Page title',
                ],
            ])
            ->add('slug', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'page/custom/link',
                ],
                'label' => 'Page url',
            ])
            ->add('template', ChoiceType::class, [
                'required' => false,
                'label' => 'Template',
                'choices' => array_combine(
                    array_values(Page::TEMPLATES),
                    array_values(Page::TEMPLATES)
                ),
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('content', HiddenType::class, [
                'required' => false,
                'attr' => []
            ])
            ->add('locale', ChoiceType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                ],
                'choices' => $this->settings->getChoiceLocales(),
                'label' => 'Language',
            ])
            ->add('parent', EntityType::class, [
                'class' => Page::class,
                'required' => false,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
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
            ])
            ->add('settings', CollectionType::class, [
                'entry_type' => PageSettingsForm::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'by_reference' => false,
                'allow_extra_fields' => true,
            ])
            ->add('image', FileType::class, [
                'required' => false,
                'mapped' => false,
            ])
            ->add('blocks', CollectionType::class, [
                'entry_type' => PageBlockForm::class,
                'entry_options' => ['label' => false],
                'by_reference' => false,
                'allow_extra_fields' => true,
            ])
            ->add('new_block', CollectionType::class, [
                'mapped' => false,
                'allow_extra_fields' => true,
            ])
            ->add('public', CheckboxType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input',
                ],
                'label' => 'Page is available for public',
            ])
            ->addEventSubscriber(new PageListener($this->em))
        ;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Page::class,
        ]);
    }
}

?>