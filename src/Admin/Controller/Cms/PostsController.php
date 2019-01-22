<?php

namespace Admin\Controller\Cms;

use Admin\Form\PostForm;
use Admin\Service\FileUploader;
use Admin\Service\PostManageService;
use Shared\Entity\Post;
use Shared\Repository\PostRepository;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PostsController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/admin/posts", name="adm_post_list")
     */
    public function index(Request $request)
    {
        $listHtml = $this->processList($request);

        return $this->render('AdminBundle::post/index.html.php', [
            'listHtml' => $listHtml->getContent(),
        ]);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function processList(Request $request)
    {
        $em = $this->getDoctrine();
        $page = 1;
        $limit = 20;

        /** @var PostRepository $postRepo */
        $postRepo = $em->getRepository(Post::class);
        $posts = $postRepo->findBy(['isPartOf' => false]);

        return $this->render('AdminBundle::post/partial/list.html.php', [
            'posts' => $posts,
            'page' => $page,
        ]);
    }

    /**
     * @Route("/admin/post/add", name="adm_post_add")
     * @param Request $request
     * @param PostManageService $postManageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request, PostManageService $postManageService)
    {
        $post = new Post();

        return $this->processForm($request, $post, 'adm_post_add', $postManageService);
    }

    /**
     * @Route("/admin/post/{id}/edit", name="adm_post_edit")
     * @param Request $request
     * @param PostManageService $postManageService
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request, PostManageService $postManageService)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var PostRepository $postRepo */
        $postRepo = $em->getRepository(Post::class);

        /** @var Post $post */
        $post = $postRepo->find($request->get('id'));

        return $this->processForm($request, $post, 'adm_post_edit', $postManageService);
    }

    /**
     * @Route("/admin/post/{id}/delete", name="adm_post_delete")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function delete(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var PostRepository $postRepo */
        $postRepo = $em->getRepository(Post::class);

        /** @var Post $post */
        $post = $postRepo->find($request->get('id'));
        $em->remove($post);
        $em->flush();

        return $this->redirectToRoute('adm_post_list');
    }

    /**
     * @param Request $request
     * @param Post $post
     * @param $route_name
     * @param PostManageService $postManageService
     * @return array|Response
     */
    private function processForm(Request $request, Post $post, $route_name, PostManageService $postManageService)
    {
        /** @var Form $form */
        $form = $this->createForm(PostForm::class, $post, [
            'action' => $this->generateUrl($route_name, ['id' => $post->getId()]),
            'method' => 'POST',
        ]);

        if ($request->request->get('delete_post', false) !== false) {
            return $this->delete($request);
        }

        $form->handleRequest($request);
        $formError = false;

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                try {
                    $post = $postManageService->savePost($form, $request);
                    $this->addFlash('info', 'Cool, post saved!');
                    return $this->redirectToRoute(
                        $request->get('btn_save_exit', 1) === 1 ? 'adm_post_edit' :'adm_post_list',
                        ['id' => $post->getId()]);

                } catch (\Exception $e) {
                    $this->addFlash('error', $e->getMessage());
                    return $this->redirectToRoute($route_name, ['id' => $post->getId()]);
                }
            } else {
                $formError = $form->getErrors();
            }
        }

        return $this->render('AdminBundle::post/manage.html.php', [
            'post' => $post,
            'form' => $form,
            'formError' => $formError,
        ]);
    }

    /**
     * @Route("/admin/post/{id}/raw", name="adm_post_raw")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function iframe(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        /** @var PostRepository $pageRepo */
        $postRepo = $em->getRepository(Post::class);
        /** @var Post $post */
        $post = $postRepo->find($request->get('id'));

        return $this->render('AdminBundle::post/partial/iframe.html.php', [
            'content' => $post ? $post->getText() : ''
        ]);
    }

    /**
     * @Route("/admin/post/templates", name="adm_post_templates")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function postTemplatesAction()
    {
        $templates[] = [
            "title" => "Simple section",
            "description" => "Simple section",
            "content" => $this->render('theme/templates/simple-section-white.html.php', [])->getContent()
        ];

        $templates[] = [
            "title" => "Simple section",
            "description" => "Simple section",
            "content" => $this->render('theme/templates/simple-section-grey.html.php', [])->getContent()
        ];

        $templates[] = [
            "title" => "Simple page",
            "description" => "Simple page",
            "content" => $this->render('theme/templates/simple-page.html.php', [])->getContent()
        ];


        $templates[] = [
            "title" => "Company Overview",
            "description" => "Company Overview",
            "content" => $this->render('theme/templates/company-overview.html.php', [])->getContent()
        ];

        $templates[] = [
            "title" => "Approach section",
            "description" => "Approach section",
            "content" => $this->render('theme/templates/approach-section.html.php', [])->getContent()
        ];

        $templates[] = [
            "title" => "Service section #1",
            "description" => "Service page #1",
            "content" => $this->render('theme/templates/services-section-1.html.php', [])->getContent()
        ];

        $templates[] = [
            "title" => "Service section #2",
            "description" => "Service page #2",
            "content" => $this->render('theme/templates/services-section-2.html.php', [])->getContent()
        ];

        $templates[] = [
            "title" => "Service page #1",
            "description" => "Service page #1",
            "content" => $this->render('theme/templates/service-page-1.html.php', [])->getContent()
        ];

        $templates[] = [
            "title" => "Service page #2",
            "description" => "Service page #1",
            "content" => $this->render('theme/templates/service-page-2.html.php', [])->getContent()
        ];

        $templates[] = [
            "title" => "Contact page",
            "description" => "Contact page",
            "content" => $this->render('theme/templates/contact-page.html.php', [])->getContent()
        ];



        return $this->json($templates);
    }
}
