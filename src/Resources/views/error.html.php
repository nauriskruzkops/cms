<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 */
$view['theme']->extend('layout/extend/layout.html.php');
?>
<section class="error-section" style="font-size: 80% important!;">
    <div class="auto-container">
        <div class="content">
            <hr class="featurette-divider">
            <h1>Ups!</h1>
            <h2>Here is something wrong!</h2>
            <h2>Sorry, come back later.</h2>
            <hr class="featurette-divider">
        </div>
    </div>
</section>
