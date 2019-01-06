<?php

namespace Shared\Repository;

use Gedmo\Tree\Entity\Repository\NestedTreeRepository;
use Shared\Entity\Page;

class PageRepository extends NestedTreeRepository
{
    public function getNestedQueryBuilder()
    {
        $qb = $this->createQueryBuilder('p');
        $qb->select('p')
            ->orderBy('p.root', 'ASC')
            ->orderBy('p.left', 'ASC')
        ;
        return $qb;
    }

    public function getNestedArray($locale)
    {
        $qb = $this->getNestedQueryBuilder();
        $qb->where('p.locale = :locale')
            ->setParameter('locale', $locale);
        $result = $qb->getQuery()->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);

        return $this->buildTreeArray($result);
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