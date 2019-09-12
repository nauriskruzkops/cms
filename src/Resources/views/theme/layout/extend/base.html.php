<?php

use App\Helpers\LayoutHelper;
use App\Helpers\SettingsHelper;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\AssetsHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var LayoutHelper $view['layout']
 * @var SettingsHelper $view['settings']
 * @var AssetsHelper $view['assets']
 */
$assetVersion = '?'.substr(md5(date('YmdH')+2), 12); // Temp!

?><!doctype html>
<html lang="<?= $app->getRequest()->getLocale()?>">
<head>
    <title><?=
        $this->escape($view['settings']->value('site_title_prefix'))
        ?> <?php $view['slots']->output('headTitle', $view['settings']->value('site_title'))
        ?> <?=$this->escape($view['settings']->value('site_title_suffix'))
        ?></title>
    <meta charset="utf-8">
<?php if((int) $view['settings']->value('site_allow_public_index') !== 1) :?>
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
<?php endif;?>
    <link rel="canonical" href="<?= $view['layout']->canonicalUrl()?>" >
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?php $view['slots']->output('headDescription', $view['settings']->value('site_description')) ?>">
    <meta name="google-site-verification" content="s1b0zvVKrDdcLnftJ6NDDaP1pHgIEvP-bt4tclpmMok" />
    <?php foreach ($view['layout']->languages() as $language) :
        ?><link rel="alternate" hreflang="<?= $language['code']?>" href="<?= $language['uri']?>" />
    <?php
    endforeach; ?><?php /*
   <link rel="alternate" hreflang="ru-RU" href="http://www.vitbuve.com/ru" />
   <link rel="alternate" hreflang="sv-SE" href="http://www.vitbuve.com/se" />
   <link rel="alternate" hreflang="nb-NO" href="http://www.vitbuve.com/se" />
   <link rel="alternate" hreflang="nl-NL" href="http://www.vitbuve.com/nl" />
*/ ?><link rel="icon" href="data:image/ico;base64,0">
    <link href="<?= $view['assets']->getUrl('build/site.css').$assetVersion ?>" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <?= $view['settings']->value('google_analytics')?>
</head>
<body>
<div class="page-wrapper">
    <?php $view['slots']->output('_content') ?>
</div>

<script src="<?= $view['assets']->getUrl('build/vendors~site.js').$assetVersion ?>"></script>
<script src="<?= $view['assets']->getUrl('build/site.js').$assetVersion ?>"></script>
<?= $view['settings']->value('footer_code')?>
</body>
</html>
