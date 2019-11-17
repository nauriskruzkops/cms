<?php

namespace App\Controller;

use App\Exception\ContentNotFoundException;
use App\Services\RequestPageService;
use Admin\Entity\Post;
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
            $menuItem = $foundByRequest['menuItem'];
            $page = $foundByRequest['page'];

            $services = $this->getDoctrine()
                ->getRepository(Post::class)
                ->getPostsByCategory($request->getLocale(),['services']);

            return $this->render('index.html.php', [
                'menuItem' => $menuItem,
                'page' => $page,
                'services' => $services,
            ]);

        } catch (ContentNotFoundException $e) {
            return $this->render('error.html.php', []);
        }
    }
}
