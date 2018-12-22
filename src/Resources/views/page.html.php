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

<div style="margin-top: 70px"></div>
<div class="clearfix"></div>

<?php if ($page->getSetting('SHOW_TITLE')) :?>
    <div class="page-header">
        <div class="container">
            <h1><?= $page->getTitle()?></h1>
        </div>
        <hr>
    </div>
<?php  endif;?>

<div class="container">
    <?php if ($page->getTemplate() === \Shared\Entity\Page::TEMPL_LANDING) : ?>
        <?php foreach ($page->getBlocks() as $block) :?>
            <?php if ($block->getPost()) :?>
                <?= $block->getPost()->getText()?>
            <?php endif;?>
        <?php endforeach;?>
    <?php else:?>
        <?= $page->getContent()?>
    <?php endif;?>
</div>
