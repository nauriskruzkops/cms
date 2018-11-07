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
<div class="col-4">
    <div class="form-group">
        <label>
            <?= $formHelper->label($formView['title']) ?>
        </label>
        <?= $formHelper->errors($formView['title']) ?>
        <?= $formHelper->widget($formView['title']) ?>
    </div>
</div>
<div class="col-4">
    <div class="form-group">
        <label>
            <?= $formHelper->label($formView['code']) ?>
        </label>
        <div class="input-group">
            <?= $formHelper->errors($formView['code']) ?>
            <?= $formHelper->widget($formView['code']) ?>
        </div>
    </div>
</div>
<div class="col-4">
    <div class="form-group">
        <label>
            <?= $formHelper->label($formView['locale']) ?>
        </label>
        <div class="input-group">
            <?= $formHelper->errors($formView['locale']) ?>
            <?= $formHelper->widget($formView['locale']) ?>
        </div>
    </div>
</div>




