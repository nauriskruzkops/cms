<?php

namespace Admin\Repository;

use Doctrine\ORM\EntityRepository;
use Admin\Entity\Post;

class PostRepository extends EntityRepository
{
    /**
     * @param $locale
     * @return Post[]|null
     */
    public function findAllByLocale($locale)
    {
        return $this->findBy(['locale' => $locale]);
    }

    /**
     * @param $locale
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function getPublicQueryBuilder($locale)
    {
        $qb = $this->createQueryBuilder('p');

//        $qb->where(
//            $qb->expr()->eq('locale', ':locale')
//        )->setParameter('locale', $locale);

        $qb->where(
            $qb->expr()->eq('p.public', ':public')
        )->setParameter('public', true);

        return $qb;
    }

    public function getPostsByCategory($locale, array $categories = [])
    {
        $qb = $this->getPublicQueryBuilder($locale);
        $qb->join('p.categories', 'c');

        $query = $qb->getQuery();
        $query->useQueryCache(true);

        return $query->getResult();
    }
}