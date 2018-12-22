<?php

use Shared\Entity\Page;
use Shared\Entity\PageBlocks;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var FormHelper $formHelper
 * @var Form $form
 * @var Page $page
 * @var PageBlocks $pageBlocks
 */

$formView = $form->createView();
$formHelper = $view['form'];

?>
<div id="blocks-container">
    <?php foreach ($form->get('blocks') as $blockKey => $block) :?>
        <?php $pageBlocks = $block->getData(); ?>
        <?php if ($pageBlocks && $pageBlocks->getPost()) :?>
            <div class="blocks-container-item">
                <?= $view->render(sprintf('@AdminBundle/Resources/views/pages/templates/landing/_type_%s.html.php', 'post'),[
                    'block' => $block,
                    'blockKey' => $blockKey,
                ])?>
            </div>
        <?php  endif;?>
    <?php endforeach;?>
    <?php $blockKey++;?>
</div>
<hr>

<div class="btn-group dropright">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Add new block
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#" data-action="add_post_block">Post</a>
        <button class="dropdown-item" name="add_block[post]">Post</button>
        <button class="dropdown-item" name="add_block[gallery]">Gallery</button>
        <button class="dropdown-item" name="add_block[array]">Params</button>
    </div>
</div>

<script type="text/javascript">
    $(function () {

        var tinymceConfig = {
            selector: '.form-control-editor',
            height: 500,
            menubar: false,
            inline: true,
            inline_styles : false,
            plugins: [
                'advlist autolink lists link image imagetools charmap print preview anchor textcolor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code help wordcount'
            ],
            toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code',
            content_css: [
                //'//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                //'//stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
            ],
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            powerpaste_word_import: 'clean',
            powerpaste_html_import: 'clean'
        };
        tinymce.init(tinymceConfig);

        $('form[name=<?= $form->getName()?>]').submit(function (e) {
            var postForm = this;
            //var iframeBody = iframeContainer.contentWindow.document.body;
            //var iframeHtml = $('#inline_edit_content', iframeBody).html();
            //$('#page_form_content').val(iframeHtml);
            $('.form-control-editor').each(function (k, v) {
                var postContent = $(v).html();
                var inp = $("<input type='text'>").attr('name', $(v).attr('data-post-name')).val(postContent);
                $(postForm).append(inp);
            });
            return true;
        });
        var lastBlockKey = <?= $blockKey?>;
        $('[data-action=add_post_block]').click(function (v) {
            var newPostEditor = $('<div class="form-control-editor">');
                newPostEditor.height(300);
                newPostEditor.attr('data-post-name', 'page_form[new_block]['+lastBlockKey+'][post_text]');
            var newPostField1 = $('<input type="hidden" name="page_form[new_block]['+lastBlockKey+'][post]" value="new">');
            var newPostBlock = $('<div>');
            newPostBlock.append(newPostEditor);
            newPostBlock.append(newPostField1);
            $('#blocks-container').append(newPostBlock);
            tinymce.init(tinymceConfig);
            lastBlockKey++;
        })
    })
</script>