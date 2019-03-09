<?php

use Admin\Entity\Menu;
use Admin\Entity\MenuItemRelation;
use Admin\Entity\MenuItems;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Form|MenuItems $form
 * @var FormHelper $formHelper
 * @var MenuItems $menuItem
 * @var Menu $menu
 * @var MenuItemRelation $formRelations
 */

$new = $new ?? false;
$formView = $new ? $form : $form->createView();
$formHelper = $view['form'];
$menuItem = $new ? null : $form->getData();

?>

<h5>
    <span style="font-weight: normal"><?= $view['translator']->trans('Adm:MenuItemSettings') ?>:</span>
    <span data-target="menu-item-title"><?= $this->escape($new ? '' : $menuItem->getTitle())?></span>
</h5>
<hr>
<div class="sp10"></div>

<?php if ($new) :?>
    <div class="row">
        <div class="col-lg-6">
            <div class="form-group">
                <div class="row input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <?= $formView['title']->vars['label'] ?>
                        </span>
                    </div>
                    <?= $formHelper->errors($formView['title']) ?>
                    <?= $formHelper->widget($formView['title'], ['attr' => ['disabled' => 'disabled']]) ?>
                </div>
                <div class="row input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <?= $formView['slug']->vars['label'] ?>
                        </span>
                    </div>
                    <?= $formHelper->errors($formView['slug']) ?>
                    <?= $formHelper->widget($formView['slug'], ['attr' => ['disabled' => 'disabled']]) ?>
                </div>
                <div class="row input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <?= $formView['parent']->vars['label'] ?>
                        </span>
                    </div>
                    <?= $formHelper->errors($formView['parent']) ?>
                    <?= $formHelper->widget($formView['parent'], ['attr' => ['disabled' => 'disabled']]) ?>
                </div>
            </div>

        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <div class="row input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <?= $formView['type']->vars['label'] ?>
                        </span>
                    </div>
                    <?= $formHelper->errors($formView['type']) ?>
                    <?= $formHelper->widget($formView['type'], ['attr' => ['disabled' => 'disabled']]) ?>
                </div>
            </div>
        </div>
    </div>

<?php else :?>

    <div class="row">
        <div class="col-lg-6">
            <div class="form-group">
                <div class="row input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <?= $formView['title']->vars['label'] ?>
                        </span>
                    </div>
                    <?= $formHelper->errors($formView['title']) ?>
                    <?= $formHelper->widget($formView['title'], ['attr' => []]) ?>
                </div>
                <div class="row input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <?= $formView['parent']->vars['label'] ?>
                        </span>
                    </div>
                    <?= $formHelper->errors($formView['parent']) ?>
                    <?= $formHelper->widget($formView['parent'], ['attr' => []]) ?>
                </div>
                <div class="row input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <?= $formView['slug']->vars['label'] ?>
                        </span>
                    </div>
                    <?= $formHelper->errors($formView['slug']) ?>
                    <?= $formHelper->widget($formView['slug'], ['attr' => [
                        'readonly' => 'readonly'
                    ]]) ?>
                </div>
                <div class="row input-group mb-3">
                    <label>Order position</label>
                    <div class="input-group">
                        <span class="pull-right" style="margin-right: 5px">
                            <a class="small text-muted" href="<?= $view['router']->path('adm_menu_item_move', [
                                'item' => $menuItem->getId(), 'direction' => 'up'
                            ]) ?>">Move up <i class="fa fa-arrow-up"></i></a>
                            <a class="small text-muted" href="<?= $view['router']->path('adm_menu_item_move', [
                                'item' => $menuItem->getId(), 'direction' => 'down'
                            ]) ?>">Move down <i class="fa fa-arrow-down"></i></a>
                        </span>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <div class="row input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <?= $formView['type']->vars['label'] ?>
                        </span>
                    </div>
                    <?= $formHelper->errors($formView['type']) ?>
                    <?= $formHelper->widget($formView['type'], ['attr' => []]) ?>
                </div>
                <?php if ($formView['relations'] ?? false) :?>
                    <?php foreach ($formView['relations']->getIterator() as $arrayKey => $formRelations) :?>
                        <?= $view->render('@AdminBundle/Resources/views/menu/partial/menu_relation_form_row.html.php',[
                            'form' => $formRelations,
                        ])?>
                    <?php endforeach;?>

                    <?= $view->render('@AdminBundle/Resources/views/menu/partial/menu_relation_form_row.html.php',[
                        'form' => $formView['relations']->vars['prototype'],
                        'new' => true,
                    ])?>
                <?php endif;?>
            </div>
        </div>
    </div>

<?php endif;?>






