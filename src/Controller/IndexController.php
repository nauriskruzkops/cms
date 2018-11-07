<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends \App\Controller\AbstractController
{
    public function __invoke(Request $request)
    {
        return $this->index($request);
    }

    public function index(Request $request)
    {
        return $this->render('index.html.php', [
            'controller_name' => 'IndexController',
        ]);
    }
}
