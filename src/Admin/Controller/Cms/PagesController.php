<?php

namespace Admin\Controller\Cms;

use Admin\Form\PageForm;
use Admin\Service\PageManageService;
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
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $locale = (string) $request->query->get('locale', $this->settings()->value('language'));

        /** @var PageRepository $repository */
        $repository = $this->getDoctrine()->getManager()->getRepository(Page::class);

        return $this->render('AdminBundle::pages/index.html.php', [
            'pages' => $repository->getNestedArray($locale),
            'repository' => $repository,
            'locale' => $locale,
        ]);
    }

    /**
     * @Route("/admin/page/add", name="adm_page_add")
     * @param Request $request
     * @param PageManageService $pageManageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request, PageManageService $pageManageService)
    {
        $page = new Page();
        $page->setTemplate($request->query->get('template', Page::TEMPL_TEXT));

        return $this->processForm($request, $page, 'adm_page_add', $pageManageService);
    }

    /**
     * @Route("/admin/page/{id}/edit", name="adm_page_edit")
     * @param Request $request
     * @param PageManageService $pageManageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request, PageManageService $pageManageService)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var PageRepository $pageRepo */
        $pageRepo = $em->getRepository(Page::class);

        /** @var Page $page */
        $page = $pageRepo->find($request->get('id'));

        return $this->processForm($request, $page, 'adm_page_edit', $pageManageService);
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
     * @Route("/admin/page/{id}/move", name="adm_page_move")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function move(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var PageRepository $pageRepo */
        $pageRepo = $em->getRepository(Page::class);
        //$pageRepo->reorderAll('p.left');

        /** @var Page $page */
        $page = $pageRepo->find($request->get('id'));

        //$verify = $pageRepo->verify();
        //$pageRepo->recover();

        if ($request->get('direction') == 'up') {
            $pageRepo->moveUp($page, 1);
            $em->flush();
        }
        if ($request->get('direction') == 'down') {
            $pageRepo->moveDown($page, 1);
            $em->flush();
        }

        return $this->redirectToRoute('adm_page_list');
    }

    /**
     * @Route("/admin/page/{id}/raw", name="adm_page_raw", requirements={"relation"="page|post"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function iframe(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        //$section = $request->get('section', 'page');

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
     * @param PageManageService $service
     * @return array|Response
     */
    private function processForm(Request $request, Page $page, $route_name, PageManageService $service)
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
                    $service->savePage($form, $request);

                    $this->addFlash('info', 'Cool, page saved!');
                    return $this->redirectToRoute(
                        $request->get('btn_save_exit', 1) === 1 ? 'adm_page_edit' :'adm_page_list',
                        ['id' => $page->getId()]);
                } catch (\Exception $e) {
                    $this->addFlash('error', $e->getMessage());
                    return $this->redirectToRoute($route_name, ['id' => $page->getId()]);
                }
            } else {
                $formError = $form->getErrors();
                var_dump('FORM','NOT', 'VALID');
                var_dump($formError->current()->getMessage());
            }
        }

        return $this->render('AdminBundle::pages/manage.html.php', [
            'page' => $page,
            'form' => $form,
            'formError' => $formError,
        ]);
    }
}
