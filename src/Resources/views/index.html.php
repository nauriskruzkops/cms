<?php

use Shared\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page $page
 */
$view->extend('layout/extend/layout.html.php');
?>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO89x8AAsEB3+IGkhwAAAAASUVORK5CYII=" alt="First slide" style="height: 400px">
            <div class="carousel-caption d-none d-md-block">
                <h5><?= $view['settings']->value('site_title') ?></h5>
                <p><?= $view['settings']->value('site_description') ?></p>
            </div>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO89x8AAsEB3+IGkhwAAAAASUVORK5CYII=" alt="First slide" style="height: 400px">
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

<div class="sp20"></div>

<div class="container">
    <?php if ($page->getSetting('SHOW_TITLE')) :?>
        <h1><?= $page->getTitle()?></h1>
        <hr>
    <?php  endif;?>
</div>

<?php if (in_array($page->getTemplate(), [Page::TEMPL_ROOT, Page::TEMPL_LANDING])) : ?>
    <?php foreach ($page->getBlocks() as $block) :?>
        <?php if ($block->isPublic() && $block->getPost()) :?>
            <div class="page_block type-<?= $page->getTemplate()?> block_border_b">
                <div class="container">
                    <?= $block->getPost()->getText()?>
                    <div class="clearfix"></div>
                </div>
            </div>
        <?php endif;?>
    <?php endforeach;?>
<?php else:?>
    <div class="container">
        <?= $page->getContent()?>
    </div>
<?php endif;?>

<script>
    $(function () {
        $('.carousel').carousel()
    })
</script>