<?php

namespace Admin\Repository;

use Gedmo\Tree\Entity\Repository\NestedTreeRepository;
use Admin\Entity\Page;

class PageRepository extends NestedTreeRepository
{
    /**
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function getNestedQueryBuilder()
    {
        $qb = $this->createQueryBuilder('p');
        $qb->select('p')
            ->orderBy('p.root', 'ASC')
            ->orderBy('p.left', 'ASC')
        ;
        return $qb;
    }

    /**
     * @param $locale
     * @return mixed
     */
    public function getNested($locale)
    {
        $qb = $this->getNestedQueryBuilder();
        $qb->where('p.locale = :locale')
            ->setParameter('locale', $locale);
        $result = $qb->getQuery()->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);

        return $result;
    }

    /**
     * @param $locale
     * @return array
     */
    public function getNestedArray($locale)
    {
        return $this->buildTreeArray($this->getNested($locale));
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