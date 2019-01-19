<!doctype html>
<html lang="en">
<head>
    <title><?= $this->escape($view['settings']->value('site_title')) ?></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= $this->escape($view['settings']->value('site_description')) ?>">
    <link rel="icon" href="data:image/ico;base64,0">

    <link href="<?= $view['theme']->assetsGetUrl('bootstrap.css', 'css') ?>" rel="stylesheet" type="text/css">
    <link href="<?= $view['theme']->assetsGetUrl('revolution/css/settings.css', 'plugins') ?>" rel="stylesheet" type="text/css">
    <link href="<?= $view['theme']->assetsGetUrl('revolution/css/layers.css', 'plugins') ?>" rel="stylesheet" type="text/css">
    <link href="<?= $view['theme']->assetsGetUrl('revolution/css/navigation.css', 'plugins') ?>" rel="stylesheet" type="text/css">
    <link href="<?= $view['theme']->assetsGetUrl('style.css', 'css') ?>" rel="stylesheet">
    <link href="<?= $view['theme']->assetsGetUrl('responsive.css', 'css') ?>" rel="stylesheet">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="<?= $view['theme']->assetsGetUrl('respond.js', 'js') ?>"></script><![endif]-->

</head>
<body>

<div class="page-wrapper">
    <div class="ppreloader"></div>
    <?php $view['slots']->output('_content') ?>
</div>
<script src="<?= $view['theme']->assetsGetUrl('jquery.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/jquery.themepunch.revolution.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/jquery.themepunch.tools.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/extensions/revolution.extension.actions.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/extensions/revolution.extension.carousel.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/extensions/revolution.extension.kenburn.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/extensions/revolution.extension.layeranimation.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/extensions/revolution.extension.migration.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/extensions/revolution.extension.navigation.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/extensions/revolution.extension.parallax.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/extensions/revolution.extension.slideanims.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('revolution/js/extensions/revolution.extension.video.min.js', 'plugins') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('main-slider-script.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('bootstrap.min.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('jquery.fancybox.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('isotope.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('jquery-ui.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('owl.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('wow.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('appear.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('script.js', 'js') ?>"></script>

</body>
</html>
