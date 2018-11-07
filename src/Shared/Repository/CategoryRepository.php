<?php

namespace Shared\Repository;

use Doctrine\ORM\EntityRepository;
use Shared\Entity\Category;

class CategoryRepository extends EntityRepository
{
    /**
     * @param $locale
     * @return Category[]|null
     */
    public function findAllByLocale($locale)
    {
        return $this->findBy(['locale' => $locale]);
    }
}