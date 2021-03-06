<?php

namespace Admin\Service;

use Admin\Exception\Exception;
use Admin\Model\PageDefaultTemplate;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Admin\Entity\Page;
use Admin\Entity\PageBlocks;
use Admin\Entity\Post;
use Admin\Repository\PageRepository;
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
     * @param EntityManager $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @param Page $page
     * @return Page
     */
    public function initNewPage(Page $page)
    {
        if (!$page instanceof Page) {
            $page = new Page();
        }

        $pageBlock = new PageBlocks();
        $pageBlock->setType(PageBlocks::TYPE_POST);

        $pageDefaultTemplate = new PageDefaultTemplate();

        if (in_array($page->getTemplate(), [Page::TEMPL_ROOT, Page::TEMPL_LANDING, Page::TEMPL_TEXT, Page::TEMPL_PRODUCTS])) {
            $blockPost = new Post();
            $blockPost->setIsPartOf(true);
            $blockPost->setText($pageDefaultTemplate->getTemplate($page));
            $pageBlock->setPost($blockPost);
        }
        $page->addBlocks($pageBlock);

        return $page;
    }

    /**
     * @param Page $page
     * @throws Exception
     */
    public function savePage(Form $form, Request $request)
    {
        /** @var Page $post */
        $page = $form->getData();

        /** @var PageRepository $repository */
        $repository = $this->em->getRepository(Page::class);

        /** @var  $postData */
        $postData = $request->get($form->getName());
        $postBlocks = $postData['blocks'] ?? [];
        $postNewBlocks = $postData['new_block'] ?? [];

        foreach (array_merge($postBlocks, $postNewBlocks) as $postBlock) {
            if ($postBlock['type'] == PageBlocks::TYPE_POST) {
                $page = $this->savePostBlock($page, $postBlock);
            } elseif ($postBlock['type'] == PageBlocks::TYPE_SLIDER) {
                $page = $this->savePostBlock($page, $postBlock);
            } elseif ($postBlock['type'] == PageBlocks::TYPE_IMAGES) {
                $page = $this->saveImagesBlock($page, $postBlock);
            } else {
                $page = $this->saveBlock($page, $postBlock);
            }
        }

        $parentPage = $form->get('parent')->getData();

        $pageSlug = $page->getSlug();
        $pageSlug = strtolower($pageSlug);
        $pageSlug = trim($pageSlug);
        $pageSlug = str_replace([' '], '-', $pageSlug);
        $pageSlug = preg_replace('/_.*!@#$%^&*()_+<>:"|"\{\}\[\]~`/s', '', $pageSlug);
        $page->setSlug($pageSlug);

        try {
            if ($parentPage) {
                if ($page->getId()) {
                    $this->em->merge($page);
                    $repository->persistAsFirstChildOf($page, $parentPage);
                } else {
                    $this->em->persist($page);
                    $repository->persistAsFirstChildOf($page, $parentPage);
                }
            }
            $this->em->flush();
        } catch (\Exception $e) {
            throw new Exception('Sorry, something wrong, post not saved', $e->getCode(), $e);
        }
    }

    /**
     * @param Page $page
     * @param array $data
     * @return Page
     */
    private function savePostBlock(Page $page, array $data)
    {
        /** @var PageBlocks[]|ArrayCollection $findBlock */
        $findBlock = $page->getBlocks()->filter(function (PageBlocks $block) use ($data) {
            return ($block->getId() == (int)$data['id']);
        });

        /** @var PageBlocks $block */
        $block = $findBlock->first();

        if (($post = $block->getPost())) {
            if ($data['title'] ?? false) {
                $post->setTitle($data['title']);
            }
            if ($data['post_text'] ?? false) {
                $post->setText($data['post_text']);
            }
        }

        $post->setIsPartOf(true);
        $post->setPublic($block->isPublic());

        return $page;
    }

    /**
     * @param Page $page
     * @param array $data
     * @return Page
     */
    private function saveImagesBlock(Page $page, array $data)
    {
        /** @var PageBlocks[]|ArrayCollection $findBlock */
        $findBlock = $page->getBlocks()->filter(function (PageBlocks $block) use ($data) {
            return ($block->getId() == (int)$data['id']);
        });

        /** @var PageBlocks $block */
        $block = $findBlock->first();

        $postImages = $data['config'][0]['images'] ?? [];

        $blockConfig = $block->getConfig() ?? [];
        $blockConfig[0]['images'] = $postImages;

        $block->setConfig($blockConfig);

        return $page;
    }

    /**
     * @param Page $page
     * @param array $data
     * @return Page
     */
    private function saveBlock(Page $page, array $data)
    {
        return $page;
    }
}