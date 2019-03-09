<?php

namespace Admin\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;

class SettingsRepository extends EntityRepository
{
    /**
     * @param array $order
     * @return array
     */
    public function findAll($order = [])
    {
        return parent::findBy([
            'hidden' => false
        ], $order);
    }

    public function getByGroup($group)
    {
        $qb = $this->createQueryBuilder('s');
        $qb->select('s')
            ->where(
            $qb->expr()->eq('s.group', ':group')
        )->setParameter('group', $group);

        $qb->orderBy('s.group', 'ASC');
        $qb->addOrderBy('s.key', 'ASC');

        $query = $qb->getQuery();

        return $query->getResult();
    }

}
