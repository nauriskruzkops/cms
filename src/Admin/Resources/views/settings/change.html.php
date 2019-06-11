<?php

use Admin\Entity\Settings;
use Admin\Entity\Translation;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Form $form
 * @var FormHelper $formHelper
 * @var Settings $data
 */

$formView = $form->createView();
$formHelper = $view['form'];
$request = $app->getRequest();
$data = $form->getData();
$group = $data->getGroup();
$key = $data->getKey();
$isTranslatable = $data->getTranslatable();

$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['translator']->trans('Adm:ChangeSettings') ?></h1>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-default" href="<?= $view['router']->path('adm_settings') ?>"><?= $view['translator']->trans('Adm:Back') ?></a>
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
                <div class="col-sm-2"></div>
                <div class="col-8">
                    <div class="form-check">
                        <?= $formHelper->errors($formView['translatable']) ?>
                        <?= $formHelper->widget($formView['translatable']) ?>
                        <?= $formHelper->label($formView['translatable']) ?>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" id="settings_form_multiple_values" name="settings_form[multiple_values]" class="form-check-input" value="1" <?= ((bool)$data->getValues()->isEmpty() === true) ? '' : 'checked="checked"'?>>
                        <label class="col-sm-4 form-check-label" for="settings_form_multiple_values"><?= $view['translator']->trans('Adm:MultipleValues') ?></label>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <?= $formHelper->label($formView['value']) ?>
                <div class="col-8">
                    <div data-target="without-translation" style="<?= $isTranslatable ? 'display: none' : ''?>" >
                        <?= $formHelper->errors($formView['value']) ?>
                        <?php if ($data->getType() === Settings::TYPE_TEXT) :?>
                            <textarea rows="8" type="text" id="settings_form_value" name="settings_form[value]" class="form-control"><?= $this->escape($data->getValue()) ?></textarea>
                        <?php  else :?>
                            <input type="text" id="settings_form_value" name="settings_form[value]" class="form-control" value="<?= $this->escape($data->getValue()) ?>">
                        <?php  endif ;?>
                    </div>
                    <div data-target="translation" style="<?= !$isTranslatable ? 'display: none' : ''?>">
                        <?php foreach ($view['settings']->values('languages') as $langCode => $lang) :?>
                            <div class="form-group row">
                                <label class="col-auto col-form-label"><?= $langCode?></label>
                                <div class="col">
                                    <input type="text" id="settings_form_translation_<?= $langCode?>" name="settings_form[translation][<?= $langCode?>]" class="form-control" value="<?= $view['transl']($key, Translation::GROUP_SETTINGS, $langCode)?>" />
                                </div>
                            </div>
                        <?php endforeach;?>
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
                <input class="btn btn-success" name="btn_save" type="submit" value="Save">
                <input class="btn btn-success" name="btn_save_exit" type="submit" value="Save and exit">
                <a href="<?= $view['router']->path('adm_settings', ['group' => $group]) ?>" class="btn btn-outline-success"><?= $view['translator']->trans('Adm:Cancel') ?></a>
            </div>

            <?= $formHelper->end($form->createView(), ['render_rest' => false]);?>
        </div>
    </div>
</div>
<script type="text/javascript">
    jQuery(document).ready(function () {


        var collectionHolder;
        var blockTransl = $('[data-target=translation]');
        var blockWoTransl = $('[data-target=without-translation]');
        var inputMultipleValues = $('input#settings_form_multiple_values');
        var inputTranslatable = $('input#settings_form_translatable');

        $(inputTranslatable).change(function () {
            var self = this;
            if ($(self).is(':checked')) {
                blockTransl.show();
                blockWoTransl.hide();
                $(inputMultipleValues).prop('checked', false);
            } else {
                blockTransl.hide();
                blockWoTransl.show();
            }
        });

        $(inputMultipleValues).change(function () {
            if ((inputMultipleValues).is(':checked')){
                $(inputTranslatable).prop('checked', false);
                var addTagLink = $('<a href="#" class="btn btn-link add_setting_value"><?= $view['translator']->trans('Adm:AddValue') ?></a>');
                var newLinkLi = $('<li id="add_setting_value" class="list-group-item"></li>').append(addTagLink);

                collectionHolder = $('ul#SettingValues');
                collectionHolder.append(newLinkLi);
                collectionHolder.data('index', collectionHolder.find(':input').length);
                addTagLink.on('click', function (e) {
                    e.preventDefault();
                    addSettingValueForm(collectionHolder, newLinkLi);
                });
            } else {
                $('li#add_setting_value').remove();
            }
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