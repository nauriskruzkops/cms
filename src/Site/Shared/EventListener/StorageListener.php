<?php

namespace Shared\EventListener;

use Shared\Entity\Storage;
use Doctrine\ORM\Event\LifecycleEventArgs;

class StorageListener
{

    public function __construct()
    {
        //
    }

    public function postUpdate(LifecycleEventArgs $eventArgs)
    {
        $entity = $eventArgs->getEntity();
        if (property_exists($entity, 'image')) {
            $storage = new Storage();
            $storage->setObjectClass(get_class($entity));
            $storage->setObjectClass($entity->getId());
            $storage->setFile($entity->getImage());
        }
    }

    public function postPersist(LifecycleEventArgs $eventArgs)
    {
        $em = $eventArgs->getObjectManager();
        $entity = $eventArgs->getEntity();
        if (property_exists($entity, 'image')) {
            if (!empty($entity->getImage())) {
                $storage = new Storage();
                $storage->setObjectClass(get_class($entity));
                $storage->setObjectClass($entity->getId());
                $storage->setFile($entity->getImage());
                $em->persist($storage);
                $em->flush();
            }
        }
    }

}