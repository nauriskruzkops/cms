<?php

namespace Shared\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * @ORM\Entity(repositoryClass="Shared\Repository\PageRepository")
 * @ORM\Table(name="pages")
 */
class Page {

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
    private $content;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $locale;

    /**
     * @return Page
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return Page
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return Page
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return Page
     */
    public function getSlag()
    {
        return $this->slag;
    }

    /**
     * @param string $slag
     * @return Page
     */
    public function setSlag($slag)
    {
        $this->slag = $slag;

        return $this;
    }

    /**
     * @return Page
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return Page
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return string
     */
    public function getLocale()
    {
        return $this->locale;
    }

    /**
     * @param string $locale
     * @return Page
     */
    public function setLocale($locale)
    {
        $this->locale = $locale;

        return $this;
    }
}