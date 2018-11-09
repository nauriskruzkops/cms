<?php

namespace Shared\Repository;

use Doctrine\ORM\EntityRepository;
use Shared\Entity\Page;

class PageRepository extends EntityRepository
{
    /**
     * @param $locale
     * @return Page[]|null
     */
    public function findAllByLocale($locale)
    {
        return $this->findBy(['locale' => $locale]);
    }
}