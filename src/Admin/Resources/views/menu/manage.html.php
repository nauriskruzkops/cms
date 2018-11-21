<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Symfony\Component\Form\Form $form
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 * @var \Shared\Entity\Menu $menu
 * @var \Shared\Entity\MenuItems[] $menuItems
 * @var \Symfony\Component\Form\FormErrorIterator $formError
 */

$view->extend('AdminBundle::layout/layout.html.php');

$formView = $form->createView();
$formHelper = $view['form'];

$request = $app->getRequest();

$view['slots']->set('pageTitle', 'Add / Edit menu');
$view['slots']->set('pageIcon', 'fa fa-user-o');

$isNewRecord = (!$menu->getId());

?>
<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['slots']->get('pageTitle')?></h1>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-light" href="<?= $view['router']->path('adm_menu_list') ?>"><?= $view['translator']->trans('Adm:List') ?></a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <?= $formHelper->start($formView);?>
            <div class="">
                <div class="col-12-sm">
                    <div class="row">
                        <?= $view->render('@AdminBundle/Resources/views/menu/partial/menu_form.html.php',[
                            'form' => $form,
                            'menu' => $menu
                        ])?>
                    </div>
                </div>
            </div>

            <div class="white-box">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <?= $view->render('@AdminBundle/Resources/views/menu/partial/menu_items_form.html.php',[
                                    'form' => $form->get('items'),
                                    'menu' => $menu,
                            ])?>
                        </div>
                    </div>
                </div>
            </div>

            <hr>
            <div class="form-group text-right">
                <button class="btn btn-primary" type="submit"><?= $view['translator']->trans('Adm:Save') ?></button>
                <a href="<?= $view['router']->path('adm_menu_list') ?>" class="btn btn-link"><?= $view['translator']->trans('Adm:Cancel') ?></a>
                <?php if (!$isNewRecord) :?>
                    <button class="btn btn-light" type="submit" name="delete_menu">
                        <i class="fa fa-trash"></i>
                    </button>
                <?php endif;?>
            </div>

        <?= $formHelper->end($formView, ['render_rest' => false]);?>
    </div>
</div>

