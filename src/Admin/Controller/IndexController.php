<?php

namespace Admin\Controller;

use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/admin", name="ADM_index")
     */
    public function index()
    {
        return $this->render('AdminBundle::index.html.php', [
            'controller_name' => 'IndexController',
        ]);
    }
}
