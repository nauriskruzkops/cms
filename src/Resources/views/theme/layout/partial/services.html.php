<?php

/* background-image: url(<?= $view['assets']->getUrl('images/49656421_296765910978084.jpg', 'theme') ?>) */
/* background-color: #b2b2b2 */

/**
 * @var \Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables $app
 * @var \Symfony\Component\Templating\PhpEngine $view
 * @var \Shared\Entity\Post[] $services
 */

?>
<?php if ($services) :?>
    <div class="title-box">
        <h2>Ko mēs darām</h2>
        <div class="text">
            SIA „VIT BŪVE” nozīmīga priekršrocība ir uzņēmumam piederoša plaša un koka konstrukciju ražošanas procesa specifikai pielāgota rūpnīca, kas nodrošina iespēju ne vien garantēt saražotās produkcijas augstu kvalitāti
        </div>
    </div>
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

    <div class="clearfix"></div>
<?php endif;?>