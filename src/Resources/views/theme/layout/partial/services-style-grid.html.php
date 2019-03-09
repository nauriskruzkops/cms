<?php

/* background-image: url(<?= $view['assets']->getUrl('images/49656421_296765910978084.jpg', 'theme') ?>) */
/* background-color: #b2b2b2 */

/**
 * @var \Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables $app
 * @var \Symfony\Component\Templating\PhpEngine $view
 * @var \Admin\Entity\Post[] $services
 */

?>
<section class="services-section-two style-two page-block">
    <div class="title-box">
        <h2><?= $this->escape($title)?></h2>
        <div class="text"><?= $description?></div>
    </div>

    <?php if ($services) :?>
        <?php foreach ($services as $service) : ?>
            <div class="service-block-three col-md-4 col-sm-6 col-xs-12">
                <div class="inner-box">
                    <div class="image">
                        <img src="/uploads/<?= $service->getImage() ?>" alt="">
                    </div>
                    <div class="lower-content">
                        <div class="text">
                            <?= $service->getText() ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach;?>
    <?php endif;?>
    <div class="clearfix"></div>
</section>
