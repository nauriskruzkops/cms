<?php

namespace App\Controller;

use Admin\Entity\PageBlocks;
use Admin\Entity\Post;
use Symfony\Component\HttpFoundation\Request;

class ServicesController extends AbstractController
{
    public function partialByCategory(Request $request, $params)
    {
        $services = [];
        $title = null;
        $description = null;
        $categories = [];
        $style = 'grid';

        if ($params instanceof PageBlocks) {
            $title = $params->getTitle();
            $configData = is_array($params->getConfig()) ? $params->getConfig()[0] ?? [] : [];
            $categories = $configData['category'] ?? $categories;
            $description = $configData['text'] ?? $description;
            $style = $configData['style'] ?? $style;
        }

        if (count($categories)) {
            $services = $this->getDoctrine()
                ->getRepository(Post::class)
                ->getPostsByCategory($request->getLocale(), $categories);
        }

        return $this->render(sprintf('theme/layout/partial/services-style-%s.html.php', $style), [
            'services' => $services,
            'title' => $title,
            'description' => $description,
        ]);
    }
}
