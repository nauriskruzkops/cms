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

<?= $view['theme']->render('layout/partial/slider.html.php',['page' => $page])?>

<?php if (in_array($page->getTemplate(), [Page::TEMPL_ROOT, Page::TEMPL_LANDING])) : ?>
    <?php if (!$page->getBlocks()->isEmpty()) :?>
        <?php foreach ($page->getBlocks() as $block) :?>
            <?php if ($block->isPublic()) :?>
                <?php if ($block->getPost()) :?>

                    <div class="row">
                        <?= $block->getPost()->getText()?>
                    </div>

                <?php endif;?>
            <?php endif;?>
        <?php endforeach;?>
    <?php endif;?>
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

<section class="services-section-three" style="background-color:#d6d6d6">
    <div class="auto-container">
        <?= $view['actions']->render(
            new ControllerReference('App\\Controller\\ServicesController::partialByCategory',[
                'request' => $app->getRequest(), 'categories' => ['services']
            ])
        ) ?>
    </div>
</section>


