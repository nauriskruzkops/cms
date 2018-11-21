<?php
namespace App\Services;

use App\Exception\ContentNotFoundException;
use Doctrine\ORM\EntityManager;
use Shared\Entity\MenuItems;
use Shared\Entity\Page;
use Shared\Repository\PageRepository;
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

        /** @var PageRepository $repository */
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

            ->andWhere($qb->expr()->eq('mi.enabled', ':enabled'))
            ->setParameter('enabled', true)
        ;
        $query = $qb->getQuery();
        $result = $query->getResult();

        if ($result and count($result) > 0) {
            return [
                'content' => $result[0],
                'menuItem' => $result[1],
            ];
        }

        throw new ContentNotFoundException();
    }

}