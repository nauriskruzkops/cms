<?php

namespace Admin\Controller\Cms;

use Admin\Entity\Page;
use Admin\Entity\PageBlocks;
use Admin\Entity\Post;
use Admin\Entity\User;
use Admin\Repository\PageBlocksRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PagesBlockController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/page/{page_id}/block/add/{type}", name="adm_pageblock_add")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request)
    {
        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

        $em = $this->getDoctrine()->getManager();

        $id = $request->get('page_id');
        $type = $request->get('type');

        /** @var PageBlocksRepository $repository */
        $repository = $em->getRepository(Page::class);

        /** @var Page $entity */
        $entity = $repository->find($id);
        if ($entity) {
            $block = new PageBlocks();
            $block->setType($type);
            $entity->addBlocks($block);

            if ( in_array($type, [PageBlocks::TYPE_POST, PageBlocks::TYPE_SLIDER])) {
                $post = new Post();
                $post->setIsPartOf(true);
                $block->setPost($post);
            }

            $em->flush();
            $this->addFlash('info', sprintf('Page block `%s` added', $type));
        }

        return $this->redirect($request->headers->get('referer'));
    }

    /**
     * @Route("/page/block/{id}/delete", name="adm_pageblock_delete")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function delete(Request $request)
    {
        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

        $em = $this->getDoctrine()->getManager();
        /** @var PageBlocksRepository $pageRepo */
        $repository = $em->getRepository(PageBlocks::class);

        try {
            /** @var Page $page */
            $entity = $repository->find($request->get('id'));
            $objectToString = (string) $entity;
            $em->remove($entity);
            $em->flush();
            $this->addFlash('info', sprintf('PageBlock `%s` sucessefully deleted', $objectToString));
        } catch (\Exception $exception) {
            $this->addFlash('error', $exception->getMessage());
        }

        return $this->redirect($request->headers->get('referer'));
    }

    /**
     * @Route("/page/block/{id}/move", name="adm_pageblock_move")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function move(Request $request)
    {
        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

        $em = $this->getDoctrine()->getManager();

        $id = $request->get('id');
        $context = $request->get('context');

        /** @var PageBlocksRepository $repository */
        $repository = $em->getRepository(PageBlocks::class);

        /** @var PageBlocks $entity */
        $entity = $repository->find($id);
        if ($entity) {
            $position = (int)$entity->getSort();
            $newPosition = (int)$position;

            if ($request->get('direction') == 'up') {
                $newPosition = (((int)$position) - 1);
                if ($newPosition < 0) {
                    $newPosition = $position;
                }
            }
            if ($request->get('direction') == 'down') {
                $newPosition = (((int)$position) + 1);
            }

            $entity->setSort($newPosition);
            $em->flush();
            $this->addFlash('info', sprintf('Page block moved %s', $request->get('direction')));
        }


        return $this->redirect($request->headers->get('referer'));
    }
}
