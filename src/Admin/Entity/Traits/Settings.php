<?php

namespace Admin\Entity\Traits;

trait Settings {

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
    public function getObject()
    {
        return $this->object;
    }

    /**
     * @param mixed $Product
     * @return $this
     */
    public function setObject($Product)
    {
        $this->object = $Product;

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
     * @return $this
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
     * @return $this
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
     * @return $this
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
     * @return $this
     */
    public function setValueText($valueText)
    {
        $this->valueText = $valueText;

        return $this;
    }
}