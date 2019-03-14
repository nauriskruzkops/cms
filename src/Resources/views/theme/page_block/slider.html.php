<?php

use App\Helpers\PageHelper;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Admin\Entity\Page $page
 * @var \Admin\Entity\PageBlocks $block
 * @var PageHelper $pageHelper
 * @var int $key
 */
$page = $block->getPage();
$pageHelper = $view['page']($page);
?>

<section class="slider-banner-section">
    <div class="slider-image" style="background-image: url(<?= $pageHelper->blockBackground($block, true)?>);">
        <img src="<?= $pageHelper->blockBackground($block, true)?>" style="visibility: hidden;">
    </div>
    <div class="auto-container">
        <?= $block->getPost()->getText()?>
    </div>
</section>
<div class="clearfix"></div>