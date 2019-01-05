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
$view['theme']->extend('layout/extend/layout.html.php');
?>


<section class="page-title" style="background-image:url(<?= $view['theme']->assetsGetUrl('background/12.jpg', 'images') ?>)">
    <div class="auto-container">
        <h1><?= $page->getTitle()?></h1>
    </div>
</section>

<div class="approach-section">
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
</div>
