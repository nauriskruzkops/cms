<?php

namespace Admin\Entity\Traits;

use Admin\Entity\User;

/**
 * Trait TraceabilityUpdated
 *
 * @package Admin\Entity\Traits
 * @ORM\HasLifecycleCallbacks
 * @ORM\EntityListeners({"Admin\EventListener\TraceabilityListener"})
 */
trait TraceabilityUpdated {
    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $updatedAt;

    /**
     * @var User
     * @ORM\ManyToOne(targetEntity="Admin\Entity\User", cascade={"persist", "remove"})
     * @ORM\JoinColumn(name="updated_by", referencedColumnName="id")
     */
    public $updatedBy;

    /**
     * @return \DateTime
     */
    public function getUpdatedAt(): \DateTime
    {
        return $this->updatedAt;
    }

    /**
     * @param \DateTime $updatedAt
     * @return TraceabilityUpdated
     */
    public function setUpdatedAt(\DateTime $updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getUpdatedBy()
    {
        return $this->updatedBy;
    }

    /**
     * @param mixed $updatedBy
     * @return TraceabilityUpdated
     */
    public function setUpdatedBy($updatedBy)
    {
        $this->updatedBy = $updatedBy;

        return $this;
    }


}