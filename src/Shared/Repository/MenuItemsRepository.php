<?php

namespace Shared\Repository;

use Gedmo\Tree\Entity\Repository\NestedTreeRepository;
use Shared\Entity\Menu;
use Shared\Entity\MenuItems;

class MenuItemsRepository extends NestedTreeRepository
{
    public function getNestedQueryBuilder()
    {
        $qb = $this->createQueryBuilder('mi');
        $qb->select('mi')
            ->orderBy('mi.root', 'ASC')
            ->orderBy('mi.left', 'ASC')
        ;
        return $qb;
    }

    public function getNestedArray($menu, $public = null)
    {
        $qb = $this->getNestedQueryBuilder();

        $qb->where('mi.menu = :menu')
            ->setParameter('menu', $menu);

        if ($public) {
            $qb->where('mi.public = :public')
                ->setParameter('public', true);
        }
        $result = $qb->getQuery()->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);

        return $this->buildTreeArray($result);
    }

    /**
     * @param Menu $menu
     * @return MenuItems[]
     */
    public function getSiteMenuItems(Menu $menu, $level = null)
    {
        $where = [];
        $where['menu'] = $menu;
        $where['enabled'] = true;
        if ($level !== null) {
            $where['level'] = $level;
        }

        $found = $this->findBy($where,[
            'parent' => 'ASC',
            'left' => 'ASC',
        ]);

        return $found;
    }
}