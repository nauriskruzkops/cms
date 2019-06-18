<?php

namespace App\Controller;

use Admin\Entity\Page;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SitemapController extends AbstractController
{
    /**
     * @Route("/robots.txt", name="ADM_robots")
     * @param Request $request
     * @return Response
     */
    public function robots(Request $request)
    {
        $content = sprintf(
            "Sitemap: %s/sitemap.xml".PHP_EOL.
            "User-agent: *".PHP_EOL.
            "Disallow: ".PHP_EOL,
            $request->getSchemeAndHttpHost()
        );

        $response = new Response(
            $content,
            Response::HTTP_OK,
            ['content-type' => 'text/plain']
        );

        return $response;
    }

    /**
     * @Route("/sitemap.xml", name="ADM_sitemap")
     * @param Request $request
     * @return Response
     * @throws \Exception
     */
    public function sitemap(Request $request)
    {
        $host = $request->getSchemeAndHttpHost();
        $languages = $this->settings()->values('languages');

        $qb = $this->getDoctrine()->getManager()->createQueryBuilder();
        $qb->select('p.id, p.template, p.locale, p.slug, pa.slug as parent_slug');
        $qb->from(Page::class, 'p');
        $qb->leftJoin('p.parent', 'pa');
        $qb->where('p.public = :public')->setParameter('public', true);
        $qb->andWhere('p.deletedAt is null');
        $pages = $qb->getQuery()->getArrayResult();

        foreach ($pages as $pageKey => $page) {
            if (in_array($page['locale'], array_keys($languages))) {
                $pages[$pageKey]['full_slug'] = $page['locale'] . '/';
                $pages[$pageKey]['full_slug'] .= (!$page['parent_slug'] or $page['parent_slug'] == 'index') ? '' : $page['parent_slug'] . '/';
                $pages[$pageKey]['full_slug'] .= $page['slug'] !== 'index' ? $page['slug'] : '';
            }
        }

        $xml = '<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        foreach ($pages as $page) {
            $xml .= sprintf(
        "<url>
                    <loc>%s/%s</loc>
                    <lastmod>%s</lastmod>
                </url>",
                $host,
                $page['full_slug'],
                (new \DateTime())->format('Y-m-d')
            );
        }
        $xml .= '</urlset>';
        $response = new Response(
            $xml,
            Response::HTTP_OK,
            ['content-type' => 'application/xml']
        );

        return $response;
    }

}
