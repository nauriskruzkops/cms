<?php

namespace Admin\Controller;

use Admin\Form\UserForm;
use Admin\Service\UserManageService;
use Doctrine\Common\Collections\ArrayCollection;
use Admin\Entity\User;
use Admin\Repository\UserRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class UsersController extends AbstractController
{
    /**
     * @Route("/users", name="adm_users")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);

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
     * @Route("/user/add", name="adm_user_add")
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
     * @Route("/user/{id}/edit", name="adm_user")
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
        if (!$user) {
            throw $this->createNotFoundException();
        }
        return $this->processForm($request, $user, 'adm_user', $userManageService);
    }

    /**
     * @Route("/user/profile", name="adm_user_profile")
     * @param Request $request
     * @param UserManageService $userManageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function profile(Request $request, UserManageService $userManageService)
    {
        /** @var User $user */
        $user = $this->getUser();

        return $this->processForm($request, $user, 'adm_user_profile', $userManageService, true);
    }

    /**
     * @param Request $request
     * @param User $user
     * @param $route_name
     * @param UserManageService $service
     * @param bool $isProfile
     * @return array|Response
     */
    private function processForm(Request $request, User $user, $route_name, UserManageService $service, $isProfile = false)
    {
        $oldUserData = clone $user;

        /** @var Form $form */
        $form = $this->createForm(UserForm::class, $user, [
            'action' => $this->generateUrl($route_name, ['id' => $user->getId()]),
            'method' => 'POST',
        ]);

        $form->handleRequest($request);
        $formError = false;

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                try {
                    /** @var User $user */
                    $user = $form->getData();
                    if ($isProfile) { // Workround
                        $user->setRoles($oldUserData->getRoles());
                        $user->setActive($oldUserData->isActive());
                    } else {
                        $this->denyAccessUnlessGranted(User::ROLE_MANAGER);
                    }
                    $service->saveUserData($form);
                    $this->addFlash('info', 'Cool, user saved!');

                    if ($isProfile) {
                        return $this->redirectToRoute($route_name);
                    } else {
                        return $this->redirectToRoute(
                            $request->get('btn_save_exit', 1) === 1 ? 'adm_user' : 'adm_users',
                            ['id' => $user->getId()]);
                    }

                } catch (\Exception $e) {
                    $this->addFlash('error', $e->getMessage());
                    return $this->redirectToRoute($route_name, ['id' => $user->getId()]);
                }
            } else {
                $formError = $form->getErrors();
            }
        }

        return $this->render(sprintf('AdminBundle::users/%s.html.php', $isProfile ? 'profile' : 'manage' ), [
            'user' => $user,
            'form' => $form,
            'formError' => $formError,
            'isProfile' => $isProfile,
        ]);
    }
}
