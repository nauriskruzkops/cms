<?php

use App\Helpers\PageHelper;
use Shared\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page $page
 * @var \Shared\Entity\PageBlocks $block
 * @var PageHelper $pageHelper
 * @var int $key
 */

$pageHelper = $view['page']($block->getPage());

?>
<aside class="row" style="<?= $pageHelper->blockBackground($block)?>">
    <div class="container">
        <?= $view['actions']->render(
            new \Symfony\Component\HttpKernel\Controller\ControllerReference('App\\Controller\\ServicesController::partialByCategory',[
                'request' => $app->getRequest(),
                'params' => $block
            ])
        ) ?>
    </div>
</aside>
