<?php

namespace Admin\Service;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Admin\Entity\Storage;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class StorageService
{
    /** @var EntityManager  */
    protected $em;

    /** @var array */
    protected static $cache;

    /**
     * SettingService constructor.
     * @param EntityManager|null $doctrine
     */
    public function __construct(EntityManagerInterface $doctrine = null)
    {
        $this->em = $doctrine;
    }

    /**
     * @param $object
     * @param $relationObject
     * @param null $relationObjectId
     * @return string
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function register($object, $relationObject = null, $relationObjectId = null)
    {
        if($object instanceof UploadedFile) {
            $file = $object->getFilename();
        } else {
            $file = $object;
        }

        $storage = new Storage();

        if ($relationObject && !empty($relationObject)) {
            if (is_object($relationObject)) {
                $id = $relationObject->getId();
                $relationObject = get_class($relationObject);
                $relationObjectId = $id;
            }
            $storage->setObjectClass($relationObject);
            $storage->setObjectID($relationObjectId);
        }

        $storage->setFile($file);
        $this->em->persist($storage);
        $this->em->flush();
    }

}