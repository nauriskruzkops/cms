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
                <?php if ($pageBlocks->getPost()) :?>
                    <?= $view->render(sprintf('@AdminBundle/Resources/views/pages/templates/landing/_type_%s.html.php', 'post'),[
                        'form' => $form,
                        'block' => $block,
                        'blockKey' => $blockKey,
                    ])?>
                <?php else :?>
                    <?= $view->render(sprintf('@AdminBundle/Resources/views/pages/templates/landing/_type_%s.html.php', 'list'),[
                        'form' => $form,
                        'block' => $block,
                        'blockKey' => $blockKey,
                    ])?>
                <?php endif;?>
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
        <a class="dropdown-item" href="#" data-action="add_post_block"><?= $view['translator']->trans('Adm:Post') ?></a>
        <a class="dropdown-item" href="#" data-action="add_list_block"><?= $view['translator']->trans('Adm:List') ?></a>
        <a class="dropdown-item" href="#" data-action="add_array_block"><?= $view['translator']->trans('Adm:Params') ?></a>
    </div>
</div>
<script type="text/javascript">
    $(function () {
        var lastBlockKey = <?= $blockKey ?? 0?>;
        $('[data-action=add_post_block]').click(function (v) {
            var newPostEditor = $('<div class="form-control-editor">');
            newPostEditor.height(300);
            newPostEditor.attr('data-post-name', 'page_form[new_block]['+lastBlockKey+'][post_text]');
            var newPostField1 = $('<input type="hidden" name="page_form[new_block]['+lastBlockKey+'][post]" value="new">');
            var newPostBlock = $('<div>');
            newPostBlock.append(newPostEditor);
            newPostBlock.append(newPostField1);
            $('#blocks-container').append(newPostBlock);
            lastBlockKey++;
        });
        $('[data-action=add_list_block]').click(function (v) {
            var newPostField1 = $('<input type="hidden" name="page_form[new_block]['+lastBlockKey+'][list]" value="new">');
            var newPostBlock = $('<div>').height(100).html('Please, as first save the page!');
            newPostBlock.append(newPostField1);
            $('#blocks-container').append(newPostBlock);
            lastBlockKey++;
        });
    })
</script>

</script>