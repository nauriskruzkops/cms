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

$view['slots']->set('pageTitle', 'Your profile');
$view['slots']->set('pageIcon', 'fa fa-user-o');

$isNewUser = (!$user->getId());

?>
<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['slots']->get('pageTitle')?></h1>
        </div>
    </div>
</div>

<div class="white-box">
    <?= $formHelper->start($form->createView());?>
        <div class="row">
            <div class="col-md-6">
                <?= $view->render('@AdminBundle/Resources/views/users/partial/form.html.php',['form' => $form, 'user' => $user, 'isProfile' => true])?>
            </div>
            <div class="col-md-6">
                <?= $view->render('@AdminBundle/Resources/views/users/partial/password-form.html.php',['form' => $form, 'user' => $user,])?>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <input class="btn btn-primary" type="submit" name="btn_save" value="<?= $view['translator']->trans('Adm:Save') ?>">
                </div>
            </div>
        </div>
    <?= $formHelper->end($form->createView(), ['render_rest' => false]);?>
</div>

<script type="text/javascript">
    $(function () {
        // ...
    })
</script>

