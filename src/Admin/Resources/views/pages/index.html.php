<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var string $listHtml
 */
$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1>Pages</h1>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-default" href="<?= $view['router']->path('adm_post_add') ?>">Add new</a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <div class="white-box">
            <table class="table">
                <thead>
                <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 90%">Title</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                    <?php foreach ([] as $post) :?>
                        <tr>
                            <td><?= $post->getId()?></td>
                            <td>
                                <a href="<?= $view['router']->path('adm_post_edit', ['id' => $post->getId()]) ?>"><?= $this->escape($post->getTitle())?></a>
                                <p class="small text-muted"><?=$this->escape($post->getSlag())?></p>
                            </td>
                            <td>
                                <a class="btn btn-sm btn-default" href="<?= $view['router']->path('adm_post_edit', ['id' => $post->getId()]) ?>"><?= $view['translator']->trans('Adm:edit') ?></a>
                            </td>
                        </tr>
                    <?php endforeach;?>
                </tbody>
            </table>
        </div>
    </div>
</div>

