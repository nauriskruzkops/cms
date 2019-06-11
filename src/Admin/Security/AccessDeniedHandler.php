<?php

namespace Admin\Security;

use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;

class AccessDeniedHandler implements AccessDeniedHandlerInterface
{
    /** @var PhpEngine  */
    protected $templating;

    public function __construct(PhpEngine $templating)
    {
        $this->templating = $templating;
    }

    /**
     * @param Request $request
     * @param AccessDeniedException $accessDeniedException
     * @return Response
     */
    public function handle(Request $request, AccessDeniedException $accessDeniedException)
    {
        $content = $this->templating->render('AdminBundle::layout/denied.html.php', ['exception' => $accessDeniedException]);

        $response = new Response();
        $response->setContent($content);
        $response->setStatusCode($accessDeniedException->getCode());
        return $response;
    }
}