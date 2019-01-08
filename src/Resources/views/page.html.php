<?php

use App\Helpers\PageHelper;
use Shared\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page $page
 */
$view['theme']->extend('layout/extend/layout.html.php');
echo $view['theme']->render('layout/partial/page-header.html.php', ['page' => $page])
?>

<?php if (in_array($page->getTemplate(), [Page::TEMPL_ROOT, Page::TEMPL_LANDING])) : ?>
    <?php $i=0; foreach ($page->getBlocks() as $block) :?>
        <?php if ($block->isPublic() && $block->getPost()) :?>
            <section class="mechanical-section" <?php if ($i%2) :?> style="background-color: #efefef<?php endif;?>">
                <div class="auto-container">
                    <div class="container inner-container">
                        <div class="row clearfix">
                            <?php if (!$i) :?>
                                <div class="sec-title">
                                    <h2><?= $this->escape($block->getTitle())?></h2>
                                </div>
                            <?php else: ?>
                                <div>
                                    <h2><?= $this->escape($block->getTitle())?></h2>
                                </div>
                            <?php endif; ?>
                            <?= $block->getPost()->getText()?>
                        </div>
                    </div>
                </div>
            </section>
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
