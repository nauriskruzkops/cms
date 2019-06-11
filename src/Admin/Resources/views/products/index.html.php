<?php

use Admin\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Product[] $products
 * @var string $locale
 * @var string $listHTML
 */
$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['translator']->trans('Adm:Products') ?></h1>
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
                        <th class="col-auto">#</th>
                        <th scope="col"><?= $view['translator']->trans('Adm:Title') ?></th>
                        <th scope="col"><?= $view['translator']->trans('Adm:Template') ?></th>
                        <th scope="col">
                            <select name="locale">
                                <option>-- <?= $view['translator']->trans('Adm:Language') ?> --</option>
                                <?php foreach ($view['settings']->values('languages') as $langCode => $lang) :?>
                                    <option <?= $locale == $langCode ? 'selected' : '' ;?> value="<?= $view['router']->path('adm_page_list', ['locale' => $langCode]) ?>"><?= $lang?></option>
                                <?php endforeach;?>
                            </select>
                        </th>
                        <th scope="col"><?= $view['translator']->trans('Adm:Enabled') ?></th>
                        <th class="col-auto text-right" colspan="2" style="width: 1%">
                            <button type="button" class="btn btn-primary" style="white-space: nowrap">
                                <i class="fa fa-plus"></i>
                                <?= $view['translator']->trans('Adm:Addnew') ?>
                            </button>
                        </th>
                    </tr>
                </thead>
                <?= $view->render('AdminBundle::products/partial/list.html.php', [
                    'locale' => $locale,
                    'products' => $products,
                ]);?>
            </table>
        </div>
    </div>
</div>

