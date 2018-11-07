<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Form $form
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 */

$formView = $form->createView();
$formHelper = $view['form'];
$request = $app->getRequest();

?>

<div class="form-group">
    <?php $formHelper->label($formView['title']) ?>
    <?= $formHelper->errors($formView['title']) ?>
    <?= $formHelper->widget($formView['title']) ?>
    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

<div class="form-group">

    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">vitbuve.lv/</span>
        </div>
        <?= $formHelper->errors($formView['slag']) ?>
        <?= $formHelper->widget($formView['slag']) ?>
    </div>

    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

<div class="form-group">
    <?= $formHelper->errors($formView['text']) ?>
    <?= $formHelper->widget($formView['text']) ?>
    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

