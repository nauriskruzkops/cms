<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Form $form
 * @var bool $isProfile
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 */

$formView = $form->createView();
$formHelper = $view['form'];
$request = $app->getRequest();
$isProfile = $isProfile ?? false;
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
</div>

<div class="form-group">
    <label><?= $formView['email']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['email']) ?>
    <?= $formHelper->errors($formView['email']) ?>
</div>

<?php if ($isProfile !== true) :?>
    <div class="form-group">
        <label><?= $formView['roles']->vars['label'] ?></label>
        <?= $formHelper->widget($formView['roles']) ?>
        <?= $formHelper->errors($formView['roles']) ?>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <?= $formHelper->widget($formView['active']) ?>
            <?= $formView['active']->vars['label'] ?>
        </label>
    </div>
<?php endif; ?>

