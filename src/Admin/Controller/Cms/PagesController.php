<?php

namespace Admin\Controller\Cms;

use Admin\Form\PageForm;
use Admin\Service\PageManageService;
use Admin\Entity\Page;
use Admin\Entity\User;
use Admin\Repository\PageRepository;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends \Admin\Controller\AbstractController
{
    const CONTEXT_PAGE = 'page';
    const CONTEXT_PAGE_BLOCK = 'pageBlock';

    /**
     * @Route("/pages", name="adm_page_list")
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
     * @Route("/page/add", name="adm_page_add")
     * @param Request $request
     * @param PageManageService $pageManageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request, PageManageService $pageManageService)
    {
        $page = new Page();
        $page->setTemplate($request->query->get('template', Page::TEMPL_TEXT));
        $page->setLocale($request->query->get('locale', Page::TEMPL_TEXT));

        $page = $pageManageService->initNewPage($page);
        $em = $this->getDoctrine()->getManager();
        $em->persist($page);
        $em->flush();

        $this->addFlash('info', 'Cool, new page created!');

        return $this->redirectToRoute('adm_page_edit', ['id' => $page->getId()]);
    }

    /**
     * @Route("/page/{id}/edit", name="adm_page_edit")
     * @param Request $request
     * @param PageManageService $pageManageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request, PageManageService $pageManageService)
    {
        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

        $em = $this->getDoctrine()->getManager();

        /** @var PageRepository $pageRepo */
        $pageRepo = $em->getRepository(Page::class);

        /** @var Page $page */
        $page = $pageRepo->find($request->get('id'));

        return $this->processForm($request, $page, 'adm_page_edit', $pageManageService);
    }

    /**
     * @Route("/page/{id}/delete", name="adm_page_delete")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function delete(Request $request)
    {
        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

        $em = $this->getDoctrine()->getManager();

        /** @var PageRepository $pageRepo */
        $repository = $em->getRepository(Page::class);
        try {
            /** @var Page $page */
            $entity = $repository->find($request->get('id'));
            $objectToString = (string) $entity;

            $em->remove($entity);
            $em->flush();

            $this->addFlash('info', sprintf('Page `%s` sucessefully deleted', $objectToString));
        } catch (\Exception $exception) {
            $this->addFlash('error', sprintf('Error when page deleting'));
            $this->addFlash('error', sprintf($exception->getMessage()));
        }
        return $this->redirectToRoute('adm_page_list');
    }

    /**
     * @Route("/page/{id}/move/{context}", name="adm_page_move", defaults={"context":"page"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function move(Request $request)
    {
        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

        $em = $this->getDoctrine()->getManager();

        $id = $request->get('id');

        /** @var PageRepository $repository */
        $repository = $em->getRepository(Page::class);
        $entity = $repository->find($id);

        $repository->verify();
        $repository->recover();

        if ($request->get('direction') == 'up') {
            $repository->moveUp($entity, 1);
            $em->flush();
        }
        if ($request->get('direction') == 'down') {
            $repository->moveDown($entity, 1);
            $em->flush();
        }

        return $this->redirect($request->headers->get('referer'));
    }



    /**
     * @Route("/page/{id}/raw", name="adm_page_raw", requirements={"relation"="page|post"})
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
     * @param PageManageService $service
     * @return array|Response
     */
    private function processForm(Request $request, Page $page, $route_name, PageManageService $service)
    {
        /** @var Form $form */
        $form = $this->createForm(PageForm::class, $page, [
            'action' => $this->generateUrl($route_name, ['id' => $page->getId() ?? null]),
            'method' => 'POST',
        ]);

        if ($request->request->get('delete_page', false) !== false) {
            return $this->delete($request);
        }

        $form->handleRequest($request);
        $formError = false;

        if ($form->isSubmitted()) {
            $this->denyAccessUnlessGranted(User::ROLE_MANAGER);
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
            }
        }

        return $this->render('AdminBundle::pages/manage.html.php', [
            'page' => $page,
            'form' => $form,
            'formError' => $formError,
        ]);
    }
}
