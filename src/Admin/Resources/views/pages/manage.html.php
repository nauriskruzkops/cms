<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Symfony\Component\Form\Form $form
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 * @var \Shared\Entity\Page $page
 */

$view->extend('AdminBundle::layout/layout.html.php');

$formView = $form->createView();
$formHelper = $view['form'];

$request = $app->getRequest();

$view['slots']->set('pageTitle', 'Add / Edit Page');
$view['slots']->set('pageIcon', 'fa fa-user-o');

$isNewPage = (!$page->getId());

?>
<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['slots']->get('pageTitle')?></h1>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-light" href="<?= $view['router']->path('adm_page_list') ?>">List</a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <?= $formHelper->start($form->createView());?>
        <div class="white-box">
            <div class="row">
                <div class="col-8">
                    <?= $view->render('@AdminBundle/Resources/views/pages/partial/form.html.php',[
                        'form' => $form,
                        'page' => $page,
                    ])?>
                    <hr>
                    <div class="form-group text-right">
                        <input class="btn btn-primary" type="submit" value="Submit">
                        <a href="<?= $view['router']->path('adm_page_list') ?>" class="btn btn-link"><?= $view['translator']->trans('Adm:Cancel') ?></a>
                        <?php if (!$isNewPage) :?>
                            <button class="btn btn-light" type="submit" name="delete_page">
                                <i class="fa fa-trash"></i>
                            </button>
                        <?php endif;?>
                    </div>
                </div>
                <div class="col-4">
                   ...
                </div>
            </div>
        </div>
        <?= $formHelper->end($form->createView(), ['render_rest' => false]);?>
    </div>
</div>

<script type="text/javascript">
    $(function () {
        var iframeContainer = $('#iframeContainer iframe').first().contents();
        $('form[name=<?= $form->getName()?>]').submit(function (e) {
            var iframeBody = document.getElementById('inline_edit_iframe').contentWindow.document.body;
            var iframeHtml = $('#inline_edit_content', iframeBody).html();
            $('#page_form_content').val(iframeHtml);
            return true;
        })
    })
</script>

