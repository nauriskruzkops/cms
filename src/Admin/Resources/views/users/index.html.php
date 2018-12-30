<?php

use Shared\Entity\User;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var User[] $users
 * @var string $locale
 */
$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['translator']->trans('Adm:Users') ?></h1>
        </div>
        <div class="col-6 text-right">
            <a href="<?= $view['router']->path('adm_user_add') ?>" class="btn btn-secondary"><?= $view['translator']->trans('Adm:Addnew') ?></a>
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
                    <a class="nav-link <?= $activeLang?>" href="<?= $view['router']->path('adm_users') ?>"><?= $lang?></a>
                </li>
            <?php endforeach;?>
        </ul>

        <div class="white-box">
            <table class="table">
                <thead>
                <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 60%"><?= $view['translator']->trans('Adm:FullName') ?></th>
                    <th><?= $view['translator']->trans('Adm:Email') ?></th>
                    <th><?= $view['translator']->trans('Adm:Username') ?></th>
                    <th><?= $view['translator']->trans('Adm:Enabled') ?></th>
                    <th style="width: 1%"> </th>
                </tr>
                </thead>
                <tbody>
                    <?php foreach ($users as $user) :?>
                        <tr>
                            <td><?= $user->getId()?></td>
                            <td>
                                <a href="<?= $view['router']->path('adm_user', ['id' => $user->getId()]) ?>"><?= $this->escape($user->getFullName())?></a>
                            </td>
                            <td class="text-center">
                                <?= $this->escape($user->getEmail())?>
                            </td>
                            <td class="text-center">
                                <?= $this->escape($user->getUsername())?>
                            </td>
                            <td class="text-center">
                                <?= $user->isEnabled() ? $view['translator']->trans('Adm:Yes') : $view['translator']->trans('Adm:No')?>
                            </td>
                            <td>
                                <a class="btn btn-sm btn-default" href="<?= $view['router']->path('adm_user', ['id' => $user->getId()]) ?>"><?= $view['translator']->trans('Adm:edit') ?></a>
                            </td>
                        </tr>
                    <?php endforeach;?>
                </tbody>
            </table>
        </div>
    </div>
</div>

