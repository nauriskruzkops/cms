<?php

namespace Admin\Repository;

use Doctrine\ORM\EntityRepository;
use Admin\Entity\Menu;

class MenuRepository extends EntityRepository
{
    /**
     * @param $code
     * @param $locale
     * @return Menu|null
     */
    public function getSiteMenu($code, $locale)
    {
        $found = $this->findOneBy([
            'code' => $code,
            'locale' => $locale,
            'enabled' => true,
        ]);

        return $found;
    }
}