<?php

namespace Admin\Controller\Storage;

use Shared\Entity\Storage;
use Shared\Repository\StorageRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ImagesController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/admin/storage", name="adm_storage")
     */
    public function index(Request $request)
    {
        /** @var StorageRepository $repository */
        $repository = $this->getDoctrine()->getRepository(Storage::class);
        $images = $repository->findBy([], ['id' => 'DESC']);

        $thumbListHTML = $this->render('AdminBundle::storage/partial/thumb_list.html.php', [
            'images' => $images
        ])->getContent();

        if ($request->isXmlHttpRequest()) {
            return $this->json([
                'status' => 'ok',
                'html' => $thumbListHTML
            ]);
        }
        return $this->render('AdminBundle::storage/images.html.php', [
            'listHTML' => $thumbListHTML
        ]);
    }

}