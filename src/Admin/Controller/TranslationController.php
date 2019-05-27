<?php

namespace Admin\Controller;

use Admin\Entity\Translation;
use Admin\Repository\TranslationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TranslationController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/translation", name="adm_translation")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        /** @var TranslationRepository $repository */
        $repository = $this->getDoctrine()->getManager()->getRepository(Translation::class);

        return $this->render('AdminBundle::translation/index.html.php', [
            'translations' => $repository->findBy([],['key' => 'ASC']),
        ]);
    }
}
