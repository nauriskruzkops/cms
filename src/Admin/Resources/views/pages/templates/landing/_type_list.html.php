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
 * @var \Shared\Entity\PageBlocks $blockData
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
    <div class="col-md-6">
        <div>Show all posts by category:</div>
        <div class="row">
            <?php foreach ($categoryHelper->getList() as $category) :?>
                <div class="col-md-6">
                    <div class="row">
                        <div class="form-check">
                            <?php $checked = in_array($category['slag'], array_values($configValues['category'] ?? [])) ? 'checked' : ''?>
                            <label>
                                <input type="checkbox" <?= $checked?> name="<?= $configInputName?>[category][]" value="<?= $category['slag']?>"> <?= $this->escape($category['title'])?>
                            </label>
                        </div>
                    </div>
                </div>
            <?php endforeach;?>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label>Text</label>
            <?= $formHelper->widget($formBlockConfigView['text'])?>
        </div>
    </div>
</div>


