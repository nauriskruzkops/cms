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
            <a class="btn btn-light" href="<?= $view['router']->path('adm_page_list') ?>"><?= $view['translator']->trans('Adm:List') ?></a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <?= $formHelper->start($form->createView());?>
            <div class="row">
                <div class="col-9">
                    <div class="">
                        <?= $view->render(sprintf('@AdminBundle/Resources/views/pages/templates/%s/%s.html.php', $page->getTemplate(), $page->getTemplate()),[
                            'form' => $form,
                            'page' => $page,
                        ])?>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group">
                                <label><?= $formView['template']->vars['label'] ?></label>
                                <?= $formHelper->errors($formView['template']) ?>
                                <?= $formHelper->widget($formView['template']) ?>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label><?= $formView['locale']->vars['label'] ?></label>
                                <?= $formHelper->errors($formView['locale']) ?>
                                <?= $formHelper->widget($formView['locale']) ?>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label><?= $formView['parent']->vars['label'] ?></label>
                                <?= $formHelper->errors($formView['parent']) ?>
                                <?= $formHelper->widget($formView['parent']) ?>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label><?= $formView['title']->vars['label'] ?></label>
                                <?= $formHelper->errors($formView['title']) ?>
                                <?= $formHelper->widget($formView['title']) ?>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label><?= $formView['slug']->vars['label'] ?></label>
                                <?= $formHelper->errors($formView['slug']) ?>
                                <?= $formHelper->widget($formView['slug']) ?>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <?= $view->render('@AdminBundle/Resources/views/pages/partial/settings.html.php',[
                        'form' => $form->get('settings'),
                        'page' => $page,
                    ])?>
                    <div class="form-check">
                        <label class="form-check-label">
                            <?= $formHelper->widget($formView['public']) ?>
                            <?= $formView['public']->vars['label'] ?>
                        </label>
                    </div>
                    <hr>
                    <div class="form-group">
                        <input class="btn btn-primary" type="submit" name="btn_save" value="<?= $view['translator']->trans('Adm:Save') ?>">
                        <button class="btn btn-primary" name="btn_save_exit" type="submit"><?= $view['translator']->trans('Adm:SaveAndExit') ?></button>
                        <a href="<?= $view['router']->path('adm_page_list') ?>" class="btn btn-link"><?= $view['translator']->trans('Adm:Cancel') ?></a>
                        <?php if (!$isNewPage) :?>
                            <button class="btn btn-light pull-right" type="submit" name="delete_page">
                                <i class="fa fa-trash"></i>
                            </button>
                        <?php endif;?>
                    </div>

                </div>
            </div>

        <?= $formHelper->end($form->createView(), ['render_rest' => false]);?>
    </div>
</div>
<div class="sp20"></div>
<div class="sp20"></div>
<div class="sp20"></div>

<script type="text/javascript">
    $(function () {
        // ...
    })
</script>

