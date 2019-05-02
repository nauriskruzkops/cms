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
$clearFix = $clearFix ?? true;

?>
<?php if ($pageHelper->hasHeader()) :?>
    <section class="page-title" style="<?= $pageHelper->headerBackground($page)?>">
        <div class="container auto-container">
            <?php if ($pageHelper->hasHeader()) :?>
                <h1><?= $this->escape($page->getTitle())?></h1>
            <?php endif;?>
            <ul class="page-breadcrumb">
                <li><a href="/">Sākums</a></li>
                <li><?= $this->escape($page->getTitle())?></li>
            </ul>
        </div>
    </section>
<?php elseif ($clearFix) :?>
    <div class="clearfix"></div>
    <div class="clearfix" style="margin-bottom: 135px"></div>
<?php else:?>
    <div class="clearfix" style="margin-bottom: 135px"></div>
<?php endif;?>