<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var FormHelper $formHelper
 * @var Form $block
 * @var \Shared\Entity\PageBlocks $blockData
 * @var integer $blockKey
 */

$formHelper = $view['form'];
$blockData = $block->getData();
$formBlockView = $block->createView();
$formBlockConfig = $blockData->getConfig() ?? [];
?>
<div class="block-header">
    <div class="form-row form-inline">
        <input type="hidden" name="<?= $formBlockView->vars['full_name']?>[id]" value="<?= $blockData->getId()?>">
        <div class="col-auto">
            <div class="form-group" data-toggle="tooltip" title="Page block is">
                <?= $formHelper->widget($formBlockView['isPublic'], [
                    'attr' => [
                        'data-toggle' => 'toggle',
                        'data-on' => $view['translator']->trans('Adm:Public'),
                        'data-off' => $view['translator']->trans('Adm:Hide'),
                        'data-size' => 'small',
                        'data-onstyle' => 'success',
                    ]
                ]) ?>
            </div>
        </div>

        <?php /*
            <div class="form-group">
                <div class="custom-file" data-toggle="tooltip" title="Background image">
                    <input type="file" class="custom-file-input" name="<?= $formBlockView->vars['full_name']?>[config][bg_image]">
                    <label class="custom-file-label"></label>
                </div>
            </div>
            */
        ?>

        <div class="col-auto">
            <div class="form-group mx-2">
                <input type="color" value="<?= $formBlockConfig['bg_color'] ?? ''?>" class="form-control" name="<?= $formBlockView->vars['full_name']?>[config][bg_color]" data-toggle="tooltip" title="Background color" style="width: 50px" >
            </div>
        </div>

        <div class="col">
            <?= $formHelper->widget($formBlockView['title'], ['attr' => ['data-toggle'=>'tooltip', 'title'=>'Block title']])?>
            <?= $formHelper->widget($formBlockView['type'])?>
        </div>

        <div class="col-auto pull-right">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-gears"></i>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item disabled" href="<?= $view['router']->path('adm_pageblock_move', [
                        'id' => $blockData->getId(),
                        'direction' => 'up',
                    ]) ?>"><?= $view['translator']->trans('Adm:MoveUp') ?></a>
                    <a class="dropdown-item disabled" href="<?= $view['router']->path('adm_pageblock_move', [
                        'id' => $blockData->getId(),
                        'direction' => 'down',
                    ]) ?>"><?= $view['translator']->trans('Adm:MoveDown') ?></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item disabled" href="<?= $view['router']->path('adm_pageblock_delete', [
                        'id' => $blockData->getId()
                    ])?>" onclick="if(!confirm('<?= $view['translator']->trans('Adm:Are you sure you want to delete this?') ?>', false)){return false;}">
                        <?= $view['translator']->trans('Adm:Delete') ?></a>
                </div>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="sp10"></div>
</div>


