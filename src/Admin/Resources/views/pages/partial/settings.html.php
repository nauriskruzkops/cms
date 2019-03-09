<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Form $form
 * @var \Admin\Entity\Page $page
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 */

$formView = $form->createView();
$formHelper = $view['form'];
$request = $app->getRequest();

?>

<div class="form-group text-right" data-action="show-advanced-properties">
    <label>
        <a href="#" onclick="$('[data-target=advanced-properties]').show(); $('[data-action=show-advanced-properties]').hide(); return false;">Open advanced properties</a>
    </label>
    <hr>
</div>

<div data-target="advanced-properties" style="display: none ">
    <div class="text-right">
        <a href="#" onclick="$('[data-action=show-advanced-properties]').show(); $('[data-target=advanced-properties]').hide(); return false;"><i class="fa fa-close"></i></a>
    </div>
    <div class="form-group">
        <label>META Title / Description</label>
        <input type="hidden" name="page_form[settings][0][pageId]" value="<?= $page->getId()?>" />
        <input type="hidden" name="page_form[settings][0][type]" value="string" />
        <input type="hidden" name="page_form[settings][0][code]" value="META_TITLE" />
        <input type="text" class="form-control" name="page_form[settings][0][value]" value="<?= $page->getSetting('META_TITLE')?>" />

    </div>
    <div class="form-group">
        <input type="hidden" name="page_form[settings][1][pageId]" value="<?= $page->getId()?>" />
        <input type="hidden" name="page_form[settings][1][type]" value="string" />
        <input type="hidden" name="page_form[settings][1][code]" value="META_DESC" />
        <textarea rows="2" class="form-control" name="page_form[settings][1][value]"><?= $page->getSetting('META_DESC')?></textarea>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label>Page style</label>
                <input type="hidden" name="page_form[settings][3][pageId]" value="<?= $page->getId()?>" />
                <input type="hidden" name="page_form[settings][3][type]" value="string" />
                <input type="hidden" name="page_form[settings][3][code]" value="PAGE_STYLE" />
                <select class="form-control" name="page_form[settings][3][value]">
                    <option value="">-- Choose page style --</option>
                    <option value="light" <?= $page->getSetting('PAGE_STYLE')=='light'?'selected':''?>>Light</option>
                    <option value="grey" <?= $page->getSetting('PAGE_STYLE')=='grey'?'selected':''?>>Grey</option>
                    <option value="dark" <?= $page->getSetting('PAGE_STYLE')=='dark'?'selected':''?>>Dark</option>
                </select>
            </div>
            <div class="form-group">
                <label>Header color</label>
                <input type="hidden" name="page_form[settings][6][pageId]" value="<?= $page->getId()?>" />
                <input type="hidden" name="page_form[settings][6][type]" value="string" />
                <input type="hidden" name="page_form[settings][6][code]" value="HEADER_BACKGROUND_COLOR" />
                <input type="color" class="form-control" name="page_form[settings][6][value]" value="<?= $page->getSetting('HEADER_BACKGROUND_COLOR')?>" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Header image</label>
                <input type="hidden" name="page_form[settings][5][pageId]" value="<?= $page->getId()?>" />
                <input type="hidden" name="page_form[settings][5][type]" value="file" />
                <input type="hidden" name="page_form[settings][5][code]" value="HEADER_BACKGROUND_IMG" />
                <input type="hidden" name="page_form[settings][5][valueImage]" value="<?= $page->getSetting('HEADER_BACKGROUND_IMG')?>" />
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="post_image" name="page_form[settings][5][value]">
                    <label class="custom-file-label" for="post_image">Choose file</label>
                </div>
                <?php if (($headerImage = $page->getSetting('HEADER_BACKGROUND_IMG'))) :?>
                    <a href="<?= $view['assets']->getUrl($headerImage,'upload')?>">
                        <img src="<?= $view['assets']->getUrl($headerImage,'upload')?>" style="width: 100%">
                    </a>
                    <div class="text-right">
                        <a href="" class="btn btn-sm btn-default disabled">Delete image</a>
                    </div>
                <?php endif;?>
            </div>
        </div>
    </div>

    <div class="form-check">
        <input type="hidden" name="page_form[settings][4][pageId]" value="<?= $page->getId()?>" />
        <input type="hidden" name="page_form[settings][4][type]" value="boolean" />
        <input type="hidden" name="page_form[settings][4][code]" value="SHOW_PAGE_HEADER" />
        <label class="form-check-label">
            <input type="checkbox" id="page_form_public" <?= $page->getSetting('SHOW_PAGE_HEADER')?'checked="checked"':''?> name="page_form[settings][4][value]" class="form-check-input" value="1">
            Show page header
        </label>
    </div>

    <div class="form-check">
        <input type="hidden" name="page_form[settings][2][pageId]" value="<?= $page->getId()?>" />
        <input type="hidden" name="page_form[settings][2][type]" value="boolean" />
        <input type="hidden" name="page_form[settings][2][code]" value="SHOW_TITLE" />
        <label class="form-check-label">
            <input type="checkbox" id="page_form_public" <?= $page->getSetting('SHOW_TITLE')?'checked="checked"':''?> name="page_form[settings][2][value]" class="form-check-input" value="1">
            Show page title
        </label>
    </div>
</div>


