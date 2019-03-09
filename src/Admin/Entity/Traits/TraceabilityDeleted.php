<?php

namespace Admin\Entity\Traits;

use Admin\Entity\User;

/**
 * Trait TraceabilityDeleted
 *
 * @package Admin\Entity\Traits
 * @ORM\HasLifecycleCallbacks
 * @ORM\EntityListeners({"Admin\EventListener\TraceabilityListener"})
 */
trait TraceabilityDeleted {
    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $deletedAt;

    /**
     * @var User
     * @ORM\ManyToOne(targetEntity="Admin\Entity\User", cascade={"persist", "remove"})
     * @ORM\JoinColumn(name="deleted_by", referencedColumnName="id")
     */
    public $deletedBy;

    /**
     * @return \DateTime
     */
    public function getDeletedAt(): \DateTime
    {
        return $this->deletedAt;
    }

    /**
     * @param \DateTime $deletedAt
     * @return $this
     */
    public function setDeletedAt(\DateTime $deletedAt)
    {
        $this->deletedAt = $deletedAt;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getDeletedBy()
    {
        return $this->deletedBy;
    }

    /**
     * @param mixed $deletedBy
     * @return $this
     */
    public function setDeletedBy($deletedBy)
    {
        $this->deletedBy = $deletedBy;

        return $this;
    }
}