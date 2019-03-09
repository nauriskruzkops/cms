<?php

namespace Admin\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Admin\Repository\GalleryRepository")
 * @ORM\Table(name="gallery")
 */
class Gallery {

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
     * @var ArrayCollection|Storage[]
     *
     * @ORM\OneToMany(targetEntity="Storage", mappedBy="gallery", cascade={"persist","remove"})
     * @ORM\OrderBy({"left" = "ASC"})
     */
    private $images;

}