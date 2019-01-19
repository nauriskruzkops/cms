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
    <?php if (!$page->getBlocks()->isEmpty()) :?>
        <?php foreach ($page->getBlocks() as $block) :?>
            <?php if ($block->isPublic()) :?>
                <?php if ($block->getPost()) :?>
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

<section class="call-to-action-section">
    <div class="auto-container">
        <div class="row clearfix">
            <div class="column col-md-9 col-sm-12 col-xs-12">
                <h2>Uzticam koka karkasa paneļu māju ražotājs jau no 2005. gada.</h2>
            </div>
            <div class="btn-column col-md-3 col-sm-12 col-xs-12">
                <a href="#contact-form" class="theme-btn btn-style-two">Pieteikties<br>konsultācijai</a>
            </div>
        </div>
    </div>
</section>

<section class="services-section-three" style="background-color:#d6d6d6">
    <div class="auto-container">
        <?= $view['actions']->render(
            new ControllerReference('App\\Controller\\ServicesController::partialByCategory',[
                'request' => $app->getRequest(), 'categories' => ['services']
            ])
        ) ?>
    </div>
</section>

<?= $view['theme']->render('layout/partial/contact-form.html.php',[]) ?>
