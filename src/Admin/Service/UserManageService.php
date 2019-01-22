<?php

namespace Admin\Service;

use Admin\Exception\Exception;
use Doctrine\ORM\EntityManager;
use Shared\Entity\User;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserManageService
{
    /** @var EntityManager  */
    private $em;

    /** @var UserPasswordEncoderInterface  */
    private $encoder;

    /** @var User */
    private $user;

    /**
     * PageManageService constructor.
     * @param EntityManager
     */
    public function __construct(EntityManager $em, UserPasswordEncoderInterface $encoder)
    {
        $this->em = $em;
        $this->encoder = $encoder;
    }

    /**
     * @param User $user
     * @throws Exception
     */
    public function saveUserData(Form $form, Request $request)
    {
        /** @var User $user */
        $user = $form->getData();

        if ($form->has('password')) {
            $plainPassword = $form->get('password')->getData();
            if ($plainPassword && !empty($plainPassword)) {
                $encoded = $this->encoder->encodePassword($user, $plainPassword);
                $user->setPassword($encoded);
            }
        }

        try {
            if ($user->getId()) {
                $this->em->merge($user);
            } else {
                $this->em->persist($user);
            }
            $this->em->flush();
        } catch (\Exception $e) {
            throw new Exception('Sorry, something wrong, user data not saved', $e->getCode(), $e);
        }
    }
}