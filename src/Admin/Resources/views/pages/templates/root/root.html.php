<?php

use Shared\Entity\Page;
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
 */
$formView = $form->createView();
$formHelper = $view['form'];
?>

<h3> Root <small>Template</small></h3>

<div id="iframeContainer">
    <iframe id="inline_edit_iframe" src="<?= $view['router']->path('adm_page_raw', ['relation' => 'page', 'id' => $page->getId() ?? 0]) ?>" frameborder="0" style="width: 100%; height:700px; border: 0"></iframe>
    <?= $formHelper->widget($formView['content']) ?>
</div>
<script type="text/javascript">
    $(function () {
        var iframeContainer = document.getElementById('inline_edit_iframe');
        $('form[name=<?= $form->getName()?>]').submit(function (e) {
            var iframeBody = iframeContainer.contentWindow.document.body;
            var iframeHtml = $('#inline_edit_content', iframeBody).html();
            $('#page_form_content').val(iframeHtml);
            return true;
        })
    })
</script>
