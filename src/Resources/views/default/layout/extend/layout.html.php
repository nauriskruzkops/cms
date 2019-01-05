<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 */
$view['theme']->extend('layout/extend/base.html.php');

?>
<header>
    <div class="container">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container">
                <a class="navbar-brand" href="<?= $view['router']->path('index', ['_locale' => $app->getRequest()->getLocale()]) ?>">
                    <?= $view['settings']->value('site_title') ?>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <?= $view['theme']->render('layout/partial/main_top_menu.html.php',[])?>
                    <?= $view['theme']->render('layout/partial/main_top_lang_menu.html.php',[])?>
                </div>
            </div>
        </nav>
    </div>
</header>

<main class="<?= $view['layout']($page ?? null)->pageClass()?>" style="margin-top: 60px" role="main">
    <?php $view['slots']->output('_content') ?>
    <div class="sp20"></div>
    <footer>
        <div class="sp5"></div>
        <div class="container">
            <p class="float-right"><a href="#">Back to top</a></p>
            <p>&copy; 2017-2018 Crocolab, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </div>
    </footer>
</main>