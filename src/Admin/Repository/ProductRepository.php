<?php

namespace Admin\Repository;

use Doctrine\ORM\EntityRepository;

class ProductRepository extends EntityRepository
{
    public function findAll()
    {
        return parent::findAll();
    }
}