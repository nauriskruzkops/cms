<?php

namespace Admin\Form;

use Admin\Form\EventListener\PageSettingsListener;
use Admin\Service\FileUploader;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Shared\Entity\Page;
use Shared\Entity\PageSettings;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PageSettingsForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

    /** @var FileUploader  */
    protected $fileUploader;

    /**
     * PageForm constructor.
     * @param EntityManager $em
     * @param FileUploader $fileUploader
     */
    public function __construct(EntityManagerInterface $em, FileUploader $fileUploader)
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
            ->add('code', TextType::class, [
                'required' => false,
            ])
            ->add('type', HiddenType::class, [
                'required' => false,
            ])
            ->add('value', TextType::class, [
                'required' => false,
            ])
            ->add('valueText', TextareaType::class, [
                'required' => false,
            ])
            ->add('valueImage', TextareaType::class, [
                'required' => false,
                'mapped' => false,
            ])
            ->addEventSubscriber(new PageSettingsListener($this->em, $this->fileUploader))
        ;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PageSettings::class,
            'allow_extra_fields' => true,
        ]);
    }
}

?>