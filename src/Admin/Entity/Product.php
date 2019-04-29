<?php

namespace Admin\Entity;

use Admin\Exception\ProductSettingsException;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="Admin\Repository\ProductRepository")
 * @ORM\Table(name="products")
 */
class Product {

    use Traits\Traceability;
    use Traits\Setting;

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
     * @Gedmo\Slug(fields={"title"}, unique=false)
     * @ORM\Column(type="string", length=254, nullable=true)
     */
    private $slug;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $locale;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $available;

    /**
     * Product constructor.
     */
    public function __construct()
    {
        $this->settings = new ArrayCollection();
        $this->public = false;
    }

}