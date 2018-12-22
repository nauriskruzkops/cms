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
    <label><?= $formView['title']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['title']) ?>
    <?= $formHelper->errors($formView['title']) ?>
</div>

<div class="form-group">
    <label><?= $formView['slag']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['slag']) ?>
    <?= $formHelper->errors($formView['slag']) ?>
    <small class="form-text text-muted">.....</small>
</div>

<div class="form-group">
    <label><?= $formView['categories']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['categories']) ?>
    <?= $formHelper->errors($formView['categories']) ?>
</div>

<div class="form-check">
    <label class="form-check-label">
        <?= $formHelper->widget($formView['public']) ?>
        <?= $formView['public']->vars['label'] ?>
    </label>
</div>

