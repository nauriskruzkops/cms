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
    <div class="col-sm-8">
        <div id="uploaded-list-group">

        </div>
        <?php var_dump($configValues['images'] ?? []) ?>
        <?php foreach ($formBlockConfigView['images'] as $key => $image) :?>
            <div class="col-md-6">
                <div class="row">
                    <div class="form-check">
                        <?= $formHelper->widget($image)?> <?= $formHelper->label($image)?>
                    </div>
                </div>
            </div>
        <?php endforeach;?>
    </div>
    <div class="col-sm-4">
        <div class="custom-file">
            <input type="file" class="custom-file-input" id="page_block_image" name="block_images" multiple>
            <label class="custom-file-label" for="page_block_image">Choose file</label>
        </div>
        <ul class="list-group small upload-list-group" data-target="upload-list">

        </ul>
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
            for (var i = 0; i < prepareToUpload.length; i++) {
                var formData = new FormData();
                formData.append('files', prepareToUpload.item(i));
                formData.append('directory', 'page');
                formData.append('referenceObject', '\\Shared\\Entity\\PageBlocks');
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
                        $('<input type="checkbox" checked>')
                            .attr('name', '<?= $formBlockConfigView['images']->vars['full_name']?>')
                            .attr('value', data.location)
                            .appendTo('#uploaded-list-group');
                        TotalSuccessUploaded++;
                    },
                    error: function (data) {
                        $('[data-prepare='+i+']', listContainer).addClass('bg-danger');
                        $('[data-prepare='+i+']', listContainer).find('span').html('uploading ... error');
                        TotalSuccessUploaded++;
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
                alert('Upload DONE');
            }

            return false;
        });
    });
</script>


