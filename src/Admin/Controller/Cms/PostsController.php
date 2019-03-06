<?php

namespace Admin\Controller\Cms;

use Admin\Form\PostForm;
use Admin\Service\PostManageService;
use Shared\Entity\Post;
use Shared\Repository\PostRepository;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PostsController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/posts", name="adm_post_list")
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
     * @Route("/post/add", name="adm_post_add")
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
     * @Route("/post/{id}/edit", name="adm_post_edit")
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
     * @Route("/post/{id}/delete", name="adm_post_delete")
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
     * @Route("/post/{id}/raw", name="adm_post_raw")
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
     * @Route("/post/templates", name="adm_post_templates")
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Admin\Exception\Exception
     */
    public function postTemplatesAction()
    {
        $themeConfig = $this->settings()->theme();
        $templates = [];
        foreach ($themeConfig['page_templates_all'] ?? [] as $template) {
            $templates[] = array_merge($template, ["content" => $this->render($template['content'], [])->getContent()]);
        }
        return $this->json($templates);
    }
}
