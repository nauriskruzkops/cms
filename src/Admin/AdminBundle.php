<?php

namespace Admin;

use Doctrine\ORM\EntityManager;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class AdminBundle extends Bundle
{
    public function boot()
    {
        /** @var EntityManager $em */
        $em = $this->container->get('doctrine.orm.default_entity_manager');

        // get the event manager
        $evm = $em->getEventManager();
        $evm->addEventSubscriber(new \Gedmo\Sortable\SortableListener);
        $evm->addEventSubscriber(new \Gedmo\Sluggable\SluggableListener());
        $evm->addEventSubscriber(new \Gedmo\Tree\TreeListener());
    }
}
