<?php

namespace Admin\Form\EventListener;

use Admin\Entity\Category;
use Admin\Entity\MenuItems;
use Admin\Entity\Page;
use Admin\Entity\Post;
use App\Routing\SiteRoutes;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Admin\Entity\MenuItemRelation;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Form;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class MenuItemRelationFormListener implements EventSubscriberInterface
{
    /** @var EntityManager */
    protected $em;

    /**
     * MenuItemRelationListener constructor.
     * @param EntityManager $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            FormEvents::PRE_SET_DATA => 'onPreSetData',
            FormEvents::POST_SET_DATA => 'onPostSetData',
            FormEvents::PRE_SUBMIT   => 'onSubmit',
        ];
    }

    /**
     * @param FormEvent $event
     * @throws \Doctrine\ORM\ORMException
     */
    public function onPreSetData(FormEvent $event)
    {
        $form = $event->getForm();
        /** @var MenuItemRelation $data */
        $data = $event->getData();

        if ($form->getParent() instanceof Form) {
            if ($data instanceof MenuItemRelation) {
                $type = $data->getMenuItem()->getType();
                $form->remove('object');
                $form->add('object', EntityType::class, [
                    'mapped' => false,
                    'required' => false,
                    'class' => $this->getClassByType($type),
                    'query_builder' => function (EntityRepository $repo) use ($data) {
                        $qb = $repo->createQueryBuilder('f');
                        $qb->where($qb->expr()->eq('f.locale', ':locale'))
                            ->setParameter('locale', $data->getMenuItem()->getMenu()->getLocale());
                        return $qb;
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
                ]);
            }
        }
    }

    /**
     * @param FormEvent $event
     * @throws \Doctrine\ORM\ORMException
     */
    public function onPostSetData(FormEvent $event)
    {
        /** @var MenuItemRelation $data */
        $data = $event->getData();
        $form = $event->getForm();

        if ($data and $data->getObjectClass() && $data->getObjectId()) {
            $object = $this->em->getRepository($data->getObjectClass())->find($data->getObjectId());
            if ($object) {
                $form->get('object')->setData($object);
                $event->setData($form->getData());
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
        if (isset($data['object']) && !empty($data['object'])) {
            $data['objectId'] = $data['object'];
            $event->setData($data);
        }
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