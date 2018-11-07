<?php

namespace Shared\Repository;

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

}
