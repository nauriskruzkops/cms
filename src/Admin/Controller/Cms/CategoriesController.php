<?php

namespace Admin\Controller\Cms;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoriesController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/admin/categories", name="adm_category_list")
     */
    public function index(Request $request)
    {
        return $this->render('AdminBundle::categories/index.html.php', [

        ]);
    }
}
