<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Exception $exception
 */
$view->extend('AdminBundle::layout/base.html.php');
?>

<?= $view['actions']->render(
    new ControllerReference('Admin\\Controller\\Layout\\LayoutController::header',[
        'request' => $app->getRequest()
    ])
) ?>

<div class="container text-center" style="margin-top: 15%">
    <hr class="featurette-divider">
    <h1>Access Denied</h1>
    <p>You don`t hava a permission for this action</p>
    <i><?= $exception ? $exception->getMessage() : ''?></i>
    <p></p>
    <p><a href="javascript:history.back()" class="text-danger">GO Back!</a></p>
    <hr class="featurette-divider">
</div>
