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
<?php if ($block->getPost()) :?>
<aside class="row" style="<?= $pageHelper->blockBackground($block)?>">
    <div class="container">
        <?php if (!empty($block->getTitle())) :?>
            <?php if ($key === 0) :?>
                <?php if ($pageHelper->hasHeaderTitle()) :?>
                    <div class="sec-title">
                        <h2><?= $this->escape($block->getTitle())?></h2>
                    </div>
                <?php endif;?>
            <?php else: ?>
                <div>
                    <h2><?= $this->escape($block->getTitle())?></h2>
                </div>
            <?php endif; ?>
        <?php endif;?>
        <?= $block->getPost()->getText()?>
    </div>
</aside>
<?php endif;?>