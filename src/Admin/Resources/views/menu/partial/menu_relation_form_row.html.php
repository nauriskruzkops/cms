<?php

use Shared\Entity\Menu;
use Shared\Entity\MenuItems;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Form $form
 * @var FormHelper $formHelper
 */


$new = $new ?? false;
$formView = $form;
$formHelper = $view['form'];

?>
<div class="form-group">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">
                <?= $formView['object']->vars['label'] ?>
            </span>
        </div>
        <?= $formHelper->errors($formView['object']) ?>
        <?= $formHelper->widget($formView['object']) ?>
        <div class="input-group-append">
            <span class="input-group-text">
                <a href="#" onclick="$(this).parents('.form-group')[0].remove(); return;"><i class="fa fa-close"></i></a>
            </span>
        </div>
    </div>
</div>











