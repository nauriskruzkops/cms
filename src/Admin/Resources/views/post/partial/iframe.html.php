<?php
/**
 * @var \Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables $app
 * @var \Symfony\Component\Templating\PhpEngine $view
 * @var string$content
 */
$view->extend('AdminBundle::layout/page-iframe.html.php');

$jsonCssList = json_encode($view['theme']->config()['admin_content_css'] ?? []);
$view['slots']->start('append_script');
echo <<<JS
    var tiny_content_css = JSON.parse('$jsonCssList');
JS;
    $view['slots']->stop('append_script');
?>

<div id="inline_edit_content" class="form-control-editor">
    <?= $content ?>
</div>