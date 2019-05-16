<?php

namespace App\Controller\Action;

use App\Services\RequestPageService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class EmailController extends \App\Controller\AbstractController
{
    /**
     * @Route("/{_locale}/action/message-sent", name="message_sent")
     */
    public function index(Request $request, RequestPageService $requestPageService)
    {
        return $this->render('message-sent.html.php', []);
    }
}
