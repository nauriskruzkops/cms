<?php

namespace Shared\Repository;

use Gedmo\Tree\Entity\Repository\NestedTreeRepository;
use Shared\Entity\Menu;
use Shared\Entity\MenuItems;

class MenuItemsRepository extends NestedTreeRepository
{
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
            'left' => 'ASC',
            'level' => 'ASC',
        ]);

        return $found;
    }
}