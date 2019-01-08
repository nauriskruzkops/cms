<?php

namespace Admin\Controller\Cms;

use Shared\Entity\Page;
use Shared\Entity\PageBlocks;
use Shared\Entity\User;
use Shared\Repository\PageBlocksRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PagesBlockController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/admin/page/block/{id}/delete", name="adm_pageblock_delete")
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
     * @Route("/admin/page/block/{id}/move", name="adm_pageblock_move")
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
