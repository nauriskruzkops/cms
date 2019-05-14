<?php
namespace App\Services;

use App\Exception\ContentNotFoundException;
use Doctrine\ORM\EntityManager;
use Admin\Entity\MenuItems;
use Admin\Entity\Page;
use Admin\Repository\PageRepository;
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

        /** @var MenuItems $menuItem */
        $menuItem = unserialize($request->get('_menuItem'));

        if (empty($route)) {
            $route = 'index'; // Default route
        }

        if ($menuItem && $menuItem->getRelations()) {
            foreach ($menuItem->getRelations() as $relation) {
                /** @var PageRepository $repository */
                $repository = $this->em->getRepository($relation->getObjectClass());
                $content = $repository->find($relation->getObjectId());
                break;
            }
        } else {
            $repository = $this->em->getRepository(MenuItems::class);
            $qb = $repository->createQueryBuilder('mi');
            $qb->select(['mi', 'p'])
                ->join('mi.menu', 'm')
                ->join('mi.relations', 'r')
                ->join(
                    Page::class,
                    'p',
                    \Doctrine\ORM\Query\Expr\Join::WITH,
                    'p.id = r.objectId'
                )
                ->where($qb->expr()->eq('mi.slug', ':slug'))
                    ->setParameter('slug', $route)
                ->andWhere($qb->expr()->eq('m.locale', ':locale'))
                    ->setParameter('locale', $locale)
                ;
            $query = $qb->getQuery();
            $result = $query->getResult();
            if ($result) {
                $content = $result[1];
                $menuItem = $result[0];
            }
        }

        if ($menuItem) {
            return [
                'content' => $content ?? null,
                'menuItem' => $menuItem,
            ];
        }

        if ($menuItem) {
            return [
                'content' => $content ?? null,
                'menuItem' => $menuItem,
            ];
        }

        $content = $this->getSimplePageBySlug($locale, $route);
        if (!$content && !empty($request->get('slug'))) {
            $content = $this->getSimplePageBySlug($locale, $request->get('slug'));
        }

        if ($content) {
            return [
                'content' => $content ?? null,
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