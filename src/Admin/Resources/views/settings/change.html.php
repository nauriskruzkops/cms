<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Symfony\Component\Form\Form $form
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 */

$formView = $form->createView();
$formHelper = $view['form'];
$request = $app->getRequest();

$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1>Change settings</h1>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-default" href="<?= $view['router']->path('adm_settings') ?>"><?= $view['translator']->trans('AdminBundle:Back') ?></a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <div class="white-box">
            <?= $formHelper->start($form->createView());?>

            <div class="form-group row">
                <?= $formHelper->label($formView['key']) ?>
                <div class="col-8">
                    <?= $formHelper->errors($formView['key']) ?>
                    <?= $formHelper->widget($formView['key']) ?>
                </div>
            </div>

            <div class="form-group row">
                <?= $formHelper->label($formView['title']) ?>
                <div class="col-8">
                    <?= $formHelper->errors($formView['title']) ?>
                    <?= $formHelper->widget($formView['title']) ?>
                </div>
            </div>

            <div class="form-group row">
                <?= $formHelper->label($formView['value']) ?>
                <div class="col-8">
                    <?= $formHelper->errors($formView['value']) ?>
                    <?= $formHelper->widget($formView['value']) ?>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-2">Translatable</div>
                <div class="col-8">
                    <div class="form-check">
                        <?= $formHelper->errors($formView['translatable']) ?>
                        <?= $formHelper->widget($formView['translatable']) ?>
                        <?= $formHelper->label($formView['translatable']) ?>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-8">
                    <hr>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2"></div>
                <div class="col-8">
                    <ul id="SettingValues" class="list-group" data-prototype="<?= $this->escape($formHelper->widget($formView['values']->vars['prototype'])) ?>">
                        <?php foreach ($formView['values'] as $valueKey => $valueFormView) :?>
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-sm-5">
                                        <?= $formHelper->widget($formView['values'][$valueKey]['key']) ?>
                                    </div>
                                    <div class="col-sm-6">
                                        <?= $formHelper->widget($formView['values'][$valueKey]['value']) ?>
                                        <?= $formHelper->errors($formView['values'][$valueKey]) ?>
                                    </div>
                                    <div class="col-sm-1 text-center">
                                        <div class="form-group">
                                            <p class="position-static">
                                                <a href="" class="btn-link text-danger"><i class="fa fa-close"></i></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        <?php endforeach;?>
                    </ul>
                </div>
            </div>

            <hr>
            <div class="form-group text-right">
                <input class="btn btn-primary" type="submit" value="Submit">
                <a href="<?= $view['router']->path('adm_settings') ?>" class="btn btn-link">Cancel</a>
            </div>

            <?= $formHelper->end($form->createView(), ['render_rest' => false]);?>
        </div>
    </div>
</div>
<script type="text/javascript">
    jQuery(document).ready(function () {

        var $collectionHolder;

        var $addTagLink = $('<a href="#" class="btn btn-link add_setting_value">Add a value</a>');
        var $newLinkLi = $('<li class="list-group-item"></li>').append($addTagLink);

        jQuery(document).ready(function() {
            $collectionHolder = $('ul#SettingValues');
            $collectionHolder.append($newLinkLi);
            $collectionHolder.data('index', $collectionHolder.find(':input').length);
            $addTagLink.on('click', function(e) {
                e.preventDefault();
                addSettingValueForm($collectionHolder, $newLinkLi);
            });
        });

        function addSettingValueForm($collectionHolder, $newLinkLi) {
            var prototype = $collectionHolder.data('prototype');
            var index = $collectionHolder.data('index');
            var newForm = prototype.replace(/__name__/g, index);
            $collectionHolder.data('index', index + 1);
            var $newFormLi = $('<li class="list-group-item"></li>').append(newForm);
            $newLinkLi.before($newFormLi);
        }
    });
</script>