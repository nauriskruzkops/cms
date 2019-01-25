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
    <?php $i=0; foreach ($page->getBlocks() as $block) :?>
        <?php if ($block->isPublic() && $block->getPost()) :?>
            <div class="row">
                <?php if (!empty($block->getTitle())) :?>
                    <?php if ($i === 0) :?>
                        <?php if ($pageHelper->hasHeaderTitle()) :?>
                            <div class="sec-title">
                                <h2><?= $this->escape($block->getTitle())?></h2>
                            </div>
                        <?php endif;?>
                    <?php else: ?>
                        <div>
                            <h2><?= $this->escape($block->getTitle())?></h2>
                        </div>
                    <?php endif; ?>
                <?php endif;?>
                <?= $block->getPost()->getText()?>
            </div>
        <?php endif;?>
    <?php $i++; endforeach;?>
<?php else:?>
    <section class="mechanical-section" style="background-color:#f4f4f4">
        <div class="auto-container">
            <div class="inner-container">
                <div class="row clearfix">
                    <?= $page->getContent()?>
                </div>
            </div>
        </div>
    </section>
<?php endif;?>
