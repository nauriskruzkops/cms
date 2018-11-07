<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Symfony\Component\Form\Form $form
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 * @var \Shared\Entity\Post $post
 */

$view->extend('AdminBundle::layout/layout.html.php');

$formView = $form->createView();
$formHelper = $view['form'];

$request = $app->getRequest();

$view['slots']->set('pageTitle', 'Add / Edit Post');
$view['slots']->set('pageIcon', 'fa fa-user-o');

$isNewPost = (!$post->getId());

?>
<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['slots']->get('pageTitle')?></h1>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-light" href="<?= $view['router']->path('adm_post_list') ?>">List</a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <?= $formHelper->start($form->createView());?>
            <div class="white-box">
                <div class="row">
                    <div class="col-8">
                        <?= $view->render('@AdminBundle/Resources/views/post/partial/form.html.php',[
                            'form' => $form,
                            'post' => $post
                        ])?>
                        <hr>
                        <div class="form-group text-right">
                            <input class="btn btn-primary" type="submit" value="Submit">
                            <a href="<?= $view['router']->path('adm_post_list') ?>" class="btn btn-link">Cancel</a>
                            <?php if (!$isNewPost) :?>
                                <button class="btn btn-light" type="submit" name="delete_post">
                                    <i class="fa fa-trash"></i>
                                </button>
                            <?php endif;?>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <?= $formHelper->label($formView['categories']) ?>
                            <?= $formHelper->errors($formView['categories']) ?>
                            <?= $formHelper->widget($formView['categories']) ?>
                        </div>

                    </div>
                </div>
            </div>
        <?= $formHelper->end($form->createView(), ['render_rest' => false]);?>
    </div>
</div>
<script type="text/javascript">
    $(function() {
        $( 'textarea' ).ckeditor({
            height: 400,
            inline: true,
            imageUploadUrl: 'image-upload'
        });
    });
</script>
