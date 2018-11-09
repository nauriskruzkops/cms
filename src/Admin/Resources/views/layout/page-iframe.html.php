<!DOCTYPE html>
<html>
<head>
    <script src="<?= $view['assets']->getUrl('vendor/jquery/jquery.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/tinymce/jquery.tinymce.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/tinymce/tinymce.min.js', 'admin') ?>"></script>
</head>
<body>
    <?php $view['slots']->output('_content') ?>
</body>
</html>


