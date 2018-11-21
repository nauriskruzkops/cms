<?php

namespace Shared\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\PersistentCollection;
use Gedmo\Mapping\Annotation as Gedmo;
use Shared\Repository\MenuItemsRepository;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @Gedmo\Tree(type="nested")
 * @ORM\Entity(repositoryClass="Shared\Repository\MenuItemsRepository")
 * @ORM\Table(name="menu_items")
 */
class MenuItems {

    use Traits\Traceability;

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Menu", inversedBy="items", cascade={"persist"})
     * @ORM\JoinColumn(name="menu_id", referencedColumnName="id")
     */
    private $menu;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $type;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $slug;

    /**
     * @Gedmo\TreeLeft
     * @ORM\Column(name="`left`", type="integer")
     */
    private $left;

    /**
     * @Gedmo\TreeLevel
     * @ORM\Column(type="integer")
     */
    private $level;

    /**
     * @Gedmo\TreeRight
     * @ORM\Column(name="`right`", type="integer")
     */
    private $right;

    /**
     * @Gedmo\TreeRoot
     * @ORM\ManyToOne(targetEntity="MenuItems")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    private $root;

    /**
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="MenuItems", inversedBy="children")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity="MenuItems", mappedBy="parent")
     * @ORM\OrderBy({"left" = "ASC"})
     */
    private $children;

    /**
     * @var MenuItemRelation[]
     * @Assert\NotBlank
     * @ORM\OneToMany(targetEntity="MenuItemRelation", mappedBy="menuItem", cascade={"persist", "remove"})
     */
    private $relations;

    /**
     * @ORM\Column(type="boolean", nullable=false, options={"default": false})
     */
    private $enabled;


    /**
     * MenuItems constructor.
     */
    public function __construct()
    {
        $this->children = new ArrayCollection();
        $this->relations = new ArrayCollection();
        $this->enabled = false;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return Menu
     */
    public function getMenu()
    {
        return $this->menu;
    }

    /**
     * @param Menu $menu
     * @return MenuItems
     */
    public function setMenu(Menu $menu = null)
    {
        $this->menu = $menu;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * @param MenuItems $parent
     * @return MenuItems
     */
    public function setParent(MenuItems $parent = null)
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return MenuItems[]|ArrayCollection
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * @param MenuItems $children
     * @return MenuItems
     */
    public function addChildren(MenuItems $children = null)
    {
        if (!$this->children->contains($children)) {
            $children->setParent($this);
            $this->children->add($children);
        }

        return $this;
    }

    /**
     * @param mixed $children
     * @return MenuItems
     */
    public function setChildren($children)
    {
        $this->children = $children;

        return $this;
    }

    /**
     * @param MenuItems $children
     * @return MenuItems
     */
    public function removeChildren(MenuItems $children)
    {
        if ($this->children->contains($children)) {
            $this->children->removeElement($children);
        }

        return $this;
    }

    /**
     * @param MenuItems[]|ArrayCollection $children
     * @return MenuItems
     */
    public function removeChildrens($childrens = null)
    {
        foreach ($childrens ?? $this->getChildren() as $children) {
            $this->removeChildren($children);
        }

        return $this;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return MenuItems
     */
    public function setTitle($title)
    {
        $this->title = $title;

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
     * @return MenuItems
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @param string $slug
     * @return MenuItems
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLeft()
    {
        return $this->left;
    }

    /**
     * @param int $left
     * @return MenuItems
     */
    public function setLeft($left)
    {
        $this->left = $left;

        return $this;
    }

    /**
     * @return int
     */
    public function getLevel()
    {
        return $this->level;
    }

    /**
     * @param int $level
     * @return MenuItems
     */
    public function setLevel($level)
    {
        $this->level = $level;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getRight()
    {
        return $this->right;
    }

    /**
     * @param int $right
     * @return MenuItems
     */
    public function setRight($right)
    {
        $this->right = $right;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getRoot()
    {
        return $this->root;
    }

    /**
     * @param int $root
     * @return MenuItems
     */
    public function setRoot($root)
    {
        $this->root = $root;

        return $this;
    }

    /**
     * @return MenuItemRelation[]|ArrayCollection
     */
    public function getRelations()
    {
        return $this->relations;
    }

    /**
     * @param MenuItemRelation[] $relations
     * @return MenuItems
     */
    public function addRelations(MenuItemRelation $relations)
    {
        if (!$this->relations->contains($relations)) {
            if ($relations->getObjectClass() !== null && $relations->getObjectId() !== null) {
                $relations->setMenuItem($this);
                $this->relations->add($relations);
            }
        }

        return $this;
    }

    /**
     * @param ArrayCollection|PersistentCollection $relations
     * @return MenuItems
     */
    public function setRelations($relations)
    {
        foreach ($relations as $relation) {
            $this->addRelations($relation);
        }

        return $this;
    }

    /**
     * @return MenuItems
     */
    public function removeRelations()
    {
        foreach ($this->getRelations() as $relation) {
            $this->removeRelation($relation);
        }

        return $this;
    }

    /**
     * @param MenuItemRelation $relation
     * @return MenuItems
     */
    public function removeRelation(MenuItemRelation $relation)
    {
        if ($this->relations->contains($relation)) {
            $this->relations->removeElement($relation);
        }

        return $this;
    }

    /**
     * @return boolean
     */
    public function getEnabled()
    {
        return $this->enabled;
    }

    /**
     * @param boolean $enabled
     * @return MenuItems
     */
    public function setEnabled($enabled)
    {
        $this->enabled = $enabled;

        return $this;
    }
}