<!DOCTYPE html>
<head>
    <script type="text/javascript"><?php $view['slots']->output('append_script') ?></script>
    <script src="<?= $view['assets']->getUrl('build-editor/vendors~editor.js') ?>"></script>
    <script src="<?= $view['assets']->getUrl('build-editor/editor.js') ?>"></script>
    <style type="text/css">
        body, html{margin-bottom: -50px}
        body {margin: 20px; padding: 10px}
        #inline_edit_content {margin: 20px; padding: 20px; margin-bottom: -40px}
    </style>
</head>
<body>
    <?php $view['slots']->output('_content') ?>
</body>
</html>


