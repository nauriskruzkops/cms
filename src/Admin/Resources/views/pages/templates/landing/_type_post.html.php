<?php

use Shared\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var FormHelper $formHelper
 * @var \Shared\Entity\PageBlocks $block
 * @var integer $blockKey
 */

$formHelper = $view['form'];
$blockData = $block->getData();
$formBlockView = $block->createView();

?>

<?php $blockData = $block->getData(); ?>
<?php $formBlockView = $block->createView(); ?>
<input type="hidden" name="<?= $formBlockView['post']->vars['full_name']?>" value="<?= $formBlockView['post']->vars['value']?>">
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
    <div class="col-4">
        <div class="input-group">
            <?= $formHelper->widget($formBlockView['title'])?>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-gears"></i>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item disabled" href="#">Add new (above)</a>
                    <a class="dropdown-item disabled" href="#">Add new (after)</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item disabled" href="#">Move up</a>
                    <a class="dropdown-item disabled" href="#">Move down</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item disabled" href="#">Delete</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="clearfix"></div>
<div id="post_text_<?=$blockKey?>" class="form-control-editor" <?php
    ?>data-post-id="<?= $formBlockView['post']->vars['value']?>" <?php
    ?>data-post-name="page_form[blocks][<?= $blockKey?>][post_text]" <?php
    ?>style="height: 300px">
        <?= $blockData->getPost() ? $blockData->getPost()->getText() : ''?>
</div>

<?php if ($blockKey === 0) :?>
    <hr>
<?php endif;?>

