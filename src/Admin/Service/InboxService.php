<?php

namespace Admin\Service;

use Admin\Entity\Inbox;
use Admin\Exception\InboxException;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

class InboxService
{
    /** @var EntityManager  */
    protected $em;

    /**
     * SettingService constructor.
     * @param EntityManager|null $doctrine
     */
    public function __construct(EntityManagerInterface $doctrine = null)
    {
        $this->em = $doctrine;
    }

    /**
     * @param int $id
     * @throws InboxException
     */
    public function deleteMessage(int $id)
    {
        try {
            /** @var Inbox $message */
            $message = $this->em->getRepository(Inbox::class)->find($id);
            $this->em->remove($message);
            $this->em->flush();
        } catch (\Exception $e) {
            throw new InboxException($e->getMessage(), $e->getCode(), $e);
        }
    }
}