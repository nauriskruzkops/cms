<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 */
$view->extend('AdminBundle::layout/base.html.php');
?>

<?= $view['actions']->render(
    new ControllerReference('Admin\\Controller\\Layout\\LayoutController::header',[
        'request' => $app->getRequest()
    ])
) ?>

<div id="side-wrapper">
    <?= $view['actions']->render(
        new ControllerReference('Admin\\Controller\\Layout\\LayoutController::menu',[
            'request' => $app->getRequest()
        ])
    ) ?>
</div>

<div id="content-wrapper">
    <div class="container-fluid">

        <div class="row">
            <div class="col-12">
                <?php
                /*
                $view['actions']->render(
                    new ControllerReference('Admin\\Controller\\Layout\\LayoutController::breadcrumb',[
                        'request' => $app->getRequest()
                    ])
                )*/
                ?>
                <div class="sp20"></div>
                <div class="col-sm-12">
                    <?php $view['slots']->output('_content') ?>
                </div>
                <?= $view['actions']->render(
                    new ControllerReference('Admin\\Controller\\Layout\\LayoutController::footer',[
                        'request' => $app->getRequest()
                    ])
                ) ?>

            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="logoutModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="logoutModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a class="btn btn-primary" href="<?= $view['router']->path('ADM_logout') ?>">Logout</a>
            </div>
        </div>
    </div>
</div>

<!-- Global AJAX Modal:START -->
<div class="modal fade" id="globalAjaxModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body"></div>
        </div>
    </div>
</div>
<!-- Global AJAX Modal:END -->
