<?php

use Shared\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Post[] $posts
 * @var FormHelper $formHelper
 * @var Form $form
 */

$formView = $form->createView();
$formHelper = $view['form'];
?>

<div id="iframeContainer">
    <iframe id="inline_edit_iframe" src="<?= $view['router']->path('adm_page_raw', ['relation' => 'page', 'id' => $page->getId() ?? 0]) ?>" frameborder="0" style="width: 100%; height:600px; border: 0"></iframe>
    <?= $formHelper->widget($formView['content']) ?>
</div>

<script type="text/javascript">
    $(function () {
        var iframeContainer = $('#iframeContainer iframe').first().contents();
        $('form[name=<?= $form->getName()?>]').submit(function (e) {
            var iframeBody = document.getElementById('inline_edit_iframe').contentWindow.document.body;
            var iframeHtml = $('#inline_edit_content', iframeBody).html();
            var contentInput = $('form[name=<?= $form->getName()?>]').append( "<input type='hidden' name='' />" );
                contentInput.val(iframeHtml);
            return true;
        })
    })
</script>