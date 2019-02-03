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
    <label><?= $formView['plainPassword']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['username']) ?>
    <?= $formHelper->errors($formView['username']) ?>
</div>
<div class="form-group">
    <label><?= $formView['plainPassword']['first']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['plainPassword']['first']) ?>
    <?= $formHelper->errors($formView['plainPassword']['first']) ?>
</div>

<div class="form-group">
    <label><?= $formView['plainPassword']['second']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['plainPassword']['second']) ?>
    <?= $formHelper->errors($formView['plainPassword']['second']) ?>
</div>
