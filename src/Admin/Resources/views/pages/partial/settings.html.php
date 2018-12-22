<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Form $form
 * @var \Shared\Entity\Page $page
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 */

$formView = $form->createView();
$formHelper = $view['form'];
$request = $app->getRequest();

?>
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
    <textarea rows="3" class="form-control" name="page_form[settings][1][value]"><?= $page->getSetting('META_DESC')?></textarea>
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



