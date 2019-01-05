<?php

use App\Helpers\PageHelper;
use Shared\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page $page
 * @var PageHelper $pageHelper
 */
$view['theme']->extend('layout/extend/layout.html.php');
$pageHelper = $view['page']($page);
?>

<?php if ($pageHelper->hasHeader()) :?>
    <section class="page-title" style="<?= $pageHelper->headerBackground()?>">
        <div class="container auto-container">
            <?php if ($pageHelper->hasHeader()) :?>
                <h1><?= $page->getTitle()?></h1>
            <?php endif;?>
        </div>
    </section>
<?php endif;?>

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
