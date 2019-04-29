<?php

namespace Admin\Entity;

use Admin\Entity\Interfaces\SettingsInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="Admin\Repository\ProductSettingsRepository")
 * @ORM\Table(name="product_settings")
 */
class ProductSettings implements SettingsInterface {

    use Traits\Traceability;
    use Traits\Settings;

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="\Admin\Entity\Product", inversedBy="settings", cascade={"persist"})
     * @ORM\JoinColumn(name="product_id", referencedColumnName="id")
     */
    private $object;


}