<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Admin\Entity\Storage[] $images
 */
?>

<?php foreach ($images as $image) :?>
    <div class="storage-image-item col-auto image-md-item" data-target="storage-item">
        <img src="<?= $view['assets']->getUrl($image->getFile(),'upload')?>" data-id="<?= $image->getId()?>" data-url="<?= $image->getFile()?>">
    </div>
<?php endforeach;?>

