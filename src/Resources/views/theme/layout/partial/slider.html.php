<?php

use App\Helpers\PageHelper;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var PageHelper $pageHelper
 */
$pageHelper = $view['page']($page);

/* background-image: url(<?= $view['assets']->getUrl('images/49656421_296765910978084.jpg', 'theme') ?>) */
/* background-color: #b2b2b2 */

?>
<section class="slider-banner-section">
    <div class="slider-image" style="background-image: url(<?= $pageHelper->headerBackground($page, false)?>);">
        <img src="<?= $pageHelper->headerBackground($page, false)?>" style="visibility: hidden;">
    </div>

    <div class="auto-container">
        <div class="content">
            <p style="font-size: 120%; color:#FFFFFF; font-weight: bold; text-transform: uppercase; ">
                &ensp; Latvijā rūpnieciski ražotas augstas kvalitātes &ensp;
            </p>
            <h2 style="color:white; font-weight: bold; text-transform: uppercase;">koka karkasa paneļa <span style="color: #f5802d">mājas</span></h2>
        </div>
        <br>
        <p class="text-right">
            <a href="/kontakti" class="theme-btn btn-style-four">Piesakies konsultācijai</a>
        </p>
    </div>
</section>
<div class="clearfix"></div>