<?php

use Shared\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Shared\Entity\Post[] $posts
 * @var integer $page
 */

?>
<table class="table">
    <thead>
        <tr>
            <th style="width: 5%">#</th>
            <th style="width: 40%"><?= $view['translator']->trans('Adm:Title') ?></th>
            <th><?= $view['translator']->trans('Adm:Categories') ?></th>
            <th><?= $view['translator']->trans('Adm:Image') ?></th>
            <th> </th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($posts as $post) :?>
            <tr>
                <td><?= $post->getId()?></td>
                <td>
                    <a href="<?= $view['router']->path('adm_post_edit', ['id' => $post->getId()]) ?>"><?= $this->escape($post->getTitle())?></a>
                    <p class="small text-muted"><?=$this->escape($post->getSlag())?></p>
                </td>
                <td><?php
                    $categories = [];
                    $post->getCategories()->filter(function (Category $category) use (&$categories){
                        $categories[] = $category->getTitle();
                    });
                    echo implode(', ',$categories);
                    ?>
                </td>
                <td><?= $post->getImage() ? $view['translator']->trans('Adm:Yes') : $view['translator']->trans('Adm:No') ?></td>
                <td>
                    <a class="btn btn-sm btn-default" href="<?= $view['router']->path('adm_post_edit', ['id' => $post->getId()]) ?>"><?= $view['translator']->trans('Adm:edit') ?></a>
                </td>
            </tr>
        <?php endforeach;?>
    </tbody>

</table>
