<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var FormHelper $formHelper
 * @var Form $block
 * @var \Admin\Entity\PageBlocks $blockData
 * @var \Admin\Helpers\CategoryHelper $categoryHelper
 */

$formHelper = $view['form'];
$blockData = $block->getData();
$formBlockView = $block->createView();
$categoryHelper = $view['category']($blockData->getPage()->getLocale());
$config = $blockData->getConfig();

$formBlockConfigView = $block->get('config')[0]->createView();
$formBlockConfig = $blockData->getConfig() ?? [];

$configInputName = $formBlockConfigView->vars['full_name'];
$configValues = $blockData->getConfig()[0] ?? [];

?>
<div class="row">
    <div class="col-md-5">
        <div class="small"><?= $view['translator']->trans('Adm:ShowAllPostsByCategory') ?>:</div>
        <div class="row">
            <?php foreach ($formBlockConfigView['category'] as $key => $category) :?>
                <div class="col-md-6">
                    <div class="row">
                        <div class="form-check">
                            <?= $formHelper->widget($category)?> <?= $formHelper->label($category)?>
                        </div>
                    </div>
                </div>
            <?php endforeach;?>
        </div>
    </div>
    <div class="col-md-2">
        <div class="form-group">
            <label><?= $view['translator']->trans('Adm:Template') ?>:</label>
            <?= $formHelper->widget($formBlockConfigView['style'], ['attr' => ['class' => 'form-control']])?>
        </div>
    </div>
    <div class="col-md-5">
        <div class="form-group">
            <label>Text</label>
            <?= $formHelper->widget($formBlockConfigView['text'])?>
        </div>
    </div>
</div>


