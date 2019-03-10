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
 * @var \Admin\Entity\PageBlocks $blockData
 * @var integer $blockKey
 */

$formHelper = $view['form'];
$blockData = $block->getData();
$formBlockView = $block->createView();
$formBlockConfigView = $block->get('config')[0]->createView();
$formBlockConfig = $blockData->getConfig()[0] ?? [];

?>
<div class="block-header">
    <div class="form-row form-inline">
        <input type="hidden" name="<?= $formBlockView->vars['full_name']?>[id]" value="<?= $blockData->getId()?>">
        <?= $formHelper->widget($formBlockView['type'])?>
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

        <div class="col-auto">
            <div class="form-group">
                <?= $formHelper->widget($formBlockConfigView['bg_color'], ['attr' => ['class' => 'form-control', 'style'=>'width:50px']])?>
            </div>
        </div>
        <div class="col-auto">
            <?php $bgImage = $formBlockConfig['bg_image'] ?? ''; ?>
            <div class="form-group" style="<?= $bgImage ? '':'display:none'?>">
                <p class="form-control-plaintext">
                    <a target="_blank" class="text-muted" href="<?=$view['assets']->getUrl($bgImage, 'upload')?>" >... <?= mb_substr($bgImage, strlen($bgImage)-10)?></a>

                    <a href="" data-toggle="tooltip" title="Remove image?" class="small btn btn-sm btn-danger" onclick="deleteBlockImage(this); return false;">
                        <i class="fa fa-close"></i>
                    </a>

                    <a href="" data-toggle="tooltip" title="Change image?" class="small btn btn-sm btn-primary" onclick="$('.custom-file-input', $(this).parents('.col-auto')).click(); return false;">
                        <i class="fa fa-close"></i>
                    </a>
                </p>
            </div>
            <div class="custom-file" style="<?= $bgImage ? 'display:none':''?>">
                <input type="file" class="custom-file-input" name="<?= $formBlockConfigView['bg_image_upload']->vars['full_name']?>">
                <label class="custom-file-label"><?= $view['translator']->trans('Adm:ChooseFile') ?></label>
                <?= $formHelper->widget($formBlockConfigView['bg_image'], ['attr' => ['class' => '_block_bg_image']])?>
            </div>
        </div>
        <div class="col-auto">
            <?= $formHelper->widget($formBlockConfigView['bg_transparent'], ['attr' => ['class' => '']])?> <?= $view['translator']->trans('Adm:Transparent') ?>
        </div>

        <div class="col">
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
            <div class="col-auto pull-right">
                <?= $formHelper->widget($formBlockView['title'], ['attr' => ['data-toggle'=>'tooltip', 'title'=>'Block title']])?>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="sp10"></div>
</div>
<script>
    function deleteBlockImage(_object) {
        if(confirm('<?= $view['translator']->trans("Adm:Are you sure you want to delete this?") ?>', false)){
            var col = $(_object).parents('.col-auto');
            $('.form-group', col).hide();
            $('.custom-file', col).show();
            $('._block_bg_image', $('.custom-file', col)).val('');
        }
        return false;
    }
</script>


