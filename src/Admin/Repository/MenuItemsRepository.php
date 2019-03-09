<?php

namespace Admin\Repository;

use Gedmo\Tree\Entity\Repository\NestedTreeRepository;
use Admin\Entity\Menu;
use Admin\Entity\MenuItems;

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
        $qb->join('mi.menu', 'm');
        $qb->where('mi.menu = :menu')
            ->setParameter('menu', $menu);

        if ($public) {
            $qb->andWhere('mi.enabled = :public')
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