<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Symfony\Component\Form\Form $form
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 * @var \Shared\Entity\User $user
 */

$view->extend('AdminBundle::layout/layout.html.php');

$formView = $form->createView();
$formHelper = $view['form'];

$request = $app->getRequest();

$view['slots']->set('pageTitle', 'Add / Edit Page');
$view['slots']->set('pageIcon', 'fa fa-user-o');

$isNewUser = (!$user->getId());

?>
<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['slots']->get('pageTitle')?></h1>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-light" href="<?= $view['router']->path('adm_users') ?>">List</a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <?= $formHelper->start($form->createView());?>
            <div class="row">
                <div class="col-8">
                    <div class="white-box">
                        <?= $view->render('@AdminBundle/Resources/views/users/partial/form.html.php',[
                            'form' => $form,
                            'user' => $user,
                        ])?>

                        <hr>

                        <div class="form-group">
                            <input class="btn btn-primary" type="submit" name="btn_save" value="<?= $view['translator']->trans('Adm:Save') ?>">
                            <button class="btn btn-primary" name="btn_save_exit" type="submit"><?= $view['translator']->trans('Adm:SaveAndExit') ?></button>
                            <a href="<?= $view['router']->path('adm_users') ?>" class="btn btn-link"><?= $view['translator']->trans('Adm:Cancel') ?></a>
                            <?php if (!$isNewUser) :?>
                                <button class="btn btn-light pull-right" type="submit" name="delete_user">
                                    <i class="fa fa-trash"></i>
                                </button>
                            <?php endif;?>
                        </div>

                    </div>
                </div>
            </div>

        <?= $formHelper->end($form->createView(), ['render_rest' => false]);?>
    </div>
</div>

<script type="text/javascript">
    $(function () {
        // ...
    })
</script>

