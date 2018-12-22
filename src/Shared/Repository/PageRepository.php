<?php

namespace Shared\Repository;

use Gedmo\Tree\Entity\Repository\NestedTreeRepository;
use Shared\Entity\Page;

class PageRepository extends NestedTreeRepository
{
    public function getNestedQueryBuilder()
    {
        $qb = $this->createQueryBuilder('p');
        $qb->orderBy('p.left', 'ASC');
        $qb->orderBy('p.level', 'ASC');

        return $qb;
    }

    public function findAll()
    {
        $qb = $this->getNestedQueryBuilder();
        $query = $qb->getQuery();

        return $query->getResult();
    }

    /**
     * @param $locale
     * @return Page[]|null
     */
    public function findAllByLocale($locale)
    {
        $qb = $this->getNestedQueryBuilder();
        $qb->where('p.locale = :locale')
            ->setParameter('locale', $locale);
        $query = $qb->getQuery();

        return $query->getResult();
    }

    /**
     * @param $locale
     * @return Page[]|null
     */
    public function findAllPublicBy($locale)
    {
        $qb = $this->getNestedQueryBuilder();

        $qb->where('p.public = :public')
            ->setParameter('public', true);

        $qb->where('p.locale = :locale')
            ->setParameter('locale', $locale);

        $query = $qb->getQuery();

        return $query->getResult();
    }
}