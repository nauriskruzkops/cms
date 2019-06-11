<?php

namespace Admin\Controller\Products;

use Admin\Entity\Product;
use Admin\Repository\PageRepository;
use Admin\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends \Admin\Controller\AbstractController
{
    /**
     * @Route("/products", name="adm_products")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $locale = (string) $request->query->get('locale', $this->settings()->value('language'));

        /** @var ProductRepository $repository */
        $repository = $this->getDoctrine()->getManager()->getRepository(Product::class);

        return $this->render('AdminBundle::products/index.html.php', [
            'products' => $repository->findAll(),
            'locale' => $locale,
        ]);
    }
}
