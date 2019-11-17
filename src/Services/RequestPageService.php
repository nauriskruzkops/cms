<?php
namespace App\Services;

use App\Exception\ContentNotFoundException;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use Admin\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\HttpFoundation\RequestStack;

class RequestPageService
{
    /**
     * @var EntityManager
     */
    private $em;

    /** @var Router */
    protected $router;

    /** @var RequestStack */
    private $requestStack;

    /**
     * ManuHelper constructor.
     * @param EntityManager $em
     * @param Router $router
     * @param RequestStack $requestStack
     */
    public function __construct(EntityManager $em,  Router $router, RequestStack $requestStack)
    {
        $this->router = $router;
        $this->em = $em;
        $this->requestStack = $requestStack;
    }

    /**
     * @throws ContentNotFoundException
     */
    public function get()
    {
        $request = $this->requestStack->getMasterRequest();

        $route = $request->get('_route');
        $locale = $request->get('_locale');
        if ($locale === null) {
            $locale = $this->requestStack->getCurrentRequest()->getLocale();
        }

        $slugTree = explode('/', $request->get('slug', 'index'));
        if ($slugTree[0] == 'root') {
            $slugTree[0] = 'index';
        }

        $pageRepository = $this->em->getRepository(Page::class);
        $pages = $pageRepository->findBy([
            'slug' => end($slugTree),
            'locale' => $locale,
        ]);

        /** @var Page[]|ArrayCollection $pages */
        $pages = new ArrayCollection($pages);
        /** @var Page $page */
        $page = $pages->filter(function (Page $page) use ($slugTree) {
            if (!$page->getParent()) {
                return $page;
            }
            $prev = $slugTree[count($slugTree)-2] ?? null;
            if ($prev && ($page->getParent()->getSlug() == $prev) || $page->getParent()->getSlug() === 'index') {
                return $page;
            }
        })->first();

        if ($page) {
            return [
                'page' => $page,
                'menuItem' => null,
            ];
        }

        throw new ContentNotFoundException();
    }

    /**
     * @return mixed
     */
    public function getSimplePageBySlug($locale, $slug)
    {
        $repository = $this->em->getRepository(Page::class);
        $qb = $repository->createQueryBuilder('p');
        $qb = $qb->select('p')
            ->where($qb->expr()->eq('p.slug', ':slug'))
            ->setParameter('slug', $slug)
            ->andWhere($qb->expr()->eq('p.locale', ':locale'))
            ->setParameter('locale', $locale)
        ;
        $query = $qb->getQuery();
        $result = $query->getResult();

        if ($result) {
            return reset($result);
        }
    }
}