<?php

namespace Admin\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * @ORM\Entity(repositoryClass="Admin\Repository\PageSettingsRepository")
 * @ORM\Table(name="page_settings")
 */
class PageSettings {

    use Traits\Traceability;

    const TYPE_STRING = 'string';
    const TYPE_TEXT = 'text';
    const TYPE_INT = 'int';
    const TYPE_DATETIME = 'datetime';
    const TYPE_FILE = 'file';
    const TYPES = [
        self::TYPE_STRING,
        self::TYPE_TEXT,
        self::TYPE_INT,
        self::TYPE_DATETIME,
        self::TYPE_FILE
    ];

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="\Admin\Entity\Page", inversedBy="settings", cascade={"persist"})
     * @ORM\JoinColumn(name="page_id", referencedColumnName="id")
     */
    private $page;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $type;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $value;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $valueText;

    /**
     * @return $this
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return $this
     */
    public function getPage()
    {
        return $this->page;
    }

    /**
     * @param mixed $page
     * @return PageSettings
     */
    public function setPage($page)
    {
        $this->page = $page;

        return $this;
    }

    /**
     * @return $this
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * @param mixed $code
     * @return PageSettings
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * @return $this
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     * @return PageSettings
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return $this
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param mixed $value
     * @return PageSettings
     */
    public function setValue($value)
    {
        $this->value = $value;

        return $this;
    }

    /**
     * @return $this
     */
    public function getValueText()
    {
        return $this->valueText;
    }

    /**
     * @param mixed $valueText
     * @return PageSettings
     */
    public function setValueText($valueText)
    {
        $this->valueText = $valueText;

        return $this;
    }

}