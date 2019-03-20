<?php

use Admin\Entity\Page;
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
 * @var integer $blockKey
 * @var \App\Helpers\PageHelper $pageHelper
 */

$formHelper = $view['form'];
$blockData = $block->getData();
$formBlockView = $block->createView();
$totallBlocks = count($form->get('blocks'));
$pageHelper = $view['page']($blockData->getPage());

?>
<div class="row">
    <input type="hidden" name="<?= $formBlockView['post']->vars['full_name']?>" value="<?= $formBlockView['post']->vars['value']?>">
    <iframe src="<?= $view['router']->path('adm_post_raw', ['relation' => 'post', 'id' => $formBlockView['post']->vars['value'] ?? 0]) ?>" id="post_text_<?=$blockKey?>" <?php
        ?>data-post-id="<?= $formBlockView['post']->vars['value']?>" <?php
        ?>data-post-name="page_form[blocks][<?= $blockKey?>][post_text]" <?php
    ?>style="height: <?= $totalBlocks > 1?600:750?>px; border: 0; width: 100%;background-color: <?= $pageHelper->blockBackgroundColor($blockData, true)?>;background-image: url(<?= $pageHelper->blockBackground($blockData, true)?>);
            " frameborder="0">

    </iframe>
</div>
<script type="text/javascript">
    $(function () {
        var iframeContainer = document.getElementById('post_text_<?=$blockKey?>');
        var iframejQ = $(iframeContainer);
        $('form[name=<?= $form->getName()?>]').submit(function (e) {
            var thisForm = $(this);
            var iframeBody = iframeContainer.contentWindow.document.body;
            var iframeHtml = $('#inline_edit_content', iframeBody).html();
            var input = $('<input>');
                input.attr('type', 'text')
                    .attr('name', iframejQ.attr('data-post-name'))
                    .val(iframeHtml);
                $(thisForm).append(input);
            return true;
        })
    })
</script>

