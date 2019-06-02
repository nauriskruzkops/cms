<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var array $languages
 */
$assetVersion = '?'.substr(md5(date('YmdH')+2), 12); // Temp!
$languages = $view['settings']->values('languages');

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
    <meta name="google-site-verification" content="s1b0zvVKrDdcLnftJ6NDDaP1pHgIEvP-bt4tclpmMok" />
    <?php /* foreach ($languages as $languageKey => $languageTitle) :?>
        <?php if ($languageKey === 'lv') :?>
            <link rel="alternate" hreflang="<?= $languageKey?>-<?= strtoupper($languageKey)?>" href="http://www.vitbuve.lv/" />
        <?php else:?>
            <link rel="alternate" hreflang="<?= $languageKey?>-<?= strtoupper($languageKey)?>" href="http://www.vitbuve.com/<?= $languageKey?>" />
        <?php endif;?>
    <?php endforeach; */
    /*
   <link rel="alternate" hreflang="ru-RU" href="http://www.vitbuve.com/ru" />
   <link rel="alternate" hreflang="sv-SE" href="http://www.vitbuve.com/se" />
   <link rel="alternate" hreflang="nb-NO" href="http://www.vitbuve.com/se" />
   <link rel="alternate" hreflang="nl-NL" href="http://www.vitbuve.com/nl" />
*/ ?>
    <link rel="alternate" hreflang="lv" href="http://www.vitbuve.lv/" />
    <link rel="alternate" hreflang="en-US" href="http://www.vitbuve.com/en" />
    <link rel="icon" href="data:image/ico;base64,0">
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
