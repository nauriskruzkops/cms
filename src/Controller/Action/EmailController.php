<?php

namespace App\Controller\Action;

use Admin\Entity\Inbox;
use App\Controller\AbstractController;
use App\Services\MailService;
use App\Services\SettingService;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EmailController extends AbstractController
{
    /**
     * @Route("/{_locale}/action/message-sent", name="message_sent")
     * @param Request $request
     * @param MailService $mailService
     * @return RedirectResponse|Response
     */
    public function index(Request $request, MailService $mailService, SettingService $settings)
    {
        if ($request->isMethod('POST')) {
            if (!$this->captcha()->isValid()) {
                throw $this->createNotFoundException();
            }

            $em = $this->getDoctrine()->getManager();
            $data = $request->request->all();

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
                $message = trim(substr($message, 0, 2000));
                $inbox->setMessage($message);
            }

            $inbox->setLocale($request->get('_locale'));
            $inbox->setIpAddress($request->getClientIp());
            $inbox->setData($data);

            $em->persist($inbox);
            $em->flush();

            $sendTo = $settings->value('mail_recive_inbox');
            if (!empty($sendTo)) {
                $mailMessage =
                    sprintf(PHP_EOL."%s".PHP_EOL, $request->getSchemeAndHttpHost()) .
                    sprintf("Ziņa no:".PHP_EOL) .
                    sprintf("   - e-pasts: %s".PHP_EOL, $email ?? '') .
                    sprintf("   - vārds: %s".PHP_EOL, $sender ?? '') .
                    sprintf("   - tālr.: %s".PHP_EOL, $phone ?? '') .
                    sprintf("".PHP_EOL).
                    sprintf("-----------------------------------------".PHP_EOL).
                    sprintf("%s".PHP_EOL, $message).
                    sprintf("-----------------------------------------".PHP_EOL).
                    sprintf("".PHP_EOL)
                 ;

                $subject = sprintf("No: %s", $request->getSchemeAndHttpHost());
                $message = $mailService->message('info@vitbuve.lv', 'info@vitbuve.lv', $subject, $mailMessage);
                $mailService->send($message);
            }

            return $this->redirectToRoute('message_sent');
        }

        return $this->render('message-sent.html.php', []);
    }
}
