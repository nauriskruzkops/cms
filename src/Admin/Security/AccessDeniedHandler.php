<?php

namespace Admin\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;

class AccessDeniedHandler implements AccessDeniedHandlerInterface
{
    /**
     * @param Request $request
     * @param AccessDeniedException $accessDeniedException
     * @return \Symfony\Component\HttpFoundation\Response|void
     * @throws \Admin\Exception\AccessDeniedException
     */
    public function handle(Request $request, AccessDeniedException $accessDeniedException)
    {
        throw $accessDeniedException;
    }
}