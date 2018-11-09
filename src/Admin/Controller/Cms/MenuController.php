<?php

namespace Admin\Controller\Cms;

use Admin\Form\MenuForm;
use Doctrine\ORM\EntityManager;
use Shared\Entity\Menu;
use Shared\Entity\MenuItemRelation;
use Shared\Entity\MenuItems;
use Shared\Repository\MenuRepository;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
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

        /** @var MenuRepository $menuRepo */
        $menuRepo = $em->getRepository(Menu::class);
        $menus = $menuRepo->findAll();


        return $this->render('AdminBundle::menu/index.html.php', [
            'menus' => $menus,
            'page' => $page,
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
            $em->remove($menu);
            $em->flush();

            return $this->redirectToRoute('adm_menu_list');
        }

        $form->handleRequest($request);
        $formError = false;

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                try {
                    /** @var Menu $menu */
                    $menu = $form->getData();
                    if ($menu->getId()) {
                        $em->merge($menu);
                    } else {
                        $em->persist($menu);
                    }
                    //exit;
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
        return new JsonResponse([
            ['title' => 'Link 1', 'value' => 'Value link'],
            ['title' => 'Link 2', 'value' => 'Value link'],
        ]);
    }
}
