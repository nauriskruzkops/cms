<?php

namespace Admin\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AuthController extends AbstractController
{

    /**
     * @Route("/login", name="ADM_login")
     */
    public function login(Request $request, AuthenticationUtils $authUtils)
    {
        if (($error = $authUtils->getLastAuthenticationError())){
            $this->addFlash('error', $error->getMessage());
        }

        $lastUsername = $authUtils->getLastUsername();

        return $this->render('AdminBundle::login.html.php', [
            'last_username' => $lastUsername,
            'error'         => $error,
        ]);
    }

    /**
     * @Route("/logout", name="ADM_logout")
     * @param Request $request
     * @param AuthenticationUtils $authUtils
     */
    public function logout(Request $request, AuthenticationUtils $authUtils) {}

}
