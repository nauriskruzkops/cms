<?php

namespace Admin\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * @ORM\Entity(repositoryClass="Admin\Repository\PageBlocksRepository")
 * @ORM\Table(name="page_blocks")
 */
class PageBlocks {

    use Traits\Traceability;

    const TYPE_POST = 'post';
    const TYPE_LIST = 'list';
    const TYPE_IMAGES = 'images';
    const TYPE_SLIDER = 'slider';

    const TYPES = [
      self::TYPE_POST,
      self::TYPE_LIST,
      self::TYPE_IMAGES,
      self::TYPE_SLIDER,
    ];

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity="\Admin\Entity\Page", inversedBy="settings", cascade={"persist"})
     * @ORM\JoinColumn(name="page_id", referencedColumnName="id", onDelete="SET NULL")
     */
    private $page;

    /**
     * @ORM\OneToOne(targetEntity="\Admin\Entity\Post", cascade={"persist","remove"})
     * @ORM\JoinColumn(name="post_id", referencedColumnName="id", onDelete="SET NULL")
     */
    private $post;

    /**
     * Gedmo\Sortable(groups={"page"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $sort;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @var array
     * @ORM\Column(type="array", nullable=true)
     */
    private $list;

    /**
     * @var array
     * @ORM\Column(type="array", nullable=true)
     */
    private $config;

    /**
     * @ORM\Column(type="boolean", options={"default":0})
     */
    private $isPublic;

    /**
     * PageBlocks constructor.
     */
    public function __construct()
    {
        $this->type = self::TYPE_POST;
        $this->isPublic = false;
        $this->config = $this->configDefaults();
    }

    public function configDefaults()
    {
        return [
            0 => [
                'description' => null,
                'bg_color' => '#FFFFFF',
                'bg_transparent' => true,
                'bg_image' => null,
            ],
        ];
    }

    public function __toString()
    {
        if (!empty($this->getTitle())) {
            return $this->getTitle();
        }

        return (string) $this->getId();
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     * @return PageBlocks
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Page
     */
    public function getPage()
    {
        return $this->page;
    }

    /**
     * @param Page $page
     * @return PageBlocks
     */
    public function setPage(Page $page = null)
    {
        $this->page = $page;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getSort()
    {
        return $this->sort;
    }

    /**
     * @param mixed $sort
     * @return PageBlocks
     */
    public function setSort($sort)
    {
        $this->sort = $sort;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     * @return PageBlocks
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return Post
     */
    public function getPost()
    {
        return $this->post;
    }

    /**
     * @param Post $post
     * @return PageBlocks
     */
    public function setPost($post)
    {
        $this->post = $post;

        return $this;
    }

    /**
     * @return mixed
     */
    public function isPublic()
    {
        return $this->isPublic;
    }

    /**
     * @param mixed $isPublic
     * @return PageBlocks
     */
    public function setIsPublic($isPublic)
    {
        $this->isPublic = $isPublic;

        return $this;
    }

    /**
     * @return array
     */
    public function getList():? array
    {
        return $this->list;
    }

    /**
     * @param array $list
     * @return PageBlocks
     */
    public function setList(array $list): PageBlocks
    {
        $this->list = $list;

        return $this;
    }

    /**
     * @return array
     */
    public function getConfig():? array
    {
        $config = $this->config;
        if (!empty($config)) {
            return $config;
        }
        return $this->configDefaults();
    }

    /**
     * @param array $config
     * @return PageBlocks
     */
    public function setConfig(array $config = []): PageBlocks
    {
        $this->config = $config;

        return $this;
    }

}