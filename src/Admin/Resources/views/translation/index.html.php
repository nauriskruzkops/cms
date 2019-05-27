<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Admin\Entity\Translation[] $translations
 * @var string $locale
 * @var string $listHTML
 */
$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['translator']->trans('Adm:Translation') ?></h1>
        </div>
        <div class="col-6 text-right">
            ...
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <div class="white-box">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"><?= $view['translator']->trans('Adm:TranslationKey') ?></th>
                        <th scope="col">EN</th>
                        <th scope="col">LV</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <?= $view->render('AdminBundle::translation/partial/list.html.php', [
                    'translations' => $translations,
                ]);?>
            </table>
        </div>
    </div>
</div>

