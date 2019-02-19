<?php

namespace Admin\Service;

use Admin\Exception\Exception;
use Admin\Exception\FileUploadException;
use Admin\Exception\PageException;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Shared\Entity\Page;
use Shared\Entity\Post;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;

class PostManageService
{
    const POST = 'post';

    /** @var EntityManager  */
    private $em;

    /** @var Post */
    private $post;

    /** @var FileUploader  */
    private $fileUploader;

    /**
     * PageManageService constructor.
     * @param EntityManager $em
     * @param FileUploader $fileUploader
     */
    public function __construct(EntityManager $em, FileUploader $fileUploader)
    {
        $this->em = $em;
        $this->fileUploader = $fileUploader;
        $this->fileUploader->setPath(self::POST);
    }

    /**
     * @param Form $form
     * @param Request $request
     * @return Post
     * @throws PageException
     * @throws FileUploadException
     */
    public function savePost(Form $form, Request $request)
    {
        /** @var Post $post */
        $post = $form->getData();

        if ($request->files->has('post_image')) {
            $uploadedFile = $request->files->get('post_image');
            if ($uploadedFile) {
                try {
                    $filename = $this->fileUploader->upload($uploadedFile);
                } catch (FileUploadException|OptimisticLockException|ORMException $e) {
                    throw new FileUploadException('Sorry, something wrong, post not saved', $e->getCode(), $e);
                }
                $post->setImage($filename);
            }
        }

        try {
            if ($post->getId()) {
                $this->em->merge($post);
            } else {
                $this->em->persist($post);

            }
            $this->em->flush();
        } catch (\Exception $e) {
            throw new PageException('Sorry, something wrong, post not saved', $e->getCode(), $e);
        }

        return $post;
    }
}