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
    <label><?= $formView['name']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['name']) ?>
    <?= $formHelper->errors($formView['name']) ?>
</div>

<div class="form-group">
    <label><?= $formView['surname']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['surname']) ?>
    <?= $formHelper->errors($formView['surname']) ?>
    <small class="form-text text-muted">.....</small>
</div>

<div class="form-group">
    <label><?= $formView['email']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['email']) ?>
    <?= $formHelper->errors($formView['email']) ?>
</div>

<div class="form-group">
    <label><?= $formView['password']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['password']) ?>
    <?= $formHelper->errors($formView['password']) ?>
</div>

<div class="form-check">
    <label class="form-check-label">
        <?= $formHelper->widget($formView['enabled']) ?>
        <?= $formView['enabled']->vars['label'] ?>
    </label>
</div>

