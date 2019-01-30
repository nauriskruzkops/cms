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

?>
<div class="row">
    <div class="col">
        <div class="form-group">
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
    <div class="col"></div>
    <div class="col-md-4 col-sm-8">
        <div class="input-group">
            <input type="hidden" name="<?= $formBlockView->vars['full_name']?>[id]" value="<?= $blockData->getId()?>">
            <?= $formHelper->widget($formBlockView['title'])?>
            <?= $formHelper->widget($formBlockView['type'])?>
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
                    ])?>">
                        <?= $view['translator']->trans('Adm:Delete') ?></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>


