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

<section class="error-section" style="font-size: 80% important!">
    <div class="auto-container">
        <div class="content">
            <h1>404</h1>
            <h2>Oops! Šādu lapu neatradām</h2>
            <div class="text">Sorry, but the page you are looking for does not existing</div>
            <a href="\" class="theme-btn btn-style-one">Uz sākumu</a>
        </div>
    </div>
</section>