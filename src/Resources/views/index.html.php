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


<section class="company-section" style="margin-bottom: -30px">
    <div class="auto-container">
        <div class="inner-container">
            <div class="clearfix">
                <div class="col-md-12">
                    <h3 style="color: #F1F2F7; text-align: center">
                        <span>Uzticam</span> koka karkasa paneļu māju ražotājs jau no 2005. gada.
                    </h3>
                </div>
            </div>
        </div>
    </div>
</section>

<?php if (in_array($page->getTemplate(), [Page::TEMPL_ROOT, Page::TEMPL_LANDING])) : ?>
    <?php if (!$page->getBlocks()->isEmpty()) :?>
        <?php foreach ($page->getBlocks() as $block) :?>
            <?php if ($block->isPublic()) :?>
                <?php if ($block->getPost()) :?>
                    <section class="mechanical-section" style="background-color: transparent;">
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
