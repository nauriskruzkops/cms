<?php

use Admin\Entity\Menu;
use Admin\Entity\MenuItems;
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

<?php if (isset($formView['object'])) :?>
    <?= $formHelper->widget($formView['type']) ?>
    <?= $formHelper->widget($formView['objectClass']) ?>
    <?= $formHelper->widget($formView['objectId']) ?>
    <div class="row input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">
                <?= $formView['object']->vars['label'] ?>
            </span>
        </div>
        <?= $formHelper->errors($formView['object']) ?>
        <?= $formHelper->widget($formView['object']) ?>
        <div class="input-group-append">
            <span class="input-group-text">
                <a href="#" onclick="$(this).parents('.input-group')[0].remove(); return;"><i class="fa fa-close"></i></a>
            </span>
        </div>
    </div>
<?php endif; ?>












