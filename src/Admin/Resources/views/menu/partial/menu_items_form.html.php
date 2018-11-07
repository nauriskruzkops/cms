<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Form $form
 * @var FormHelper $formHelper
 * @var \Shared\Entity\MenuItems $menuItem
 */

$formView = $form->createView();
$formHelper = $view['form'];
$menu = $form->getData();


?>
<div class="col-12">
    <h3><?= $view['translator']->trans('Adm:MenuItems') ?></h3>
    <hr>
    <div class="row">
        <div class="col-md-12 col-lg-3">
            <div class="">
                <div class="list-group">
                    <?php foreach ($form->getIterator() as $arrayKey => $formItems) :?>
                        <?php $menuItem = $formItems->getData()?>
                        <a href="#" class="list-group-item list-group-item-action" data-action="show-menu-item" data-item="<?= $menuItem->getId()?>"<?=
                            ''?>style="margin-left: <?= ($menuItem->getLevel()*20)?>px;?>px">
                            <span data-source="menu-item-name">
                                <?= $this->escape($menuItem->getTitle())?>
                            </span>
                            <span class="pull-right" style="margin-top: -5px">
                                <?= $formHelper->widget($formItems->createView()['enabled'], [
                                    'attr' => [
                                        'data-toggle' => 'toggle',
                                        'data-on' => $view['translator']->trans('Adm:On'),
                                        'data-off' => $view['translator']->trans('Adm:Off'),
                                        'data-size' => 'small',
                                        'data-onstyle' => 'success',
                                    ]
                                ]) ?>
                            </span>
                        </a>
                    <?php endforeach;?>
                </div>
                <div class="sp5"></div>
                <a href="#" class="btn btn-secondary btn-sm" data-action="show-menu-item" data-item="0">
                    <i class="fa fa-plus"></i> <?= $view['translator']->trans('Adm:AddNewMenuItem') ?>
                </a>
            </div>
            <div class="sp10"></div>
        </div>
        <div class="d-md-block col-md-1"></div>
        <div class="col-md-12 col-lg-8">
            <?php foreach ($form->getIterator() as $arrayKey => $formItems) :?>
                <?php $menuItem = $formItems->getData()?>
                <div data-action="show-menu-item-settings" data-content="<?= $menuItem->getId()?>" style="display: none">
                    <?= $view->render('@AdminBundle/Resources/views/menu/partial/menu_items_form_row.html.php',[
                        'form' => $formItems,
                        'menu' => $menu,
                    ])?>
                </div>
            <?php endforeach;?>
            <div data-action="show-menu-item-settings" data-content="0" style="display: none">
                <?= $view->render('@AdminBundle/Resources/views/menu/partial/menu_items_form_row.html.php',[
                    'form' => $formView->vars['prototype'],
                    'menu' => $menu,
                    'new' => true,
                ])?>
            </div>
        </div>
    </div>
</div>

<script>
$(function () {
    $('[data-action=show-menu-item]').click(function (e) {
        e.preventDefault();
        $('[data-action=show-menu-item]').removeClass('list-group-item-info');
        $('[data-action=show-menu-item-settings]').hide();

        var self = this;
        $(self).addClass('list-group-item-info');

        var menuItemID = $(self).data('item');
        var menuItem = $('[data-content='+menuItemID+']');
            menuItem.show();
        if (menuItemID === 0) {
            $('input, select', menuItem).removeAttr('disabled');
        } else {
            $('input, select', $('[data-content=0]')).attr('disabled','disabled');
        }
    });
    $('[data-action=show-menu-item]').first().click();

    $('#toggle-two').bootstrapToggle({
        on: 'Enabled',
        off: 'Disabled'
    });
})
</script>
