<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Symfony\Component\Form\Form $form
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 * @var \Admin\Entity\Post $post
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
            <div class="row">
                <div class="col-8">
                    <div class="white-box">
                        <iframe id="<?= $formView['text']->vars['full_name']?>" src="<?= $view['router']->path('adm_post_raw', [
                                'relation' => 'post', 'id' => ($post && $post->getId()) ? $post->getId() : 0
                        ]) ?>" data-post-name="<?= $formView['text']->vars['full_name']?>" style="height: 700px; border: 0; width: 100%" frameborder="0"></iframe>
                        <script type="text/javascript">
                            $(function () {
                                var iframeContainer = document.getElementById('<?= $formView['text']->vars['full_name']?>');
                                $('form[name=<?= $form->getName()?>]').submit(function (e) {
                                    var thisForm = $(this);
                                    var iframeBody = iframeContainer.contentWindow.document.body;
                                    var iframeHtml = $('#inline_edit_content', iframeBody).html();
                                    var input = $('<input>');
                                    input.attr('type', 'hidden')
                                        .attr('name', $(iframeContainer).attr('data-post-name'))
                                        .val(iframeHtml);
                                    $(thisForm).append(input);
                                    return true;
                                })
                            })
                        </script>
                    </div>
                </div>
                <div class="col-4">
                    <?= $view->render('@AdminBundle/Resources/views/post/partial/form.html.php',[
                        'form' => $form,
                        'post' => $post
                    ])?>
                    <hr>
                    <div class="form-group">
                        <input class="btn btn-primary" type="submit" name="btn_save" value="<?= $view['translator']->trans('Adm:Save') ?>">
                        <button class="btn btn-primary" name="btn_save_exit" type="submit"><?= $view['translator']->trans('Adm:SaveAndExit') ?></button>
                        <a href="<?= $view['router']->path('adm_post_list') ?>" class="btn btn-link">Cancel</a>
                        <?php if (!$isNewPost) :?>
                            <button class="btn btn-light pull-right" type="submit" name="delete_post">
                                <i class="fa fa-trash"></i>
                            </button>
                        <?php endif;?>
                    </div>

                </div>
            </div>
        <?= $formHelper->end($form->createView(), ['render_rest' => false]);?>
    </div>
</div>