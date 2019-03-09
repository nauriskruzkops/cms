<?php

namespace Admin\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="Admin\Repository\MenuItemRelationRepository")
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
     * @Assert\NotBlank()
     * @ORM\ManyToOne(targetEntity="MenuItems", inversedBy="relations", cascade={"persist"})
     * @ORM\JoinColumn(name="menu_item_id", referencedColumnName="id")
     */
    private $menuItem;

    /**
     * @Assert\NotBlank()
     * @ORM\Column(type="string", nullable=false)
     */
    private $type;

    /**
     * @Assert\NotBlank()
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
        if ($menuItem) {
            $this->menuItem = $menuItem;
        }

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
     * @param string $type
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
     * @param string $objectClass
     * @return MenuItemRelation
     */
    public function setObjectClass($objectClass)
    {
        $this->objectClass = $objectClass;

        return $this;
    }

    /**
     * @return int
     */
    public function getObjectId()
    {
        return $this->objectId;
    }

    /**
     * @param int $objectId
     * @return MenuItemRelation
     */
    public function setObjectId($objectId)
    {
        $this->objectId = $objectId;

        return $this;
    }
}