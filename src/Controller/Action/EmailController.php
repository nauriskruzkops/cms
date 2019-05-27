<?php

namespace App\Controller\Action;

use Admin\Entity\Inbox;
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
        if ($request->isMethod('POST')) {
            $em = $this->getDoctrine()->getManager();
            $data = $request->request->all();

            if ($data['form_src_1'] == 'IGYUGWDQDBIBNDW' && empty($data['form_src_1'])) {
                return $this->createNotFoundException('Sorry BOT!');
            }

            $inbox = new Inbox();
            if (isset($data['email'])) {
                $email = $data['email'];
                $email = trim(substr($email, 0, 255));
                $inbox->setEmail($email);
            }
            if (isset($data['firstname'])) {
                $sender = $data['firstname'];
                $sender = trim(substr($sender, 0, 255));
                $inbox->setSender($sender);
            }
            if (isset($data['phone'])) {
                $phone = $data['phone'];
                $phone = trim(substr($phone, 0, 255));
                $inbox->setPhone($phone);
            }
            if (isset($data['message'])) {
                $message = $data['message'];
                $message = trim(substr($message, 0, 255));
                $inbox->setPhone($message);
            }

            $inbox->setLocale($request->get('_locale'));
            $inbox->setIpAddress($request->getClientIp());
            $inbox->setData($data);

            $em->persist($inbox);
            $em->flush();

            return $this->redirectToRoute('message_sent');
        }

        return $this->render('message-sent.html.php', []);
    }
}
