<?php

namespace Admin\Entity;

use Admin\Entity\Traits\Traceability;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Admin\Repository\InboxRepository")
 * @ORM\Table(name="inbox")
 */
class Inbox {

    use Traceability;

    const TYPE_EMAIL = 'email';
    const TOPIC_CONTACT_FORM = 'contacts';

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", name="`type`",  length=20, nullable=true)
     */
    private $type = self::TYPE_EMAIL;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $topic = self::TOPIC_CONTACT_FORM;

    /**
     * @var string
     * @ORM\Column(type="string", name="`locale`", length=2, nullable=true)
     */
    private $locale;

    /**
     * @var string
     * @ORM\Column(type="string", length=255,  nullable=true)
     */
    private $refererUrl;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $sender;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $phone;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    private $message;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $sent = false;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ipAddress;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $referer;

    /**
     * @var array
     * @ORM\Column(type="array", length=255, nullable=true)
     */
    private $data = [];

    /**
     * Inbox constructor.
     */
    public function __construct()
    {
        $this->data = [];
        $this->sent = false;
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
     * @return Inbox
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     * @return Inbox
     */
    public function setType(string $type): Inbox
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return string
     */
    public function getTopic(): string
    {
        return $this->topic;
    }

    /**
     * @param string $topic
     * @return Inbox
     */
    public function setTopic(string $topic): Inbox
    {
        $this->topic = $topic;

        return $this;
    }

    /**
     * @return string
     */
    public function getLocale(): string
    {
        return $this->locale;
    }

    /**
     * @param string $locale
     * @return Inbox
     */
    public function setLocale(string $locale): Inbox
    {
        $this->locale = $locale;

        return $this;
    }

    /**
     * @return string
     */
    public function getRefererUrl(): string
    {
        return $this->refererUrl;
    }

    /**
     * @param string $refererUrl
     * @return Inbox
     */
    public function setRefererUrl(string $refererUrl): Inbox
    {
        $this->refererUrl = $refererUrl;

        return $this;
    }

    /**
     * @return string
     */
    public function getSender(): string
    {
        return $this->sender;
    }

    /**
     * @param string $sender
     * @return Inbox
     */
    public function setSender(string $sender): Inbox
    {
        $this->sender = $sender;

        return $this;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     * @return Inbox
     */
    public function setEmail(string $email): Inbox
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return string
     */
    public function getPhone(): string
    {
        return $this->phone;
    }

    /**
     * @param string $phone
     * @return Inbox
     */
    public function setPhone(string $phone): Inbox
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * @return string
     */
    public function getMessage(): ?string
    {
        return $this->message;
    }

    /**
     * @param string $message
     * @return Inbox
     */
    public function setMessage(string $message): Inbox
    {
        $this->message = $message;

        return $this;
    }

    /**
     * @return bool
     */
    public function isSent(): bool
    {
        return $this->sent;
    }

    /**
     * @param bool $sent
     */
    public function setSent(bool $sent): void
    {
        $this->sent = $sent;
    }

    /**
     * @return string
     */
    public function getIpAddress(): string
    {
        return $this->ipAddress;
    }

    /**
     * @param string $ipAddress
     * @return Inbox
     */
    public function setIpAddress(?string $ipAddress): Inbox
    {
        $this->ipAddress = $ipAddress;

        return $this;
    }

    /**
     * @return string
     */
    public function getReferer(): string
    {
        return $this->referer;
    }

    /**
     * @param string $referer
     * @return Inbox
     */
    public function setReferer(?string $referer): Inbox
    {
        $this->referer = $referer;

        return $this;
    }

    /**
     * @return array
     */
    public function getData(): string
    {
        return $this->data;
    }

    /**
     * @param string $data
     */
    public function setData(?array $data): void
    {
        $this->data = $data;
    }
}