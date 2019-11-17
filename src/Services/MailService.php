<?php

namespace App\Services;

use \Swift_Mailer;

class MailService
{
    /**
     * @var SettingService
     */
    private $settings;

    /**
     * @var Swift_Mailer
     */
    private $mailer;

    /**
     * CaptchaService constructor.
     * @param SettingService $settings
     * @param Swift_Mailer $mailer
     */
    public function __construct(SettingService $settings, Swift_Mailer $mailer)
    {
        $this->settings = $settings;
        $this->mailer = $mailer;
    }

    /**
     * @param $from
     * @param $to
     * @param $subject
     * @param $text
     * @return \Swift_Message
     */
    public function message($from, $to, $subject, $text)
    {
        $message = (new \Swift_Message($subject))
            ->setFrom($from)
            ->setTo($to)
            ->setBody($text,'text/plain');

        return $message;
    }

    /**
     * @param $message
     */
    public function send($message)
    {
        $this->mailer->send($message);
    }

}