<?php

use Shared\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page[] $pages
 */
$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1>Pages</h1>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-default" href="<?= $view['router']->path('adm_page_add') ?>"><?= $view['translator']->trans('Adm:Addnew') ?></a>
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
                    <th style="width: 90%"><?= $view['translator']->trans('Adm:Title') ?></th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                    <?php foreach ($pages as $page) :?>
                        <tr>
                            <td><?= $page->getId()?></td>
                            <td>
                                <a href="<?= $view['router']->path('adm_page_edit', ['id' => $page->getId()]) ?>"><?= $this->escape($page->getTitle())?></a>
                            </td>
                            <td>
                                <a class="btn btn-sm btn-default" href="<?= $view['router']->path('adm_page_edit', ['id' => $page->getId()]) ?>"><?= $view['translator']->trans('Adm:edit') ?></a>
                            </td>
                        </tr>
                    <?php endforeach;?>
                </tbody>
            </table>
        </div>
    </div>
</div>

