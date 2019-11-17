<?php

namespace Admin\Entity\Traits;

use Admin\Entity\User;

/**
 * Trait TraceabilityCreated
 *
 * @package Admin\Entity\Traits
 * @ORM\HasLifecycleCallbacks
 * @ORM\EntityListeners({"Admin\EventListener\TraceabilityListener"})
 */
trait TraceabilityCreated {
    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $createdAt;

    /**
     * @var User
     * @ORM\ManyToOne(targetEntity="Admin\Entity\User")
     * @ORM\JoinColumn(name="created_by", referencedColumnName="id")
     */
    public $createdBy;

    /**
     * @return \DateTime
     */
    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    /**
     * @param \DateTime $createdAt
     * @return $this
     */
    public function setCreatedAt(\DateTime $createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getCreatedBy()
    {
        return $this->createdBy;
    }

    /**
     * @param mixed $createdBy
     * @return $this
     */
    public function setCreatedBy($createdBy)
    {
        $this->createdBy = $createdBy;

        return $this;
    }

}