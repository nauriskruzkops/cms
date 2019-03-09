<?php

namespace Admin\Form;

use Admin\Form\EventListener\MenuFormListener;
use Admin\Service\SettingService;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Admin\Entity\Menu;
use Admin\Entity\MenuItems;
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

    /** @var SettingService  */
    protected $settings;

    /**
     * MenuForm constructor.
     * @param EntityManager $em
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
                    $this->settings->getChoiceMenuPositions()
                ],
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Code',
                ],
            ])
            ->add('locale', ChoiceType::class, [
                'required' => true,
                'choices' => $this->settings->getChoiceLocales(),
                'empty_data' => null,
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('items', CollectionType::class, [
                'entry_type' => MenuItemsForm::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'by_reference' => false,
            ])
            ->addEventSubscriber(new MenuFormListener($this->em))
        ;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Menu::class,
            'empty_data' => new Menu(),
        ]);
    }
}

?>