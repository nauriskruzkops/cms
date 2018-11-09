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
    <?php $formHelper->label($formView['title']) ?>
    <?= $formHelper->errors($formView['title']) ?>
    <?= $formHelper->widget($formView['title']) ?>
    <?= $formHelper->widget($formView['content']) ?>
</div>

<div id="iframeContainer"></div>

<script>
    $(function () {
        var iframe = $('<iframe>', {
            src: '<?= $view['router']->path('adm_page_raw', ['id' => $page->getId()]) ?>',
            id: 'inline_edit_iframe',
            frameborder: 0,
            scrolling: 'yes',
            style: 'width: 100%; height: 600px',
            onload: function () {
                self.isIframeLoaded = true;
                //$(this).height($(this).contents().find('body').height())
            }
        }).appendTo('#iframeContainer');
    })

</script>