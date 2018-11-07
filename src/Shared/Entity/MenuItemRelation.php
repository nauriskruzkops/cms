<?php

namespace Shared\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Shared\Repository\MenuItemRelationRepository")
 * @ORM\Table(name="menu_item_relation")
 */
class MenuItemRelation {

    use Traits\Traceability;

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="MenuItems", inversedBy="relations", cascade={"persist"})
     * @ORM\JoinColumn(name="menu_item_id", referencedColumnName="id")
     */
    private $menuItem;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $type;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $objectClass;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $objectId;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     * @return MenuItemRelation
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getMenuItem()
    {
        return $this->menuItem;
    }

    /**
     * @param mixed $menuItem
     * @return MenuItemRelation
     */
    public function setMenuItem(MenuItems $menuItem = null)
    {
        $this->menuItem = $menuItem;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     * @return MenuItemRelation
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
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
     * @return MenuItemRelation
     */
    public function setObjectClass($objectClass)
    {
        $this->objectClass = $objectClass;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getObjectId()
    {
        return $this->objectId;
    }

    /**
     * @param mixed $objectId
     * @return MenuItemRelation
     */
    public function setObjectId($objectId)
    {
        $this->objectId = $objectId;

        return $this;
    }
}