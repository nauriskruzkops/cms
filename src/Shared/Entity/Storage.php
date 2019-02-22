<?php

namespace Shared\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Shared\Repository\StorageRepository")
 * @ORM\Table(name="storage")
 */
class Storage {

    use Traits\Traceability;

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Gallery", inversedBy="settings", cascade={"persist"})
     * @ORM\JoinColumn(name="gallery_id", referencedColumnName="id", onDelete="SET NULL")
     */
    private $gallery;

    /**
     * @ORM\Column(type="string", length=254, nullable=true)
     */
    private $objectClass;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $objectID;

    /**
     * @ORM\Column(type="string", length=254, nullable=true)
     */
    private $file;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $mimeType;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $size;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getObjectClass()
    {
        return $this->objectClass;
    }

    /**
     * @param mixed $objectClass
     * @return Storage
     */
    public function setObjectClass($objectClass)
    {
        $this->objectClass = $objectClass;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getObjectID()
    {
        return $this->objectID;
    }

    /**
     * @param mixed $objectID
     * @return Storage
     */
    public function setObjectID($objectID)
    {
        $this->objectID = $objectID;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getFile()
    {
        return $this->file;
    }

    /**
     * @param mixed $file
     * @return Storage
     */
    public function setFile($file)
    {
        $this->file = $file;

        return $this;
    }
}