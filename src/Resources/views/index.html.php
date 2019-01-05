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

<?= $view['theme']->render('layout/partial/slider.html.php',[])?>

<?php if (in_array($page->getTemplate(), [Page::TEMPL_ROOT, Page::TEMPL_LANDING])) : ?>
    <?php foreach ($page->getBlocks() as $block) :?>
        <?php if ($block->isPublic() && $block->getPost()) :?>
            <section class="mechanical-section" style="background-color:#f4f4f4">
                <div class="auto-container">
                    <div class="container inner-container">
                        <div class="row clearfix">
                            <?= $block->getPost()->getText()?>
                        </div>
                    </div>
                </div>
            </section>
        <?php endif;?>
    <?php endforeach;?>
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

<?= $view['theme']->render('layout/partial/contact-form.html.php',[]) ?>
