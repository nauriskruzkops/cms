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

$formBlockConfigForm = $block->get('config')[0];
$formBlockConfigView = $formBlockConfigForm->createView();
$formBlockConfig = $blockData->getConfig() ?? [];

$configInputName = $formBlockConfigView->vars['full_name'];
$configValues = $blockData->getConfig()[0] ?? [];

?>
<div class="row">
    <div class="col-2">
        <div class="form-group">
            <label><?= $view['translator']->trans('Adm:Template') ?>:</label>
            <?= $formHelper->widget($formBlockConfigView['style'], ['attr' => ['class' => 'form-control']])?>
        </div>
    </div>
    <div class="col-2">
        <div class="form-group">
            <label><?= $view['translator']->trans('Adm:Order') ?>:</label>
            <?= $formHelper->widget($formBlockConfigView['order_by'], ['attr' => ['class' => 'form-control']])?>
        </div>
    </div>
    <div class="col-4 hidden-md"></div>
    <div class="col-4 pull-right">
        <div class="form-group">
            <label> </label>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="page_block_image" name="block_images" multiple>
                <label class="custom-file-label" for="page_block_image">Choose images</label>
            </div>
        </div>
        <ul class="list-group small upload-list-group" data-target="upload-list">

        </ul>
    </div>
</div>
<div class="sp10"></div>
<div class="row" style="max-height: 600px; overflow-y: auto">
    <div class="col-sm-12">
        <div class="row uploaded-list-group" data-target="uploaded">
            <?php foreach ($configValues['images'] ?? [] as $key => $image) : ?>
                <?php if ($image['file'] ?? false) :?>
                    <div class="col-sm-6 row uploaded-list-item pr-0">
                        <div class="col">
                            <input type="checkbox" class="item-checkbox" checked name="<?= $configInputName?>[images][<?= $key?>][file]" value="<?= $image['file']?>">
                            <img src="<?=$view['assets']->getUrl($image['file'])?>">
                        </div>
                        <div class="col pl-0">
                            <input type="text" class="form-control input-sm mb-1" name="<?= $configInputName?>[images][<?= $key?>][title]" placeholder="Title" value="<?= $image['title'] ?? ''?>">
                            <textarea rows="2" class="form-control input-sm mb-1" name="<?= $configInputName?>[images][<?= $key?>][desc]" placeholder="Description"><?= $image['desc'] ?? ''?></textarea>
                            <input type="text" class="form-control input-sm" name="<?= $configInputName?>[images][<?= $key?>][link]" placeholder="Link" value="<?= $image['link'] ?? ''?>">
                        </div>
                    </div>
                <?php endif;?>
            <?php endforeach;?>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(function () {
        $("#page_block_image").on("change", function(e) {
            e.preventDefault();
            var prepareToUpload = $('#page_block_image')[0].files;

            var listContainer = $('[data-target=upload-list]');

            for (var i = 0; i < prepareToUpload.length; i++) {
                var tempFile = prepareToUpload.item(i);

                var previewFileName = tempFile.name;
                if (previewFileName.length > 13) {
                    previewFileName = previewFileName.substr(10);
                }
                previewFileName = '<span class="text-muted">uploading ...</span><br>' + previewFileName;
                $('<li class="list-group-item upload-list-item">').html(previewFileName).attr('data-prepare', i).
                    appendTo(listContainer);
            }
            var TotalUploaded = 0;
            var TotalSuccessUploaded = 0;
            var UploadImageKey = <?= ($key??0)+1?>;

            for (var i = 0; i < prepareToUpload.length; i++) {
                var formData = new FormData();
                formData.append('files', prepareToUpload.item(i));
                formData.append('directory', 'page');
                formData.append('referenceObject', '\\Admin\\Entity\\PageBlocks');
                formData.append('referenceId', <?= $blockData->getId()?>);

                $.ajax({
                    url: '/admin/upload/from/post',
                    type: 'POST',
                    dataType: "json",
                    xhr: function() {
                        var myXhr = $.ajaxSettings.xhr();
                        return myXhr;
                    },
                    success: function (data) {
                        $('[data-prepare='+i+']', listContainer).remove();
                        var $item = $('<div class="col-sm-6 row uploaded-list-item pr-0">');
                        var $col1 = $('<div class="col">');
                        $('<input type="checkbox" class="item-checkbox" checked>')
                            .attr('name', '<?= $configInputName?>[images]['+UploadImageKey+'][file]')
                            .attr('value', data.location)
                            .appendTo($col1);
                        $('<img>')
                            .attr('src', data.location)
                            .appendTo($col1);
                        var $col2 = $('<div class="col pl-0">');
                        $('<input type="text" class="form-control input-sm mb-2">').attr('name', '<?= $configInputName?>[images]['+UploadImageKey+'][title]').appendTo($col2);
                        $('<textarea rows="2" class="form-control input-sm mb-2">').attr('name', '<?= $configInputName?>[images]['+UploadImageKey+'][desc]').appendTo($col2);
                        $('<input type="text" class="form-control input-sm">').attr('link', '<?= $configInputName?>[images]['+UploadImageKey+'][file]').appendTo($col2);

                        $($col1).appendTo($item);
                        $($col2).appendTo($item);
                        $($item).appendTo('[data-target=uploaded]');
                        TotalSuccessUploaded++;
                        UploadImageKey++;
                    },
                    error: function (data) {
                        $('[data-prepare='+i+']', listContainer).addClass('bg-danger');
                        $('[data-prepare='+i+']', listContainer).find('span').html('uploading ... error');
                        TotalSuccessUploaded++;
                        UploadImageKey++;
                    },
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false,
                    async: false
                });
                TotalUploaded++;
            }

            if (prepareToUpload.length === TotalUploaded) {
                // alert('Upload DONE');
            }

            return false;
        });
    });
</script>


