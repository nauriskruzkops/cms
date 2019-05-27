<?php

namespace Admin\Entity;

use Admin\Entity\Traits\TraceabilityCreated;
use Admin\Entity\Traits\TraceabilityUpdated;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Admin\Repository\TranslationRepository")
 * @ORM\Table(name="translations")
 */
class Translation {

    use TraceabilityCreated;
    use TraceabilityUpdated;

    const GROUP_SITE = 'site';
    const GROUP_SETTINGS = 'settings';

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", name="`group`",  length=20, nullable=true)
     */
    private $group = self::GROUP_SITE;

    /**
     * @ORM\Column(type="string", name="`locale`", length=2, nullable=true)
     */
    private $locale;

    /**
     * @ORM\Column(type="string", name="`key`", nullable=true)
     */
    private $key;

    /**
     * @ORM\Column(type="string", nullable=true)
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
     * @return mixed
     */
    public function getGroup()
    {
        return $this->group;
    }

    /**
     * @param mixed $group
     * @return Translation
     */
    public function setGroup($group)
    {
        $this->group = $group;

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
     * @return Translation
     */
    public function setLocale($locale)
    {
        $this->locale = $locale;

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
     * @return Translation
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
     * @return Translation
     */
    public function setValue($value)
    {
        $this->value = $value;

        return $this;
    }

}