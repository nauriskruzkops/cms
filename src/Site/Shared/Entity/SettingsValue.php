<?php

namespace Shared\Entity;

use Shared\Entity\Traits\TraceabilityCreated;
use Shared\Entity\Traits\TraceabilityUpdated;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Shared\Repository\SettingsRepository")
 * @ORM\Table(name="settings_value")
 */
class SettingsValue {

    Use TraceabilityCreated;
    Use TraceabilityUpdated;

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var Settings
     * @ORM\ManyToOne(targetEntity="Shared\Entity\Settings", inversedBy="values")
     * @ORM\JoinColumn(name="setting_id", referencedColumnName="id")
     */
    private $setting;

    /**
     * @ORM\Column(name="`key`", type="string", length=255, nullable=true)
     */
    private $key;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $value;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     * @return SettingsValue
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return Settings
     */
    public function getSetting():? Settings
    {
        return $this->setting;
    }

    /**
     * @param Settings $setting
     * @return SettingsValue
     */
    public function setSetting(Settings $setting):? SettingsValue
    {
        $this->setting = $setting;

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
     * @return SettingsValue
     */
    public function setKey($key)
    {
        $this->key = $key;

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
     * @return SettingsValue
     */
    public function setValue($value)
    {
        $this->value = $value;

        return $this;
    }

}