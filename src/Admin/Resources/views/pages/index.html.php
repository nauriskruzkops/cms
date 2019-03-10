<?php

use Admin\Entity\Page;
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
            <?= $view->render('AdminBundle::pages/partial/list.html.php', [
                'locale' => $locale,
                'pages' => $pages,
            ]);?>
        </div>
    </div>
</div>

