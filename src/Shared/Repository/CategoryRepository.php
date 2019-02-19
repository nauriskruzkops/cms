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
    public function findAllByLocale($locale, $returnArray = true)
    {
        $qb = $this->createQueryBuilder('c');

        $qb->where($qb->expr()->eq('c.locale', ':locale'))->setParameter('locale', $locale);

        $query = $qb->getQuery();

        if ($returnArray) {
            return $query->getArrayResult();
        }

        return $query->getResult();
    }

    /**
     * @param $locale
     * @return Category[]|null
     */
    public function getForFormChoiceType($locale)
    {
        $return = [];
        $array = $this->findAllByLocale($locale);
        foreach ($array as $category) {
            $return[$category['title']] = $category['slag'];
        }
        return $return;
    }
}