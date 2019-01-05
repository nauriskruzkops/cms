<?php

namespace Admin\Controller;

use Admin\Exception\Exception;
use Admin\Form\UserForm;
use Admin\Service\UserManageService;
use Doctrine\Common\Collections\ArrayCollection;
use Shared\Entity\User;
use Shared\Repository\UserRepository;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class UsersController extends AbstractController
{
    /**
     * @Route("/admin/users", name="adm_users")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
//        try {
//            $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
//        } catch (AccessDeniedException $e) {
//            return $this->denyAccess($e);
//        }

        $locale = $request->query->get('locale', $this->settings()->value('language'));

        /** @var User[] $user */
        $pages = $this->getDoctrine()->getManager()
            ->getRepository(User::class)->findAll();

        return $this->render('AdminBundle::users/index.html.php', [
            'users' => new ArrayCollection($pages),
            'locale' => $locale,
        ]);
    }

    /**
     * @Route("/admin/user/add", name="adm_user_add")
     * @param Request $request
     * @param UserManageService $userManageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request, UserManageService $userManageService)
    {
        $user = new User();

        return $this->processForm($request, $user, 'adm_user_add', $userManageService);
    }

    /**
     * @Route("/admin/user/{id}/edit", name="adm_user")
     * @param Request $request
     * @param UserManageService $userManageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request, UserManageService $userManageService)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var UserRepository $userRepo */
        $userRepo = $em->getRepository(User::class);

        /** @var User $user */
        $user = $userRepo->find($request->get('id'));

        return $this->processForm($request, $user, 'adm_user', $userManageService);
    }

    /**
     * @param Request $request
     * @param User $user
     * @param $route_name
     * @param UserManageService $service
     * @return array|Response
     */
    private function processForm(Request $request, User $user, $route_name, UserManageService $service)
    {
        /** @var Form $form */
        $form = $this->createForm(UserForm::class, $user, [
            'action' => $this->generateUrl($route_name, ['id' => $user->getId()]),
            'method' => 'POST',
        ]);

        if ($request->request->get('delete_user', false) !== false) {
            //return $this->delete($request);
        }

        $form->handleRequest($request);
        $formError = false;

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                try {
                    $service->saveUserData($form, $request);
                    $this->addFlash('info', 'Cool, user saved!');
                    return $this->redirectToRoute(
                        $request->get('btn_save_exit', 1) === 1 ? 'adm_user' :'adm_users',
                        ['id' => $user->getId()]);
                } catch (\Exception $e) {
                    $this->addFlash('error', $e->getMessage());
                    return $this->redirectToRoute($route_name, ['id' => $user->getId()]);
                }
            } else {
                $formError = $form->getErrors();
            }
        }

        return $this->render('AdminBundle::users/manage.html.php', [
            'user' => $user,
            'form' => $form,
            'formError' => $formError,
        ]);
    }
}
