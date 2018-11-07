<?php

namespace Shared\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Shared\Repository\SettingsRepository")
 * @ORM\Table(name="settings")
 */
class Settings {

    use Traits\Traceability;

    const TYPE_TEXT = 'text';
    const TYPE_INTEGER = 'integer';
    const TYPE_DATE = 'date';

    const RELATION_GLOBAL = 'system';
    const RELATION_COMPANY = 'company';
    const RELATION_EMPLOYEE = 'employee';

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $type = self::TYPE_TEXT;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $group;

    /**
     * @ORM\Column(type="string", length=100, nullable=false)
     */
    private $key;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $value;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $translatable;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $protected;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $hidden;

    /**
     * @ORM\OneToMany(targetEntity="Shared\Entity\SettingsValue", mappedBy="setting", cascade={"persist"})
     */
    private $values;

    public function __construct()
    {
        $this->values = new ArrayCollection();
        $this->translatable = false;
        $this->protected = false;
        $this->hidden = false;
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
     * @return Settings
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getGroup()
    {
        return $this->group;
    }

    /**
     * @param mixed $group
     * @return Settings
     */
    public function setGroup($group)
    {
        $this->group = $group;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * @param mixed $key
     * @return Settings
     */
    public function setKey($key)
    {
        $this->key = $key;

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
     * @return Settings
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     * @return Settings
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return ArrayCollection|SettingsValue[]
     */
    public function getValues()
    {
        return $this->values;
    }

    /**
     * @param $values
     * @return Settings
     */
    public function setValues($values)
    {
        $this->values = $values;

        return $this;
    }

    /**
     * @param SettingsValue $values
     * @return Settings
     */
    public function addValues(SettingsValue $value)
    {
        if (!$this->values->contains($value)) {
            $value->setSetting($this);
            $this->values->add($value);
        }

        return $this;
    }

    /**
     * @param SettingsValue $value
     * @return Settings
     */
    public function removeValue(SettingsValue $value)
    {
        if ($this->values->contains($value)) {
            $this->values->remove($value);
        }

        return $this;
    }

    /**
     * @param SettingsValue $values
     * @return Settings
     */
    public function removeValues(SettingsValue $value)
    {
        foreach ($this->values as $value) {
            $this->removeValue($value);
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param mixed $value
     * @return Settings
     */
    public function setValue($value)
    {
        $this->value = $value;

        return $this;
    }

    /**
     * @return boolean
     */
    public function getTranslatable()
    {
        return $this->translatable;
    }

    /**
     * @param boolean $translatable
     * @return Settings
     */
    public function setTranslatable($translatable)
    {
        $this->translatable = $translatable;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getProtected()
    {
        return $this->protected;
    }

    /**
     * @param mixed $protected
     * @return Settings
     */
    public function setProtected($protected)
    {
        $this->protected = $protected;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getHidden()
    {
        return $this->hidden;
    }

    /**
     * @param mixed $hidden
     * @return Settings
     */
    public function setHidden($hidden)
    {
        $this->hidden = $hidden;

        return $this;
    }
}