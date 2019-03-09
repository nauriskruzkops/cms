<?php

namespace Admin\Form;

use Admin\Form\EventListener\MenuItemRelationFormListener;
use App\Routing\SiteRoutes;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Admin\Entity\Category;
use Admin\Entity\MenuItemRelation;
use Admin\Entity\Page;
use Admin\Entity\Post;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MenuItemRelationForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

    /**
     * MenuItemRelationForm constructor.
     * @param EntityManager $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $type = 'page';
        if (isset($options['data'])) {
            /** @var MenuItemRelation $data */
            $data = $options['data'];
            $type = $data->getMenuItem()->getType();
        }

        $builder
            ->add('type', HiddenType::class, [
                'required' => true,
            ])
            ->add('objectClass', HiddenType::class, [
                'required' => true,
                'data' => $this->getClassByType($type),
            ])
            ->add('objectId', HiddenType::class, [
                'required' => false,
            ])
            ->add('object', EntityType::class, [
                'mapped' => false,
                'required' => false,
                'class' => $this->getClassByType($type),
                'query_builder' => function (EntityRepository $repo) {
                    return $repo->createQueryBuilder('f');
                },
                'label' => 'Relation',
                'choice_label' => 'title',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Relation type',
                ],
                'by_reference' => true,
                'expanded'  => false,
                'multiple'  => false,
            ])

            ->addEventSubscriber(new MenuItemRelationFormListener($this->em))
        ;

    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(['prototype_data']);
        $resolver->setDefaults([
            'allow_extra_fields' => true,
            'data_class' => MenuItemRelation::class,
        ]);
    }

    /**
     * @param string $type
     * @param string $locale
     * @return string
     */
    private function getClassByType($type = SiteRoutes::TYPE_PAGE, $locale = 'en')
    {
        if ($type == SiteRoutes::TYPE_POST) {
            return Post::class;
        } elseif ($type == SiteRoutes::TYPE_CATEGORY) {
            return Category::class;
        } elseif ($type == SiteRoutes::TYPE_PAGE) {
            return Page::class;
        }
    }

}

?>