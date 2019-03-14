<?php

use App\Helpers\PageHelper;
use Admin\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page $page
 * @var \Admin\Entity\PageBlocks $block
 * @var PageHelper $pageHelper
 * @var int $key
 */

$pageHelper = $view['page']($block->getPage());
$blockConfig = $block->getConfig()[0] ?? [];
$images = $blockConfig['images'] ?? [];
?>

<section class="gallery-section page-block" style="<?= $pageHelper->blockBackground($block)?>">
    <?php if (!empty($block->getTitle())) :?>
        <div class="auto-container">
            <div class="sec-title light">
                <h2><?= $this->escape($block->getTitle())?></h2>
            </div>
        </div>
    <?php endif;?>


    <?php if ($blockConfig['style'] == 'masonry') :?>
        <div class="auto-container">
            <div class="sortable-masonry">
                <div class="items-container row clearfix">
                    <?php foreach ($images as $image) :?>
                        <?php if (empty($image['file'] ?? '')) continue;?>
                        <div class="gallery-item-two masonry-item col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img src="<?= $image['file']?>" alt="">
                                    <div class="overlay-box">
                                        <div class="overlay-inner">
                                            <div class="content">
                                                <?php if (!empty($image['link'])) :?>
                                                    <a href="<?= $image['link']?>" class="link"><span class="icon fa fa-link"></span></a>
                                                <?php endif;?>
                                                <a href="<?= $image['file']?>" data-fancybox="images" data-caption="" class="link lightbox-image"><span class="icon fa fa-search"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    <?php endforeach;?>
                </div>
            </div>
        </div>

    <?php elseif ($blockConfig['style'] == 'mixitup') :?>

        <div class="auto-container">
            <div class="mixitup-gallery">
                <div class="filter-list row clearfix">
                    <?php foreach ($images as $image) :?>
                        <?php if (empty($image['file'] ?? '')) continue;?>
                        <div class="gallery-item mix all office col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="inner-box">
                                <div class="image">
                                    <img src="<?= $image['file']?>" alt="">
                                    <div class="overlay-box">
                                        <a href="projects-detail.html" class="overlay-link"></a>
                                        <?php if (!empty($image['title'])) :?>
                                            <div class="content">
                                                <h3><a href="projects-detail.html"><?= $this->escape($image['title'])?></a></h3>
                                            </div>
                                        <?php endif;?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach;?>
                </div>
            </div>
        </div>

    <?php else :?>

        <div class="auto-container">
            <div class="project-carousel owl-theme owl-carousel">
                <?php foreach ($images as $image) :?>
                    <?php if (empty($image['file'] ?? '')) continue;?>
                    <div class="gallery-item-three style-two">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img src="<?= $image['file']?>" alt="">
                                <div class="overlay-box">
                                    <div class="overlay-inner">
                                        <div class="content">
                                            <?php if (!empty($image['link'])) :?>
                                                <a href="<?= $image['link']?>" class="link"><span class="icon flaticon-unlink"></span></a>
                                            <?php endif;?>
                                            <a href="<?= $image['file']?>" data-fancybox="images" data-caption="" class="link lightbox-image"><span class="icon fa fa-search"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <?php if (!empty($image['title'])) :?>
                                <?php if (!empty($image['link'])) :?>
                                    <h3><a href="<?= $image['link']?>"><?= $this->escape($image['title'])?></a></h3>
                                <?php else :?>
                                    <h3><?= $this->escape($image['title'])?></h3>
                                <?php endif;?>
                            <?php endif;?>
                            <?php if (!empty($image['desc'])) :?>
                                <div class="designation"><?= $this->escape($image['desc'])?></div>
                            <?php endif;?>
                        </div>
                    </div>
                <?php endforeach;?>
            </div>
        </div>
    <?php endif;?>