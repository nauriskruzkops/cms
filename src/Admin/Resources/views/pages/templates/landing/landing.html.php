<?php

use Shared\Entity\Page;
use Shared\Entity\PageBlocks;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var FormHelper $formHelper
 * @var Form $form
 * @var Page $page
 * @var PageBlocks $pageBlocks
 */

$formView = $form->createView();
$formHelper = $view['form'];

?>
<div id="blocks-container">
    <?php foreach ($form->get('blocks') as $blockKey => $block) :?>
        <?php $pageBlocks = $block->getData(); ?>
        <?php if ($pageBlocks) :?>
            <div class="blocks-container-item">
                <?= $view->render(sprintf('@AdminBundle/Resources/views/pages/templates/landing/_type_header.html.php', 'post'),[
                    'form' => $form,
                    'block' => $block,
                    'blockKey' => $blockKey,
                ])?>
                <?php if ($pageBlocks->getType()) :?>
                    <?= $view->render(sprintf('@AdminBundle/Resources/views/pages/templates/landing/_type_%s.html.php', $pageBlocks->getType()),[
                        'form' => $form,
                        'block' => $block,
                        'blockKey' => $blockKey,
                    ])?>
                <?php endif; ?>
            </div>
        <?php  endif;?>
    <?php endforeach;?>
</div>
<hr>

<div class="btn-group dropright">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <?= $view['translator']->trans('Adm:AddNewBlock') ?>:
    </button>
    <div class="dropdown-menu">
        <?php foreach (PageBlocks::TYPES as $availableType) :?>
            <a class="dropdown-item" data-target="add-new-block" href="<?= $view['router']->path('adm_pageblock_add', ['page_id'=>$page->getId(), 'type' => $availableType]) ?>">
                <?= $view['translator']->trans('Adm:'.ucfirst($availableType)) ?>
            </a>
        <?php endforeach;?>
    </div>
</div>