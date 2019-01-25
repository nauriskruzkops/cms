<?php

namespace Shared\EventListener;

use Symfony\Bundle\FrameworkBundle\Templating\TimedPhpEngine;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class ExceptionListener
{
    /** @var TimedPhpEngine  */
    private $view;

    /**
     * ExceptionListener constructor.
     * @param TimedPhpEngine $view
     */
    public function __construct(TimedPhpEngine $view)
    {
        $this->view = $view;
    }

    public function onKernelException(GetResponseForExceptionEvent $event)
    {
        $exception = $event->getException();
        $response = new Response();

        if ($exception instanceof HttpExceptionInterface) {
            $response->setStatusCode($exception->getStatusCode());
            $response->headers->replace($exception->getHeaders());
            $response->setContent(
                $this->view->render('error4xx.html.php', ['exception' => $exception])
            );
        } else {
            $response->setStatusCode(Response::HTTP_INTERNAL_SERVER_ERROR);
            $response->setContent(
                $this->view->render('error.html.php', ['exception' => $exception])
            );
        }

        $event->setResponse($response);
    }
}