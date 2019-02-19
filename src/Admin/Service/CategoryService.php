<?php

namespace Admin\Service;

use Doctrine\ORM\EntityManager;
use Shared\Entity\Category;
use Shared\Repository\CategoryRepository;

class CategoryService
{
    /** @var EntityManager  */
    protected $em;

    /** @var array */
    protected static $cache;

    /**
     * SettingService constructor.
     * @param EntityManager|null $doctrine
     */
    public function __construct(EntityManager $doctrine = null)
    {
        $this->em = $doctrine;
    }

    /**
     * @param $locale
     * @return Category[]|array
     */
    public function getList($locale)
    {
        /** @var CategoryRepository $repository */
        $repository = $this->em->getRepository(Category::class);

        return $repository->findAllByLocale($locale, true);
    }
}