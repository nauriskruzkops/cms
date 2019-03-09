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

?>
<section class="services-section-three page-block" style="<?= $pageHelper->blockBackground($block)?>">
    <div class="auto-container">
        <?= $view['actions']->render(
            new \Symfony\Component\HttpKernel\Controller\ControllerReference('App\\Controller\\ServicesController::partialByCategory',[
                'request' => $app->getRequest(),
                'params' => $block
            ])
        ) ?>
    </div>
</section>
