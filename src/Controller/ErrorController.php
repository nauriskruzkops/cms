<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ErrorController extends \App\Controller\AbstractController
{
    public function __invoke(Request $request)
    {
        return $this->error404($request);
    }

    public function error404(Request $request)
    {
        return $this->render('error.html.php', []);
    }
}