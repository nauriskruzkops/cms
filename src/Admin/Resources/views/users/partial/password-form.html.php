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
    <label><?= $formView['username']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['username']) ?>
    <?= $formHelper->errors($formView['username']) ?>
</div>
<div class="form-group">
    <label><?= $formView['password']['first']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['password']['first']) ?>
    <?= $formHelper->errors($formView['password']['first']) ?>
</div>

<div class="form-group">
    <label><?= $formView['password']['second']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['password']['second']) ?>
    <?= $formHelper->errors($formView['password']['second']) ?>
</div>
