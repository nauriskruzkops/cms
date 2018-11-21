<?php

namespace Shared\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Traversable;

/**
 * @ORM\Entity(repositoryClass="Shared\Repository\MenuRepository")
 * @ORM\Table(name="menu")
 */
class Menu {

    use Traits\Traceability;

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=254, nullable=true)
     */
    private $code;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $locale;

    /**
     * @ORM\Column(type="boolean", nullable=false, options={"default": false})
     */
    private $enabled;

    /**
     * @var ArrayCollection|Category[]
     *
     * @ORM\OneToMany(targetEntity="MenuItems", mappedBy="menu", cascade={"persist","remove"})
     * @ORM\OrderBy({"left" = "ASC", "level" = "ASC"})
     */
    private $items;

    /**
     * Menu constructor.
     */
    public function __construct()
    {
        $this->items = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     * @return Menu
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * @param mixed $code
     * @return Menu
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     * @return Menu
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLocale()
    {
        return $this->locale;
    }

    /**
     * @param mixed $locale
     * @return Menu
     */
    public function setLocale($locale)
    {
        $this->locale = $locale;

        return $this;
    }

    /**
     * @return ArrayCollection|Category[]
     */
    public function getItems()
    {
        return $this->items;
    }

    /**
     * @param MenuItems $item
     * @return Menu
     */
    public function addItems(MenuItems $item = null)
    {
        if (!$this->items->contains($item)) {
            $item->setMenu($this);
            $this->items->add($item);
        }

        return $this;
    }

    /**
     * @param ArrayCollection|Category[] $items
     * @return Menu
     */
    public function setItems($items)
    {
        foreach ($items as $item) {
            $this->addItems($item);
        }

        return $this;
    }

    /**
     * @param MenuItems $children
     * @return Menu
     */
    public function removeChildren(MenuItems $item)
    {
        if ($this->items->contains($item)) {
            $this->items->removeElement($item);
        }

        return $this;
    }

    /**
     * @param MenuItems[]|ArrayCollection $children
     * @return Menu
     */
    public function removeChildrens($items = null)
    {
        foreach ($items ?? $this->getItems() as $item) {
            $this->removeChildren($item);
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getEnabled()
    {
        return $this->enabled;
    }

    /**
     * @param boolean $enabled
     * @return Menu
     */
    public function setEnabled($enabled)
    {
        $this->enabled = $enabled;

        return $this;
    }
}