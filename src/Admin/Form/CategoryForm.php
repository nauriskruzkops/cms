<?php

namespace Admin\Form;

use Admin\Service\SettingService;
use Doctrine\ORM\EntityManager;
use Shared\Entity\Category;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategoryForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

    /** @var SettingService  */
    protected $settings;

    /**
     * MenuForm constructor.
     * @param EntityManager $em
     */
    public function __construct(EntityManager $em, SettingService $settings)
    {
        $this->em = $em;
        $this->settings = $settings;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Post title',
                ],
            ])
            ->add('slag', TextType::class, [
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'page/custom/link',
                ],
            ])
            ->add('locale', ChoiceType::class, [
                'required' => false,
                'attr' => $this->settings->getChoiseLocales(),
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Category::class,
        ));
    }
}

?>