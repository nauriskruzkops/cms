<?php

namespace App\Controller;

use Shared\Entity\Post;
use Symfony\Component\HttpFoundation\Request;

class ServicesController extends AbstractController
{
    public function partialByCategory(Request $request, array $categories)
    {
        $services = $this->getDoctrine()
            ->getRepository(Post::class)
            ->getPostsByCategory($request->getLocale(), $categories);

        return $this->render('theme/layout/partial/services.html.php', [
            'services' => $services,
        ]);
    }
}
