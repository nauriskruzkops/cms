<?php

namespace Admin\EventListener;

use Admin\Entity\User;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;


class TraceabilityListener
{
    /** @var User  */
    private $user;

    /** @var TokenStorageInterface */
    protected $tokenStorage;

    /** @var TokenInterface */
    protected $token;

    public function __construct(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
        $this->token = $tokenStorage->getToken();
    }

    public function preUpdate(LifecycleEventArgs $eventArgs)
    {

        $entity = $eventArgs->getEntity();

        if (method_exists($entity, 'setUpdatedAt')) {
            $entity->setUpdatedAt(new \DateTime());
        }

        if (method_exists($entity, 'setUpdatedBy')) {
            if ($this->token && ($user = $this->token->getUser())) {
                $entity->setUpdatedBy($user);
            }
        }
    }

    public function prePersist(LifecycleEventArgs $eventArgs)
    {
        $entity = $eventArgs->getEntity();
        if ($entity instanceof User) {
            if ($entity->getUsername() == 'system') {
                return ;
            }
        }

        if (method_exists($entity, 'setCreatedAt')) {
            $entity->setCreatedAt(new \DateTime());
        }

        if (method_exists($entity, 'setCreatedBy')) {
            if (!$entity->getCreatedBy()) {
                if ($this->token && ($user = $this->token->getUser())) {
                    $entity->setCreatedBy($user);
                }
            }
        }

        if ($entity->getId() !== null) {
            $this->preUpdate($eventArgs);
        }
    }

}