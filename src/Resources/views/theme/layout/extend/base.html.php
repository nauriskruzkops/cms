<!doctype html>
<html lang="<?= $view['locale']?>">
<head>
    <title><?= $this->escape($view['settings']->value('site_title')) ?></title>
    <meta charset="utf-8">
    <?php if((int) $view['settings']->value('site_allow_public_index') !== 1) :?>
        <meta name="robots" content="noindex">
        <meta name="googlebot" content="noindex">
    <?php endif;?>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= $this->escape($view['settings']->value('site_description')) ?>">
    <link rel="icon" href="data:image/ico;base64,0">
    <link href="<?= $view['assets']->getUrl('build/site.css') ?>" rel="stylesheet">
    <script src="<?= $view['assets']->getUrl('build/vendors~site.js') ?>"></script>
    <script src="<?= $view['assets']->getUrl('build/site.js') ?>"></script>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
</head>
<body>

<div class="page-wrapper">
    <?php $view['slots']->output('_content') ?>
</div>
<?php /*
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
<script src="<?= $view['theme']->assetsGetUrl('mixitup.js', 'js') ?>"></script>
<script src="<?= $view['theme']->assetsGetUrl('wow.js', 'js') ?>"></script>
*/ ?>

<script src="<?= $view['theme']->assetsGetUrl('script.js', 'js') ?>"></script>

</body>
</html>
