<?php

use Admin\Entity\User;
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
        <div class="white-box">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"><?= $view['translator']->trans('Adm:FullName') ?></th>
                    <th scope="col"><?= $view['translator']->trans('Adm:Email') ?></th>
                    <th scope="col"><?= $view['translator']->trans('Adm:Username') ?></th>
                    <th scope="col"><?= $view['translator']->trans('Adm:UserRole') ?></th>
                    <th scope="col"><?= $view['translator']->trans('Adm:Enabled') ?></th>
                    <th scope="col"> </th>
                </tr>
                </thead>
                <tbody>
                    <?php foreach ($users as $user) :?>
                        <tr>
                            <td><?= $user->getId()?></td>
                            <td>
                                <a href="<?= $view['router']->path('adm_user', ['id' => $user->getId()]) ?>"><?= $this->escape($user->getFullName())?></a>
                            </td>
                            <td>
                                <?= $this->escape($user->getEmail())?>
                            </td>
                            <td>
                                <?= $this->escape($user->getUsername())?>
                            </td>
                            <td>
                                <?= implode(', ', $user->getRoles())?>
                            </td>
                            <td>
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

