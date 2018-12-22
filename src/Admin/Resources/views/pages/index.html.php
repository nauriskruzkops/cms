<?php

use Shared\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page[] $pages
 * @var string $locale
 */
$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1>Pages</h1>
        </div>
        <div class="col-6 text-right">
            <div class="btn-group" role="group">
                <div class="btn-group" role="group">
                    <button id="btnGroupAddNew" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <?= $view['translator']->trans('Adm:Addnew') ?>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupAddNew">
                        <?php foreach (Page::TEMPLATES as $template) :?>
                        <a class="dropdown-item" href="<?= $view['router']->path('adm_page_add', ['template' => $template]) ?>"><?= $template?></a>
                        <?php endforeach;?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">

        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link"><?= $view['translator']->trans('Adm:Language') ?></a>
            </li>
            <?php foreach ($view['settings']->values('languages') as $langCode => $lang) :?>
                <?php $activeLang = $locale == $langCode ? 'active' : '' ;?>
                <li class="nav-item">
                    <a class="nav-link <?= $activeLang?>" href="<?= $view['router']->path('adm_page_list', ['locale' => $langCode]) ?>"><?= $lang?></a>
                </li>
            <?php endforeach;?>
        </ul>

        <div class="white-box">
            <table class="table">
                <thead>
                <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 60%"><?= $view['translator']->trans('Adm:Title') ?></th>
                    <th><?= $view['translator']->trans('Adm:Template') ?></th>
                    <th><?= $view['translator']->trans('Adm:Enabled') ?></th>
                    <th colspan="2" style="width: 1%"> </th>
                </tr>
                </thead>
                <tbody>
                    <?php foreach ($pages as $page) :?>
                        <tr>
                            <td><?= $page->getId()?></td>
                            <td>
                                <?= str_repeat('-- ', $page->getLevel())?>
                                <a href="<?= $view['router']->path('adm_page_edit', ['id' => $page->getId()]) ?>"><?= $this->escape($page->getTitle())?></a>
                                <p class="small text-muted" style="margin-left: <?= $page->getLevel()*20?>px"><?= $this->escape($page->getSlug())?></p>
                            </td>
                            <td class="text-center">
                                <?= ucfirst($this->escape($page->getTemplate()))?>
                            </td>
                            <td class="text-center">
                                <?= $page->isPublic() ? $view['translator']->trans('Adm:Yes') : $view['translator']->trans('Adm:No')?>
                            </td>
                            <td>
                                <a class="btn btn-sm btn-default" href="<?= $view['router']->path('adm_page_edit', ['id' => $page->getId()]) ?>"><?= $view['translator']->trans('Adm:edit') ?></a>
                            </td>
                            <td class="small">
                                <a class="btn btn-sm btn-link" href="#"><?= $view['translator']->trans('Adm:MoveUp') ?></a>
                                <a class="btn btn-sm btn-link" href="#"><?= $view['translator']->trans('Adm:MoveDown') ?></a>
                            </td>
                        </tr>
                    <?php endforeach;?>
                </tbody>
            </table>
        </div>
    </div>
</div>

