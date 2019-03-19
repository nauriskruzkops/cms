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
<section class="error-section" style="font-size: 80% important!; margin-top: 9%">
    <div class="auto-container">
        <div class="content">
            <hr class="featurette-divider">
            <h1>Here is something wrong!</h1>
            <p>Sorry, come back later.</p>
            <hr class="featurette-divider">
        </div>
    </div>
</section>
