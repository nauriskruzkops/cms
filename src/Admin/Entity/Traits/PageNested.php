<?php

namespace Admin\Entity\Traits;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Admin\Entity\Page;
use Symfony\Component\Validator\Constraints as Assert;

trait PageNested {

    /**
     * @var int
     * @Gedmo\TreeLeft
     * @ORM\Column(name="`left`", type="integer")
     */
    private $left;

    /**
     * @var int
     * @Gedmo\TreeLevel
     * @ORM\Column(type="integer")
     */
    private $level;

    /**
     * @var int
     * @Gedmo\TreeRight
     * @ORM\Column(name="`right`", type="integer")
     */
    private $right;

    /**
     * @var Page
     * @Gedmo\TreeRoot
     * @ORM\ManyToOne(targetEntity="Admin\Entity\Page")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    private $root;

    /**
     * @var Page
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="Admin\Entity\Page", inversedBy="children")
     * @ORM\JoinColumn(referencedColumnName="id", onDelete="CASCADE")
     */
    private $parent;

    /**
     * @var ArrayCollection|Page[]
     * @ORM\OneToMany(targetEntity="Admin\Entity\Page", mappedBy="parent")
     * @ORM\OrderBy({"`left`" = "ASC"})
     */
    private $children;

    /**
     * @Gedmo\Sortable(groups={"locale","parent"})
     * @ORM\Column(type="integer")
     */
    private $sort;

    /**
     * PageNested constructor.
     */
    public function __construct()
    {
        $this->children = new ArrayCollection();
    }

    /**
     * @return int
     */
    public function getLeft(): int
    {
        return $this->left;
    }

    /**
     * @param int $left
     * @return Page
     */
    public function setLeft(int $left): Page
    {
        $this->left = $left;
        return $this;
    }

    /**
     * @return int
     */
    public function getLevel(): int
    {
        return $this->level;
    }

    /**
     * @param int $level
     * @return Page
     */
    public function setLevel(int $level): Page
    {
        $this->level = $level;
        return $this;
    }

    /**
     * @return int
     */
    public function getRight(): int
    {
        return $this->right;
    }

    /**
     * @param int $right
     * @return Page
     */
    public function setRight(int $right): Page
    {
        $this->right = $right;

        return $this;
    }

    /**
     * @return Page
     */
    public function getRoot():? Page
    {
        return $this->root;
    }

    /**
     * @param Page $root
     * @return Page
     */
    public function setRoot(Page $root):? Page
    {
        $this->root = $root;

        return $this;
    }

    /**
     * @return Page
     */
    public function getParent():? Page
    {
        return $this->parent;
    }

    /**
     * @param Page $parent
     * @return PageNested
     */
    public function setParent(Page $parent = null):? Page
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Page[]|ArrayCollection
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * @param Page $children
     * @return Page
     */
    public function addChildren(Page $children = null)
    {
        if (!$this->children->contains($children)) {
            $children->setParent($this);
            $this->children->add($children);
        }

        return $this;
    }

    /**
     * @param mixed $children
     * @return Page
     */
    public function setChildren($children)
    {
        $this->children = $children;

        return $this;
    }

    /**
     * @param Page $children
     * @return Page
     */
    public function removeChildren(Page $children)
    {
        if ($this->children->contains($children)) {
            $this->children->removeElement($children);
        }

        return $this;
    }

    /**
     * @param Page[]|ArrayCollection $children
     * @return Page
     */
    public function removeChildrens($childrens = null)
    {
        foreach ($childrens ?? $this->getChildren() as $children) {
            $this->removeChildren($children);
        }

        return $this;
    }

    /**
     * @return int
     */
    public function getSort()
    {
        return $this->sort;
    }

    /**
     * @param int $sort
     * @return self
     */
    public function setSort($sort)
    {
        $this->sort = $sort;

        return $this;
    }
}