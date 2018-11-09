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
            <span class="input-group-text" id="basic-addon1">domain.com/</span>
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

<script type="text/javascript">
    tinymce.init({
        selector: 'textarea',
        height: 500,
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor textcolor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code help wordcount'
        ],
        toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tinymce.com/css/codepen.min.css']
    });
</script>

