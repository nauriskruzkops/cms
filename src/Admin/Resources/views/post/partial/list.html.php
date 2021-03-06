<?php

use Admin\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Admin\Entity\Post[] $posts
 * @var integer $page
 */

?>
<table class="table">
    <thead>
        <tr>
            <th class="col-auto">#</th>
            <th class="col"><?= $view['translator']->trans('Adm:Title') ?></th>
            <th class="col"><?= $view['translator']->trans('Adm:Categories') ?></th>
            <th class="col"><?= $view['translator']->trans('Adm:Image') ?></th>
            <th class="col text-right" style="white-space: nowrap">
                <a class="btn btn-primary" href="<?= $view['router']->path('adm_post_add') ?>">
                    <i class="fa fa-plus"></i>
                    <?= $view['translator']->trans('Adm:AddNew') ?>
                </a>
            </th>
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
                <td>
                    <?= $post->getImage() ? $view['translator']->trans('Adm:Yes') : $view['translator']->trans('Adm:No') ?>
                </td>
                <td class="text-center">
                    <a class="btn btn-sm btn-outline-success" href="<?= $view['router']->path('adm_post_edit', ['id' => $post->getId()]) ?>"><?= $view['translator']->trans('Adm:edit') ?></a>
                </td>
            </tr>
        <?php endforeach;?>
    </tbody>

</table>
