<?php

namespace Admin\Service;

use Admin\Exception\Exception;
use Doctrine\ORM\EntityManager;
use Shared\Entity\User;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;

class UserManageService
{
    /** @var EntityManager  */
    private $em;

    /** @var User */
    private $user;

    /**
     * PageManageService constructor.
     * @param EntityManager
     */
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    /**
     * @param User $user
     * @throws Exception
     */
    public function saveUserData(Form $form, Request $request)
    {
        /** @var User $post */
        $user = $form->getData();

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