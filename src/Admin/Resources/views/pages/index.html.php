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
                <a class="nav-link"><?= $view['translator']->trans('Adm:Language') ?>:</a>
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
                    <?php
                        $html = '';
                        function nestedTreeRow($pages, &$html='', $view) // added pass by reference
                        {
                            foreach($pages as $key => $node)
                            {
                                $html .= '
                                    <tr>
                                        <td>'.$node['id'].'</td>'.
                                        '<td>'.str_repeat('-- ', $node['level']).'<a href="'.$view['router']->path('adm_page_edit', ['id' => $node['id']]).'">'.$node['title'].'</a></td>'.
                                        '<td>'.ucfirst($node['template']).'</td>'.
                                        '<td>'.($node['public'] ? $view['translator']->trans('Adm:Yes') : $view['translator']->trans('Adm:No')).'</td>'.
                                        '<td><a class="btn btn-default" href="'.$view['router']->path('adm_page_edit', ['id' => $node['id']]).'">'.$view['translator']->trans('Adm:edit').'</a></td>'.
                                        '<td>
                                            <a class="btn btn-xs btn-primary small" href="'.$view['router']->path('adm_page_move', ['id' => $node['id'], 'direction' => 'up']).'">'.$view['translator']->trans('Adm:MoveUp').'</a>
                                            <a class="btn btn-xs btn-secondary small" href="'.$view['router']->path('adm_page_move', ['id' => $node['id'], 'direction' => 'down']).'">'.$view['translator']->trans('Adm:MoveDown').'</a>
                                         </td>'.
                                    '</tr>';
                                if ($node['__children'] ?? false) {
                                    nestedTreeRow($node['__children'], $html, $view);
                                }
                            }
                            return $html;
                        }
                    ?>
                <tbody>
                <?= nestedTreeRow($pages, $html, $view)?>
                </tbody>
            </table>
        </div>
    </div>
</div>

