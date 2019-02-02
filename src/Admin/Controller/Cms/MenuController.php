<?php

namespace Admin\Controller\Cms;

use Admin\Form\MenuForm;
use Doctrine\ORM\EntityManager;
use Shared\Entity\Menu;
use Shared\Entity\MenuItems;
use Shared\Entity\Page;
use Shared\Entity\User;
use Shared\Repository\MenuItemsRepository;
use Shared\Repository\MenuRepository;
use Shared\Repository\PageRepository;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MenuController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/admin/menu", name="adm_menu_list")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $em = $this->getDoctrine();
        $page = 1;
        $limit = 20;
        $locale = (string) $request->query->get('locale', $this->settings()->value('language'));

        /** @var MenuRepository $menuRepo */
        $menuRepo = $em->getRepository(Menu::class);
        $menus = $menuRepo->findBy(['locale' => $locale]);

        return $this->render('AdminBundle::menu/index.html.php', [
            'menus' => $menus,
            'page' => $page,
            'locale' => $locale,
        ]);
    }

    /**
     * @Route("/admin/menu/add", name="adm_menu_add")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function add(Request $request)
    {
        $menu = new Menu();

        return $this->processForm($request, $menu, 'adm_menu_add');
    }

    /**
     * @Route("/admin/menu/{id}/edit", name="adm_menu_edit")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function edit(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var MenuRepository $menuRepo */
        $menuRepo = $em->getRepository(Menu::class);

        /** @var Menu $menu */
        $menu = $menuRepo->find($request->get('id'));

        return $this->processForm($request, $menu, 'adm_menu_edit');
    }

    /**
     * @Route("/admin/menu/{id}/delete", name="adm_menu_delete")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function delete(Request $request)
    {
        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

        $em = $this->getDoctrine()->getManager();

        /** @var MenuRepository $menuRepo */
        $menuRepo = $em->getRepository(Menu::class);

        /** @var Menu $menu */
        $menu = $menuRepo->find($request->get('id'));

        return $this->processForm($request, $menu, 'adm_menu_list');
    }

    /**
     * @param Request $request
     * @param Menu $menu
     * @param $route_name
     * @return array|Response
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    private function processForm(Request $request, Menu $menu, $route_name)
    {
        /** @var EntityManager $em */
        $em = $this->getDoctrine()->getManager();

        /** @var Form $form */
        $form = $this->createForm(MenuForm::class, $menu, [
            'action' => $this->generateUrl($route_name, ['id' => $menu ? $menu->getId() : null]),
            'method' => 'POST',
        ]);

        if ($request->request->get('delete_menu', false) !== false) {
            $this->denyAccessUnlessGranted(User::ROLE_MANAGER);
            $em->remove($menu);
            $em->flush();

            return $this->redirectToRoute('adm_menu_list');
        }

        $form->handleRequest($request);
        $formError = false;

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                try {
                    $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

                    /** @var Menu $menu */
                    $menu = $form->getData();
                    if ($menu->getId()) {
                        $em->merge($menu);
                    } else {
                        $em->persist($menu);
                    }
                    $em->flush();
                    $this->addFlash('info', 'Cool, menu saved!');

                    return $this->redirectToRoute('adm_menu_edit', ['id' => $menu->getId()]);
                } catch (\Exception $e) {
                    $this->addFlash('error', $e->getMessage());
                    return $this->redirectToRoute($route_name, ['id' => $menu ? $menu->getId() : null]);
                }
            } else {
                $formError = $form->getErrors();
            }
        }

        return $this->render('AdminBundle::menu/manage.html.php', [
            'menu' => $menu,
            'form' => $form,
            'formError' => $formError,
        ]);
    }

    /**
     * @Route("/admin/menu/sitemap/json", name="adm_menu_sitemap_json")
     * @param Request $request
     * @return Response
     */
    public function sitemap(Request $request)
    {
        /** @var PageRepository $repository */
        $repository = $this->getDoctrine()->getManager()->getRepository(Page::class);
        $pages = $repository->findAllByLocale('lv');
        $pageSiteMap = [];

        foreach ($pages as $page) {
            $pageSiteMap[] = [
                'title' => $page->getTitle(),
                'value' => '/'.(($page->getSlug() !== 'index') ? $page->getSlug() : ''),
            ];
        }

        return new JsonResponse($pageSiteMap);
    }

    /**
     * @Route("/admin/menu/item/{item}/move", name="adm_menu_item_move")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function move(Request $request)
    {
        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

        $em = $this->getDoctrine()->getManager();

        /** @var MenuItemsRepository $itemsRepository */
        $itemsRepository = $em->getRepository(MenuItems::class);

        /** @var MenuItems $item */
        $item = $itemsRepository->find($request->get('item'));

        //$verify = $pageRepo->verify();
        //$pageRepo->recover();

        if ($request->get('direction') == 'up') {
            $itemsRepository->moveUp($item, 1);
            $em->flush();
        }
        if ($request->get('direction') == 'down') {
            $itemsRepository->moveDown($item, 1);
            $em->flush();
        }

        return $this->redirectToRoute('adm_menu_edit', ['id' => $item->getMenu()->getId()]);
    }
}
