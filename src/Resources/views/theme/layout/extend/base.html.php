<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 */
$assetVersion = '?'.substr(md5(date('YmdH')+1), 12); // Temp!

?><!doctype html>
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
    <link href="<?= $view['assets']->getUrl('build/site.css').$assetVersion ?>" rel="stylesheet">


    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
</head>
<body>

<div class="page-wrapper">
    <?php $view['slots']->output('_content') ?>
</div>

<script src="<?= $view['assets']->getUrl('build/vendors~site.js').$assetVersion ?>"></script>
<script src="<?= $view['assets']->getUrl('build/site.js').$assetVersion ?>"></script>

</body>
</html>
