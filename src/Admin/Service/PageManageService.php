<?php

namespace Admin\Service;

use Admin\Exception\Exception;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Shared\Entity\Page;
use Shared\Entity\PageBlocks;
use Shared\Entity\Post;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;

class PageManageService
{
    /** @var EntityManager  */
    private $em;

    /** @var Page */
    private $page;

    /**
     * PageManageService constructor.
     * @param EntityManager
     */
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    /**
     * @param Page $page
     * @throws Exception
     */
    public function savePage(Form $form, Request $request)
    {
        /** @var Page $post */
        $page = $form->getData();

        /** @var  $postData */
        $postData = $request->get($form->getName());
        $postBlocks = $postData['blocks'] ?? [];
        $postNewBlocks = $postData['new_block'] ?? [];

        foreach (array_merge($postBlocks, $postNewBlocks) as $postBlock) {
            if ($postBlock['post'] ?? false) {
                $page = $this->savePostBlock($page, $postBlock);
            }
        }

        try {
            if ($page->getId()) {
                $this->em->merge($page);
            } else {
                $this->em->persist($page);
            }
            $this->em->flush();
        } catch (\Exception $e) {
            throw new Exception('Sorry, something wrong, post not saved', $e->getCode(), $e);
        }
    }

    private function savePostBlock(Page $page, array $data)
    {
        if ((int)$data['post'] > 0) {
            /** @var PageBlocks[]|ArrayCollection $findBlock */
            $findBlock = $page->getBlocks()->filter(function (PageBlocks $block) use ($data) {
                return ($block->getPost()->getId() == (int)$data['post']);
            });
            if ($findBlock) {
                /** @var PageBlocks $block */
                $block = $findBlock->first();
            }
        } else {
            $block = new PageBlocks();
            $post = new Post();
            $block->setPost($post);
            $page->addBlocks($block);
        }

        if (($post = $block->getPost())) {
            if ($data['title'] ?? false) {
                $post->setTitle($data['title']);
            }
            if ($data['post_text'] ?? false) {
                $post->setText($data['post_text']);
            }
        }

        return $page;
    }
}