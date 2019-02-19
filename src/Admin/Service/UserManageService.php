<?php

namespace Admin\Service;

use Admin\Exception\Exception;
use Doctrine\ORM\EntityManager;
use Shared\Entity\User;
use Symfony\Component\Form\Form;
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
     * @param Form $form
     * @param User $user
     * @throws Exception
     */
    public function changePassword(Form $form)
    {
        /** @var User $data */
        $data = $form->getData();

        if ($form->has('plainPassword')) {
            $plainPassword = $form->get('plainPassword')->getData();
            if ($plainPassword && !empty($plainPassword)) {
                $encoded = $this->encoder->encodePassword($data, $plainPassword);
                $data->setPassword($encoded);
            }
        }

        return $form;
    }

    /**
     * @param Form $form
     * @param User $user
     * @return User
     * @throws Exception
     */
    public function saveUserData(Form $form)
    {
        $form = $this->changePassword($form);

        /** @var User $data */
        $data = $form->getData();

        try {
            if ($data->getId()) {
                $this->em->merge($data);
            } else {
                $this->em->persist($data);
            }
            $this->em->flush();
        } catch (\Exception $e) {
            throw new Exception('Sorry, something wrong, user data not saved', $e->getCode(), $e);
        }

        return $data;
    }
}