<?php

namespace Admin\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;

class TranslationRepository extends EntityRepository
{
    public function listToEdit()
    {
        $qb = $this->createQueryBuilder('t');
        $qb->select('t.id, t.key, t.group');

        $qb->where(
            $qb->expr()->neq('t.group', ':group')
        )->setParameter('group', 'settings');

        $qb->groupBy('t.key', 't.group');
        $qb->orderBy('t.key', 'DESC');

        return $qb->getQuery()->getArrayResult();
    }
}
