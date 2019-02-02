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

echo $view['theme']->render('layout/partial/page-header.html.php', ['page' => $page])

?>
<?php if (in_array($page->getTemplate(), [Page::TEMPL_ROOT, Page::TEMPL_LANDING])) : ?>
    <?php foreach ($page->getBlocks() as $blockKey => $block) :?>
        <?php if ($block->isPublic()) :?>
            <?= $view['theme']->render(sprintf('page_block/%s.html.php', $block->getType()), [
                    'block' => $block,
                    'key' => $blockKey,
            ])?>
        <?php endif;?>
    <?php endforeach;?>
<?php else:?>
    <section class="mechanical-section" style="background-color:#f4f4f4">
        <div class="auto-container">
            <div class="inner-container">
                <?= $page->getContent()?>
            </div>
        </div>
    </section>
<?php endif;?>
