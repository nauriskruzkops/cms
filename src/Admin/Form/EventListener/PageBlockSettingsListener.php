<?php

namespace Admin\Form\EventListener;

use Admin\Exception\FileUploadException;
use Admin\Service\FileUploader;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Admin\Entity\Category;
use Admin\Entity\PageBlocks;
use Admin\Repository\CategoryRepository;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class PageBlockSettingsListener implements EventSubscriberInterface
{
    /** @var EntityManager */
    protected $em;

    /** @var FileUploader  */
    protected $fileUploader;

    /**
     * MenuItemRelationListener constructor.
     * @param EntityManager $em
     */
    public function __construct(EntityManagerInterface $em, FileUploader $fileUploader)
    {
        $this->em = $em;
        $this->fileUploader = $fileUploader;
    }

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            FormEvents::PRE_SET_DATA   => 'preSetData',
            FormEvents::PRE_SUBMIT   => 'preSubmit',
            FormEvents::POST_SUBMIT   => 'postSubmit',
        ];
    }

    public function preSetData (FormEvent $event)
    {
        $form = $event->getForm();
        $pageForm = $form->getParent();

        if ($pageForm instanceof \Symfony\Component\Form\Form) {
            /** @var PageBlocks $pageBlock */
            $pageBlock = $pageForm->getParent()->getData();

            if ($pageBlock->getType() == PageBlocks::TYPE_LIST) {
                $categories = $this->getCategories($pageBlock->getPage()->getLocale());
                $form->remove('category');
                $form->add('category', ChoiceType::class, [
                    'required' => false,
                    'choices' => $categories,
                    'multiple' => true,
                    'expanded' => true,
                ]);

                $form->remove('style');
                $form->add('style', ChoiceType::class, [
                    'required' => false,
                    'choices' => [
                        'Grid' => 'grid',
                        'Slider' => 'slider',
                        'Blog' => 'blog',
                    ],
                    'multiple' => false,
                ]);
            } elseif ($pageBlock->getType() == PageBlocks::TYPE_IMAGES) {
                $form->remove('style');
                $form->add('style', ChoiceType::class, [
                    'required' => false,
                    'choices' => [
                        'Style masonry' => 'masonry',
                        'Style mixitup' => 'mixitup',
                        'Style carousel' => 'carousel',
                    ],
                    'multiple' => false,
                ]);
            }
        }
    }

    /**
     * @param FormEvent $event
     */
    public function preSubmit(FormEvent $event)
    {
        /** @var array $data */
        $data = $event->getData();

        if (isset($data['bg_image_upload']) && $data['bg_image_upload'] instanceof UploadedFile) {
            try {
                $fileUploader = $this->fileUploader;
                $fileUploader->setPath('page');
                $fileUploader->setReference($event->getForm()->getRoot()->getData());
                $file = $this->fileUploader->upload($data['bg_image_upload']);
                $data['bg_image'] = $file;
            } catch (FileUploadException|OptimisticLockException|ORMException $e) {
                $data['bg_image'] = null;
            }
        }

        $event->setData($data);
    }

    /**
     * @param FormEvent $event
     */
    public function postSubmit(FormEvent $event)
    {
        /** @var array $data */
        $data = $event->getData();
        //var_dump($data);
        $event->setData($data);
    }

    /**
     * @return \Admin\Entity\Category[]|null
     */
    private function getCategories($locale)
    {
        /** @var CategoryRepository $repository */
        $repository = $this->em->getRepository(Category::class);

        return $repository->getForFormChoiceType($locale);
    }

}