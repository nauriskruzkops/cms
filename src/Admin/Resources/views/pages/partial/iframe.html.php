<?php
/**
 * @var \Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables $app
 * @var \Symfony\Component\Templating\PhpEngine $view
 * @var string$content
 */
$view->extend('AdminBundle::layout/page-iframe.html.php');
?>
<div id="inline_edit_content" class="form-control-editor">
    <?= $content ?>
</div>
