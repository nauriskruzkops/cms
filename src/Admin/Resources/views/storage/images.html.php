<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Shared\Entity\Storage[] $images
 */
$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['translator']->trans('Adm:Storage') ?></h1>
        </div>
        <div class="col-6 text-right">
            ...
        </div>
    </div>
</div>

<div id="storage" class="row">
    <div class="col-sm-8">
        <div class="white-box">
            <div class="row">
                <div class="col">
                    ...
                </div>
                <div class="col text-right">
                    <button class="btn btn-primary" data-action="start-select">
                        <?= $view['translator']->trans('Adm:Select') ?>
                    </button>

                    <button class="btn btn-primary" data-action="unselect-all">
                        <?= $view['translator']->trans('Adm:UnselectAll') ?> (<span data-target="total-selected">0</span>)
                    </button>
                </div>
            </div>
            <div class="row storage-images">
               <?= $listHTML?>
            </div>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="row storage-image">
            <div id="scroller-anchor"></div>
            <div class="image-preview"></div>
            <div class="image-options"></div>
        </div>
    </div>
</div>

