<?php

namespace Admin\Form;

use Doctrine\ORM\EntityManager;
use Shared\Entity\Category;
use Shared\Entity\MenuItemRelation;
use Shared\Entity\MenuItems;
use Shared\Entity\Page;
use Shared\Entity\Post;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MenuItemRelationForm extends AbstractType
{
    /** @var EntityManager */
    protected $em;

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
            ->add('type', ChoiceType::class, [
                'required' => true,
            ])
            ->add('menuItem', TextType::class, [
                'required' => false,
            ])
            ->add('objectClass', TextType::class, [
                'required' => false,
            ])
            ->add('objectId', IntegerType::class, [
                'required' => false,
            ])
            ->add('object', ChoiceType::class, [
                'mapped' => false,
                'required' => true,
                'choices' => [],
                'choice_label' => function ($choiceValue, $key, $value) {
                    if ($choiceValue instanceof Post ) {
                        return $choiceValue->getTitle();
                    } elseif ($choiceValue instanceof Category) {
                        return $choiceValue->getTitle();
                    } elseif ($choiceValue instanceof Page) {
                        return $choiceValue->getTitle();
                    }
                    return $key;
                },
                'empty_data' => null,
                'label' => 'Relation',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Relation type',
                ],
            ])
        ;

        $builder->addEventListener(FormEvents::PRE_SET_DATA, [$this, 'onPreSetData']);
        $builder->addEventListener(FormEvents::POST_SET_DATA, [$this, 'onPostSetData']);
        $builder->addEventListener(FormEvents::SUBMIT, [$this, 'onSubmit']);
    }

    /**
     * @param FormEvent $event
     */
    public function onPreSetData(FormEvent $event)
    {
        /** @var MenuItemRelation $data */
        $data = $event->getData();
        $form = $event->getForm();

        $form->add('object', ChoiceType::class, [
            'mapped' => false,
            'required' => true,
            'choices' => $this->getChoices($data->getType()),
            'choice_label' => function ($choiceValue, $key, $value) {
                if ($choiceValue instanceof Post ) {
                    return $choiceValue->getTitle();
                } elseif ($choiceValue instanceof Category) {
                    return $choiceValue->getTitle();
                } elseif ($choiceValue instanceof Page) {
                    return $choiceValue->getTitle();
                }
                return $key;
            },
            'empty_data' => null,
            'label' => 'Relation',
            'attr' => [
                'class' => 'form-control',
                'placeholder' => 'Relation type',
            ],
        ]);

    }

    /**
     * @param FormEvent $event
     */
    public function onPostSetData(FormEvent $event)
    {
        /** @var MenuItemRelation $data */
        $data = $event->getData();
        $form = $event->getForm();

        if ($data && $data->getObjectId()) {
            if ($data->getType() == 'post' && ($post = $this->getPost($data->getObjectId()))) {
                $form->get('object')->setData($post);
                $event->setData($data);
            } elseif ($data->getType() == 'category' && ($category = $this->getCategory($data->getObjectId()))) {
                $form->get('object')->setData($category);
                $event->setData($data);
            } elseif ($data->getType() == 'page' && ($page = $this->getPage($data->getObjectId()))) {
                $form->get('object')->setData($page);
                $event->setData($data);
            }
        }
    }

    /**
     * @param FormEvent $event
     */
    public function onSubmit(FormEvent $event)
    {
        /** @var MenuItemRelation $data */
        $data = $event->getData();
        $object = $event->getForm()->get('object')->getData();
        $parent = $event->getForm()->getParent()->getParent()->getData();

        if ($object && $object instanceof Post) {
            $data->setMenuItem($parent);
            $data->setType('post');
            $data->setObjectClass(get_class($object));
            $data->setObjectId($object->getId());
            $event->setData($data);
        } elseif ($object && $object instanceof Category) {
            $data->setMenuItem($parent);
            $data->setType('category');
            $data->setObjectClass(get_class($object));
            $data->setObjectId($object->getId());
            $event->setData($data);
        } elseif ($object && $object instanceof Page) {
            $data->setMenuItem($parent);
            $data->setType('page');
            $data->setObjectClass(get_class($object));
            $data->setObjectId($object->getId());
            $event->setData($data);
        }

        else {
            $event->setData(null);
        }
    }

    /**
     * @param $id
     * @return null|Post
     */
    private function getPost($id)
    {
        $em = $this->em;
        $posts = $em->getRepository(Post::class)->find($id);

        return $posts;
    }

    /**
     * @param $id
     * @return null|Category
     */
    private function getCategory($id)
    {
        $em = $this->em;
        $category = $em->getRepository(Category::class)->find($id);

        return $category;
    }


    /**
     * @param $id
     * @return null|Page
     */
    private function getPage($id)
    {
        $em = $this->em;
        $page = $em->getRepository(Page::class)->find($id);

        return $page;
    }

    /**
     * @param string $type
     * @param string $locale
     * @return array|object[]
     */
    private function getChoices($type = 'post', $locale = 'en')
    {
        $choices = [];
        $em = $this->em;
        if ($type == 'post') {
            $choices = $em->getRepository(Post::class)->findAll();
        } elseif ($type == 'category') {
            $choices = $em->getRepository(Category::class)->findAllByLocale($locale);
        } elseif ($type == 'page') {
            $choices = $em->getRepository(Page::class)->findAllByLocale($locale);
        }
        return array_merge(
            ['-- Select relation --' => null],
            $choices
        );
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $em = $this->em;
        $resolver->setDefaults([
            'data_class' => MenuItemRelation::class,
            'empty_data' => function (FormInterface $form) {
                $menuItemRelation = new MenuItemRelation();
                if ($form->getParent() && $form->getParent()->getParent()->getData()) {
                    $menuItem = $form->getParent()->getParent()->getData();
                    $menuItemRelation->setType($menuItem->getType());
                    $menuItemRelation->setMenuItem($menuItem);
                }
                return $menuItemRelation;
            },
        ]);
    }
}

?>