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
$view['slots']->set('page', $page);

$pageHelper = $view['page']($page);
$pageHelper->headerStyle($page);

$layoutHelper = $view['layout']($page);

$view['theme']->extend('layout/extend/layout.html.php');

$clearFix = true;

/** @var \Admin\Entity\PageBlocks $firstBlock */
$firstBlock = $page->getBlocks()->first();
if ($firstBlock && $firstBlock->getType() === \Admin\Entity\PageBlocks::TYPE_SLIDER) {
    $clearFix = false;
}
echo $view['theme']->render('layout/partial/page-header.html.php', [
        'page' => $page,
        'clearFix' => $clearFix
])

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
