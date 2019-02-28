<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Content Managament System">
    <meta name="author" content="nauris.kruzkops@gmail.com">
    <title>Crocolab CMS (Content Managament System)</title>
<?php /*
    <link href="<?= $view['assets']->getUrl('vendor/bootstrap/css/bootstrap.min.css', 'admin') ?>" rel="stylesheet">
    <link href="<?= $view['assets']->getUrl('vendor/bootstrap/css/bootstrap-toggle.min.css', 'admin') ?>" rel="stylesheet">
    <link href="<?= $view['assets']->getUrl('css/tools.css', 'admin') ?>" rel="stylesheet">
    <link href="<?= $view['assets']->getUrl('vendor/font-awesome/css/font-awesome.min.css', 'admin') ?>" rel="stylesheet" type="text/css">

    <link href="<?= $view['assets']->getUrl('css/theme-base.css', 'admin') ?>" rel="stylesheet">
    <link href="<?= $view['assets']->getUrl('css/bootstrap-overwrite.css', 'admin') ?>" rel="stylesheet">

    <script src="<?= $view['assets']->getUrl('vendor/jquery/jquery.min.js', 'admin') ?>"></script>

    <script src="<?= $view['assets']->getUrl('vendor/popper.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/bootstrap/bootstrap.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/bootstrap/bootstrap-toggle.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/tinymce/jquery.tinymce.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/tinymce/tinymce.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('js/main.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('js/storage.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('js/initTextEditor.js', 'admin') ?>"></script>
 */?>
    <link href="<?= $view['assets']->getUrl('build/admin.css') ?>" rel="stylesheet">
    <script src="<?= $view['assets']->getUrl('build/runtime.js') ?>"></script>
    <script src="<?= $view['assets']->getUrl('build/vendors~admin.js') ?>"></script>
    <script src="<?= $view['assets']->getUrl('build/admin.js') ?>"></script>
</head>
<body class="fixed-nav">
    <div id="wrapper">
        <?php $view['slots']->output('_content') ?>
    </div>

    <div id="SysNotifyMessages">
        <?php foreach ($view['session']->getFlashes() as $type => $flash_messages) :?>
            <?php
            $alertType = 'alert-success';
            if ($type == 'error') {
                $alertType = 'alert-danger';
            }
            ?>
            <div class="alert <?= $alertType?> alert-dismissible fade show" role="alert">
                <?= '- '.implode('<br>- ', $flash_messages)?>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        <?php endforeach ?>
    </div>

    <script src="<?= $view['assets']->getUrl('vendor/moment.min.js', 'admin') ?>"></script>
    <script src="<?= $view['assets']->getUrl('vendor/bootstrap-datepicker/bootstrap-datetimepicker.min.js', 'admin') ?>"></script>
</body>
</html>


