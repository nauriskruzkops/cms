<?php

/* background-image: url(<?= $view['assets']->getUrl('images/49656421_296765910978084.jpg', 'theme') ?>) */
/* background-color: #b2b2b2 */

/**
 * @var \Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables $app
 * @var \Symfony\Component\Templating\PhpEngine $view
 * @var \Shared\Entity\Post[] $services
 */

/** @var \App\Helpers\PostHelper $postHelper */
$postHelper = $view['post'];

?>

<section class="services-section-two style-two page-block">
    <div class="auto-container">
        <div class="sec-title">
            <h2><?= $this->escape($title)?></h2>
            <div class="text"><?= $description?></div>
        </div>
        <div class="four-item-carousel owl-carousel owl-theme">
            <?php if ($services) :?>
                <?php foreach ($services as $service) : ?>
                    <?php $serviceContent = $postHelper->splittedContent($service); ?>
                    <div class="service-block-two">
                        <div class="inner-box">
                            <div class="flip-container" >
                                <div class="flipper">
                                    <div class="front">
                                        <div class="icon-box">
                                            <span class="icon">
                                                <img src="<?=$view['assets']->getUrl($service->getImage(), 'upload')?>" alt="">
                                            </span>
                                        </div>
                                        <h3><?= $service->getTitle() ?></h3>
                                        <div class="text"><?= ($postHelper->splittedContent($service)[0]) ?></div>
                                    </div>
                                    <div class="back">
                                        <div class="overlay-box">
                                            <div class="overlay-inner">
                                                <div class="overlay-content">
                                                    <h4><?= $service->getTitle() ?></h4>
                                                    <div class="overlay-text">
                                                        <?= ($postHelper->splittedContent($service)[1]?? '') ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach;?>
            <?php endif;?>
        </div>
    </div>
</section>

<div class="clearfix"></div>
