<?php

namespace Shared\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="Shared\Repository\PostRepository")
 * @ORM\Table(name="posts")
 */
class Post {

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
    private $title;

    /**
     * @Gedmo\Slug(fields={"title"}, style="lower")
     * @ORM\Column(type="string", length=254, nullable=true)
     */
    private $slag;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $text;

    /**
     * @var ArrayCollection|Category[]
     *
     * @ORM\ManyToMany(targetEntity="Category", cascade={"remove", "persist"})
     * @ORM\JoinTable(name="posts_categories",
     *      joinColumns={@ORM\JoinColumn(name="post_id", referencedColumnName="id", onDelete="CASCADE")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="category_id", referencedColumnName="id", unique=false, onDelete="CASCADE")}
     * )
     */
    private $categories;

    /**
     * @ORM\Column(type="string", length=254, nullable=true)
     */
    private $image;
    /**
     * Post is part of other content
     *
     * @var boolean
     * @ORM\Column(type="boolean", nullable=false, options={"default":0})
     */
    private $isPartOf;

    /**
     * Post is part of other content
     *
     * @var boolean
     * @ORM\Column(type="boolean", nullable=false, options={"default":0})
     */
    private $public;

    /**
     * Post constructor.
     */
    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->isPartOf = false;
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
     * @return Post
     */
    public function setId($id)
    {
        $this->id = $id;
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
     * @return Post
     */
    public function setTitle($title)
    {
        $this->title = $title;

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
     * @return Post
     */
    public function setSlag($slag)
    {
        $this->slag = $slag;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @param mixed $text
     * @return Post
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * @return ArrayCollection|Category[]
     */
    public function getCategories()
    {
        return $this->categories;
    }

    /**
     * @param ArrayCollection|Category[] $categories
     * @return Post
     */
    public function addCategory(Category $category)
    {
        $this->categories->add($category);
        return $this;
    }

    /**
     * @param ArrayCollection|Category[] $categories
     * @return Post
     */
    public function setCategories($categories)
    {
        $this->categories = $categories;
        return $this;
    }

    /**
     * @param ArrayCollection|Category[] $categories
     * @return Post
     */
    public function removeCategory(Category $category)
    {
        $this->categories->removeElement($category);

        return $this;
    }

    /**
     * @param ArrayCollection|Category[] $categories
     * @return Post
     */
    public function removeCategories()
    {
        foreach ($this->categories as $category) {
            $this->categories->removeElement($category);
        }

        return $this;
    }

    /**
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * @param $image
     * @return Post
     */
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return bool
     */
    public function isPartOf():? bool
    {
        return $this->isPartOf;
    }

    /**
     * @param bool $isPartOf
     * @return Post
     */
    public function setIsPartOf(bool $isPartOf): Post
    {
        $this->isPartOf = $isPartOf;

        return $this;
    }

    /**
     * @return bool
     */
    public function isPublic():? bool
    {
        return $this->public;
    }

    /**
     * @param bool $public
     * @return Post
     */
    public function setPublic(bool $public): Post
    {
        $this->public = $public;

        return $this;
    }
}