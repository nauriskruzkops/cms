<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 */
$view->extend('layout/extend/layout.html.php');
?>

<div class="container">
    <hr class="featurette-divider">
    <h1>Here is something wrong!</h1>
    <p>Sorry, come back later.</p>
    <hr class="featurette-divider">
</div>
