<?php

use App\Helpers\PageHelper;
use Admin\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page $page
 * @var PageHelper $pageHelper
 */

$view['slots']->set('page_title', 'Message sent!');

$view['theme']->extend('layout/extend/layout.html.php');
echo $view['theme']->render('layout/partial/page-header.html.php', [
    'page' => null,
    'clearFix' => true
])

?>
<section class="mechanical-section" style="background-color:#f4f4f4">
    <div class="auto-container">
        <div class="inner-container">
            <div class="sec-title">
                <h2><strong><?= $view['transl']('Paldies, ziņa nosūtīta.')?></strong></h2>
            </div>

            <p><?= $view['transl']('Atbildēsim pēc iespējas ātrāk.')?></p>
            <div class="row">
                <a href="<?=  $view['router']->path('index')?>" class="btn btn-link">
                    <i class="fa fa-home"></i>
                    <?= $view['transl']('Uz sākumu.')?>
                </a>
                <a href="javascript:history.back()" class="btn btn-link">
                    <i class="fa fa-reply"></i>
                    <?= $view['transl']('Atpakaļ')?>
                </a>
            </div>
        </div>
    </div>
</section>
