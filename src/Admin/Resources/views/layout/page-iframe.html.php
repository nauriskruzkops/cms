<!DOCTYPE html>
<html>
<head>
    <script src="<?= $view['assets']->getUrl('vendor/jquery/jquery.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/tinymce/jquery.tinymce.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/tinymce/tinymce.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('js/initTextEditor.js', 'admin') ?>"></script>
</head>
<body>
<style type="text/css">
    #inline_edit_content {
        margin-top: 20px; padding-top: 20px;
    }
</style>
    <?php $view['slots']->output('_content') ?>
</body>
</html>


