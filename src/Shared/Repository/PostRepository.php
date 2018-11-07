<?php

namespace Shared\Repository;

use Doctrine\ORM\EntityRepository;
use Shared\Entity\Post;

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
}