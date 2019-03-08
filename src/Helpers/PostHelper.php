<?php

namespace App\Helpers;

use App\Services\SettingService;
use Shared\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Templating\Helper\Helper;

class PostHelper extends Helper
{
    /** @var Post */
    private $post;

    /** @var PhpEngine  */
    private $view;

    /**
     * @var SettingService
     */
    private $settingService;

    /**
     * ManuHelper constructor.
     * @param PhpEngine $templating
     * @param SettingService $settingService
     */
    public function __construct(PhpEngine $templating, SettingService $settingService)
    {
        $this->view = $templating;
        $this->locale = $this->view['locale'];
        $this->settingService = $settingService;
    }

    /**
     * @param Post|null $post
     * @return $this
     */
    public function __invoke(Post $post = null)
    {
        if ($post !== null) {
            $this->post = $post;
        }
        return $this;
    }

    /**
     * @param Post|null $post
     * @return string
     */
    public function fullContent(Post $post = null)
    {
        if ($post !== null && $this->post) {
            $post = $this->post;
        }
        $text = str_replace(
            ['<p><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="mce-pagebreak" data-mce-resize="false" data-mce-placeholder=""></p>'],
            '',
            $post->getText()
        );
        return $text;
    }

    /**
     * @param Post|null $post
     * @return array
     */
    public function splittedContent(Post $post = null)
    {
        if ($post !== null && $this->post) {
            $post = $this->post;
        }
        $exploded = explode('<p><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="mce-pagebreak" data-mce-resize="false" data-mce-placeholder=""></p>', $post->getText());
        if (count($exploded) === 1) {
            $exploded = explode('<p><img class="mce-pagebreak" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-mce-resize="false" data-mce-placeholder=""></p>', $exploded[0]);
        }

        return $exploded;
    }

    /**
     * Returns the canonical name of this helper.
     *
     * @return string The canonical name
     */
    public function getName()
    {
        return 'post';
    }
}