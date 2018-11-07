<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 */
$view->extend('AdminBundle::layout/base.html.php');

?><div class="container">
    <div class="row">
        <div class="card col-xs-12 col-sm-8 col-md-6 col-lg-4 mt-5" style="margin: auto auto">
            <div class="card-body">
                <h2>Login</h2>
                <p></p>
                <?php foreach ($view['session']->getFlashes() as $type => $flash_messages): ?>
                    <?php
                    $alertType = 'alert-success';
                    if ($type == 'error') {
                        $alertType = 'alert-danger';
                    }
                    ?>
                    <div class="col alert <?= $alertType?> alert-dismissible fade show" role="alert">
                        <?= '- '.implode('<br>- ', $flash_messages)?>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <?php endforeach ?>
                <form action="<?= $view['router']->path('ADM_login') ?>" method="post">
                    <div class="form-group">
                        <input class="form-control" id="inputEmail" type="text" aria-describedby="emailHelp" placeholder="Enter email" name="_username" value="<?= $last_username ?? ''?>">
                    </div>
                    <div class="form-group">
                        <input class="form-control" id="inputPassword" type="password" placeholder="Password" name="_password">
                    </div>
                    <input type="submit" class="btn btn-primary btn-block" value="Login">
                </form>
            </div>
        </div>
    </div>
</div>