<?php

/* background-image: url(<?= $view['assets']->getUrl('images/49656421_296765910978084.jpg', 'theme') ?>) */
/* background-color: #b2b2b2 */

/**
 * @var \Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables $app
 * @var \Symfony\Component\Templating\PhpEngine $view
 * @var \Shared\Entity\Post[] $services
 */

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
                                        <div class="text"><?= $service->getText() ?></div>
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
