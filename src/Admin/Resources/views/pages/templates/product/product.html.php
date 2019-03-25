<?php

use Admin\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Post[] $posts
 * @var FormHelper $formHelper
 * @var Form $form
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
                <div class="white-box">
                    <?php if ($pageBlocks->getType()) :?>
                        <?= $view->render(sprintf('@AdminBundle/Resources/views/pages/templates/landing/_type_%s.html.php', $pageBlocks->getType()),[
                            'form' => $form,
                            'block' => $block,
                            'blockKey' => $blockKey,
                        ])?>
                    <?php endif; ?>
                </div>
            </div>
        <?php  endif;?>
    <?php endforeach;?>
</div>