<?php

namespace Admin\Entity;

use Doctrine\ORM\Mapping as ORM;
use Traversable;

/**
 * @ORM\Entity(repositoryClass="Admin\Repository\CategoryRepository")
 * @ORM\Table(name="categories")
 */
class Category {

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
    private $slag;

    /**
     * @ORM\Column(type="string", length=254, nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=2, nullable=true)
     */
    private $locale;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     * @return Category
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getSlag()
    {
        return $this->slag;
    }

    /**
     * @param mixed $slag
     * @return Category
     */
    public function setSlag($slag)
    {
        $this->slag = $slag;

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
     * @return Category
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
     * @return Category
     */
    public function setLocale($locale)
    {
        $this->locale = $locale;

        return $this;
    }

}