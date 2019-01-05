<!DOCTYPE html>
<html>
<head>
    <script src="<?= $view['assets']->getUrl('vendor/jquery/jquery.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/tinymce/jquery.tinymce.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/tinymce/tinymce.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('js/initTextEditor.js', 'admin') ?>"></script>
    <style type="text/css">
        body, html{margin-bottom: -50px}
        #inline_edit_content {margin-top: 20px; padding-top: 20px; margin-bottom: -40px}
    </style>
</head>
<body>
    <?php $view['slots']->output('_content') ?>
</body>
</html>


