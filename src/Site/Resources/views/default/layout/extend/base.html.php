<!doctype html>
<html lang="en">
<head>
    <title><?= $this->escape($view['settings']->value('site_title')) ?></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= $this->escape($view['settings']->value('site_description')) ?>">
    <link rel="icon" href="data:image/ico;base64,0">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i|Roboto:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
    <link href="<?= $view['theme']->assetsGetUrl('bootstrap/css/bootstrap.min.css', 'vendor') ?>" rel="stylesheet">
    <link href="<?= $view['theme']->assetsGetUrl('tools.css', 'css') ?>" rel="stylesheet">
    <link href="<?= $view['theme']->assetsGetUrl('theme-base.css', 'css') ?>" rel="stylesheet">
</head>
<body>
    <?php $view['slots']->output('_content') ?>

    <script src="<?= $view['theme']->assetsGetUrl('jquery/jquery.min.js', 'vendor') ?>"></script>
    <script src="<?= $view['theme']->assetsGetUrl('bootstrap/js/bootstrap.min.js', 'vendor') ?>"></script>
    <script src="<?= $view['theme']->assetsGetUrl('popper.min.js', 'vendor') ?>"></script>


</body>
</html>
