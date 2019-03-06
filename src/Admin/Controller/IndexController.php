<?php

namespace Admin\Controller;

use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/index", name="ADM_index")
     */
    public function index()
    {
        return $this->render('AdminBundle::index.html.php', []);
    }
}
