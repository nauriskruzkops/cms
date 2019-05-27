<?php

use Admin\Entity\Inbox;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Inbox[] $messages
 * @var string $locale
 * @var string $listHTML
 */
$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['translator']->trans('Adm:Inbox') ?></h1>
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
                        <th scope="col"><?= $view['translator']->trans('Adm:Sender') ?></th>
                        <th scope="col"><?= $view['translator']->trans('Adm:Email/Phone') ?></th>
                        <th scope="col"><?= $view['translator']->trans('Adm:Message') ?></th>
                    </tr>
                </thead>
                <?= $view->render('AdminBundle::inbox/partial/list.html.php', [
                    'locale' => $locale,
                    'messages' => $messages,
                ]);?>
            </table>
        </div>
    </div>
</div>

