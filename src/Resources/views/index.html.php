<?php

use Admin\Entity\Page;
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

<?= $view['theme']->render('layout/partial/slider.html.php',['page' => $page])?>

<?php if (in_array($page->getTemplate(), [Page::TEMPL_ROOT, Page::TEMPL_LANDING])) : ?>
    <?php if (!$page->getBlocks()->isEmpty()) :?>
        <?php foreach ($page->getBlocks() as $blockKey => $block) :?>
            <?php if ($block->isPublic()) :?>
                <?= $view['theme']->render(sprintf('page_block/%s.html.php', $block->getType()), [
                    'block' => $block,
                    'key' => $blockKey,
                ])?>
            <?php endif;?>
        <?php endforeach;?>
    <?php endif;?>
<?php else:?>
    <section class="mechanical-section page-block" style="background-color:#f4f4f4">
        <div class="auto-container">
            <div class="inner-container">
                <?= $page->getContent()?>
            </div>
        </div>
    </section>
<?php endif;?>


