<?php

namespace App\Controller;

use Shared\Entity\PageBlocks;
use Shared\Entity\Post;
use Symfony\Component\HttpFoundation\Request;

class ServicesController extends AbstractController
{
    public function partialByCategory(Request $request, $params)
    {
        $services = [];
        $title = null;
        $description = null;
        $categories = [];

        if ($params instanceof PageBlocks) {
            $title = $params->getTitle();
            $categories = $params->getConfig()['category'] ?? $categories;
            $description = $params->getConfig()['text'] ?? $description;
        }

        if (count($categories)) {
            $services = $this->getDoctrine()
                ->getRepository(Post::class)
                ->getPostsByCategory($request->getLocale(), $categories);
        }

        return $this->render('theme/layout/partial/services.html.php', [
            'services' => $services,
            'title' => $title,
            'description' => $description,
        ]);
    }
}
