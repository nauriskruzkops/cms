<?php

namespace App\Services;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpClient\HttpClient as Client;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class CaptchaService
{

    /**
     * @var RequestStack
     */
    private $request;

    /**
     * @var string
     */
    private $tokenField = 'captcha_token_src';

    /**
     * @var string
     */
    private $reCaptchaSecretToken;

    /**
     * @var array
     */
    private $result;

    /**
     * CaptchaService constructor.
     * @param ContainerInterface $container
     * @param RequestStack $request
     */
    public function __construct(ContainerInterface $container, RequestStack $request)
    {
        $this->request = $request->getCurrentRequest();
        $this->reCaptchaSecretToken = $container->getParameter('re_captcha_secret_token');
    }

    /**
     * @return bool
     */
    public function isValid()
    {
        if ($this->request->getMethod() == 'POST') {
            $token = $this->request->get($this->tokenField);
            return $this->checkWithRecaptcha($token);
        }

        return false;
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Request|RequestStack|null
     */
    public function getResult()
    {
        return $this->request;
    }

    /**
     * @param $token
     * @return bool
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     */
    private function checkWithRecaptcha($token)
    {
        try {
            $httpClient = Client::create();
            $response = $httpClient->request(
                'POST',
                'https://www.google.com/recaptcha/api/siteverify', [
                    'body' => [
                        'secret' => $this->reCaptchaSecretToken,
                        'response' => $token,
                        'remoteip' => $this->request->getClientIp(),

                    ]]
            );

            $statusCode = $response->getStatusCode();
            if ($statusCode === 200) {
                $this->request = $response->toArray();
                return $this->request['success'] ?? false;
            }
        } catch (TransportExceptionInterface $e) {
            return false;
        }
    }
}