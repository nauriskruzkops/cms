<?php

namespace Admin\Controller;

use Admin\Entity\Translation;
use Admin\Repository\TranslationRepository;
use Doctrine\Common\Collections\ArrayCollection;
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
        $list = $repository->listToEdit();

        return $this->render('AdminBundle::translation/index.html.php', [
            'translations' => $list,
        ]);
    }

    /**
     * @Route("/translation/{id}/edit", name="adm_translation_edit")
     * @param Request $request
     * @return Response
     */
    public function edit(Request $request)
    {
        $id = $request->get('id');

        /** @var Translation $translation */
        $translation = $this->getDoctrine()->getManager()->getRepository(Translation::class)->find($id);

        if ($request->isMethod('POST')) {
            $data = $request->request->all();
            var_dump($data);
            exit;
        }

        /** @var Translation[] $translations */
        $translations = $this->getDoctrine()->getManager()->getRepository(Translation::class)->findBy([
            'key' => $translation->getKey(),
            'group' => $translation->getGroup()
        ]);

        return $this->render('AdminBundle::translation/edit.html.php', [
            'translationKey' => $translation,
            'translations' => new ArrayCollection($translations),
        ]);
    }
}
