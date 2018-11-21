<?php

namespace Admin\Controller\Cms;

use Admin\Form\PageForm;
use Doctrine\Common\Collections\ArrayCollection;
use Shared\Entity\Page;
use Shared\Repository\PageRepository;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/admin/pages", name="adm_page_list")
     */
    public function index(Request $request)
    {
        /** @var Page[] $page */
        $pages = $this->getDoctrine()->getManager()
            ->getRepository(Page::class)->findAll();

        return $this->render('AdminBundle::pages/index.html.php', [
            'pages' => new ArrayCollection($pages)
        ]);
    }

    /**
     * @Route("/admin/page/add", name="adm_page_add")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request)
    {
        $page = new Page();

        return $this->processForm($request, $page, 'adm_page_add');
    }

    /**
     * @Route("/admin/page/{id}/edit", name="adm_page_edit")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var PageRepository $pageRepo */
        $pageRepo = $em->getRepository(Page::class);

        /** @var Page $page */
        $page = $pageRepo->find($request->get('id'));

        return $this->processForm($request, $page, 'adm_page_edit');
    }

    /**
     * @Route("/admin/page/{id}/delete", name="adm_page_delete")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function delete(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var PageRepository $pageRepo */
        $pageRepo = $em->getRepository(Page::class);

        /** @var Page $page */
        $page = $pageRepo->find($request->get('id'));
        $em->remove($page);
        $em->flush();

        return $this->redirectToRoute('adm_page_list');
    }

    /**
     * @Route("/admin/page/{id}/raw", name="adm_page_raw")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function iframe(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var PageRepository $pageRepo */
        $pageRepo = $em->getRepository(Page::class);

        /** @var Page $page */
        $page = $pageRepo->find($request->get('id'));

        return $this->render('AdminBundle::pages/partial/iframe.html.php', [
            'content' => $page ? $page->getContent() : ''
        ]);
    }

    /**
     * @param Request $request
     * @param Page $page
     * @param $route_name
     * @return array|Response
     */
    private function processForm(Request $request, Page $page, $route_name)
    {
        /** @var Form $form */
        $form = $this->createForm(PageForm::class, $page, [
            'action' => $this->generateUrl($route_name, ['id' => $page->getId()]),
            'method' => 'POST',
        ]);

        if ($request->request->get('delete_page', false) !== false) {
            return $this->delete($request);
        }

        $form->handleRequest($request);
        $formError = false;

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                try {
                    $em = $this->getDoctrine()->getManager();
                    if ($page->getId()) {
                        $em->merge($form->getData());
                    } else {
                        $em->persist($form->getData());
                    }
                    $em->flush();
                    $this->addFlash('info', 'Cool, page saved!');
                    return $this->redirectToRoute('adm_page_edit', ['id' => $page->getId()]);
                } catch (\Exception $e) {
                    $this->addFlash('error', $e->getMessage());
                    return $this->redirectToRoute($route_name, ['id' => $page->getId()]);
                }
            } else {
                $formError = $form->getErrors();
            }
        }

        return $this->render('AdminBundle::pages/manage.html.php', [
            'page' => $page,
            'form' => $form,
            'formError' => $formError,
        ]);
    }
}
