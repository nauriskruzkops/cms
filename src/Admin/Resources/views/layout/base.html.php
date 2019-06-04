<!DOCTYPE html>
<html lang="<?= $view['locale']?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Content Managament System">
    <meta name="author" content="nauris.kruzkops@gmail.com">
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    <title>Crocolab CMS (Content Managament System)</title>
    <link href="<?= $view['assets']->getUrl('build-admin/admin.css') ?>" rel="stylesheet">
    <script src="<?= $view['assets']->getUrl('build-admin/vendors~admin.js') ?>"></script>
    <script src="<?= $view['assets']->getUrl('build-admin/admin.js') ?>"></script>
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
</body>
</html>


