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

$view['slots']->set('headTitle', $page->getSetting('META_TITLE'));
$view['slots']->set('headDescription', $page->getSetting('META_DESC'));
$view['theme']->extend('layout/extend/layout.html.php');
$firstBlock = $page->getBlocks()->first();

?>
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
<?php else :?>
    <div class="container">
        <?= $page->getContent()?>
    </div>
<?php endif;?>


