<?php

namespace App\Controller;

use App\Exception\ContentNotFoundException;
use App\Services\RequestPageService;
use Symfony\Component\HttpFoundation\Request;

class PageController extends AbstractController
{
    /**
     * @param RequestPageService $requestPageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function __invoke(RequestPageService $requestPageService)
    {
        return $this->index($requestPageService);
    }

    /**
     * @param RequestPageService $requestPageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(RequestPageService $requestPageService)
    {
        try {
            $foundByRequest = $requestPageService->get();
             $menuItem = $foundByRequest['menuItem'];
             $page = $foundByRequest['content'];

            return $this->render('page.html.php', [
                'menuItem' => $menuItem,
                'page' => $page,
            ]);
        } catch (ContentNotFoundException $e) {
            return $this->render('error.html.php', []);
        }
    }
}
