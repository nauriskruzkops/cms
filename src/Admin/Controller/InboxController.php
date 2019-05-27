<?php

namespace Admin\Controller;

use Admin\Entity\Inbox;
use Admin\Repository\InboxRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InboxController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/inbox", name="adm_inbox")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $locale = (string) $request->query->get('locale', $this->settings()->value('language'));

        /** @var InboxRepository $repository */
        $repository = $this->getDoctrine()->getManager()->getRepository(Inbox::class);

        return $this->render('AdminBundle::inbox/index.html.php', [
            'messages' => $repository->findBy([],['id' => 'DESC']),
            'locale' => $locale,
        ]);
    }
}
