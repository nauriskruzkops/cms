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
            <h1>Menu</h1>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-default" href="<?= $view['router']->path('adm_menu_add') ?>">Add new</a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="white-box">
            <table class="table">
                <thead>
                <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 70%"><?= $view['translator']->trans('Adm:Title') ?></th>
                    <th style="width: 10%"><?= $view['translator']->trans('Adm:MenuItemsCount') ?></th>
                    <th style="width: 10%"><?= $view['translator']->trans('Adm:Locale') ?></th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                    <?php foreach ($menus ?? [] as $menu) :?>
                        <tr>
                            <td><?= $menu->getId()?></td>
                            <td>
                                <a href="<?= $view['router']->path('adm_menu_edit', ['id' => $menu->getId()]) ?>"><?= $this->escape($menu->getTitle())?></a>
                                <p class="small text-muted"><?=$this->escape($menu->getCode())?></p>
                            </td>
                            <td><?= $this->escape($menu->getItems()->count())?></td>
                            <td><?= $this->escape($menu->getLocale())?></td>
                            <td>
                                <a class="btn btn-sm btn-default" href="<?= $view['router']->path('adm_menu_edit', ['id' => $menu->getId()]) ?>"><?= $view['translator']->trans('Adm:edit') ?></a>
                            </td>
                        </tr>
                    <?php endforeach;?>
                </tbody>
            </table>
        </div>
    </div>
</div>

