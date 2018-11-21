<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Shared\Entity\Page $page
 */
$view->extend('layout/extend/layout.html.php');
?>

<hr class="featurette-divider">

<div class="container">

    <h1><?= $page->getTitle()?></h1>

    <hr>

    <?= $page->getContent()?>
</div>
