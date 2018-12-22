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
        return $this->redirectToRoute('adm_page_list');
    }
}
