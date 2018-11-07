<?php

namespace Admin\Controller\Cms;

use Admin\Form\PostForm;
use Shared\Entity\Post;
use Shared\Repository\PostRepository;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/admin/pages", name="adm_page_list")
     */
    public function index(Request $request)
    {
        return $this->render('AdminBundle::pages/index.html.php', []);
    }
}
