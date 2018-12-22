<?php

namespace App\Controller;

use App\Exception\ContentNotFoundException;
use App\Services\RequestPageService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends \App\Controller\AbstractController
{
    public function __invoke(Request $request, RequestPageService $requestPageService)
    {
        return $this->index($request, $requestPageService);
    }

    public function index(Request $request, RequestPageService $requestPageService)
    {
        try {
            $foundByRequest = $requestPageService->get();

            $menuItem = $foundByRequest['content'];
            $page = $foundByRequest['menuItem'];

            return $this->render('index.html.php', [
                'menuItem' => $menuItem,
                'page' => $page,
            ]);
        } catch (ContentNotFoundException $e) {
            return $this->render('error.html.php', []);
        }
    }
}
