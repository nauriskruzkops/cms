<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Form $form
 * @var \Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper $formHelper
 * @var \Admin\Entity\Post $post
 */

$formView = $form->createView();
$formHelper = $view['form'];
$request = $app->getRequest();
$post = $form->getData();
?>

<div class="form-group">
    <label><?= $formView['title']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['title']) ?>
    <?= $formHelper->errors($formView['title']) ?>
</div>

<div class="form-group">
    <label><?= $formView['slag']->vars['label'] ?></label>
    <?= $formHelper->widget($formView['slag']) ?>
    <?= $formHelper->errors($formView['slag']) ?>
</div>

<div class="row">
    <div class="col-6">
        <div class="form-group">
            <label><?= $formView['categories']->vars['label'] ?></label>
            <div class="form-check">
                <?php foreach ($form->get('categories') as $category) :?>
                    <label class="form-check-label">
                        <?= $formHelper->widget($category->createView()) ?>
                        <?= $category->createView()->vars['label'] ?>
                    </label><br>
                <?php endforeach;?>
            </div>
            <?= $formHelper->errors($formView['categories']) ?>
        </div>
    </div>
    <div class="col-6">
        <div class="custom-file">
            <input type="file" class="custom-file-input" id="post_image" name="post_image">
            <label class="custom-file-label" for="post_image"><?= $view['translator']->trans('Adm:ChooseFile') ?></label>
        </div>

        <?php if ($post->getImage()) :?>
            <a href="<?= $view['assets']->getUrl($post->getImage(),'upload')?>">
                <img src="<?= $view['assets']->getUrl($post->getImage(),'upload')?>" style="width: 100%">
            </a>
            <div class="text-right">
                <a href="" class="btn btn-sm btn-default">Delete image</a>
            </div>
        <?php endif;?>
    </div>
</div>

<div class="form-check">
    <label class="form-check-label">
        <?= $formHelper->widget($formView['public']) ?>
        <?= $formView['public']->vars['label'] ?>
    </label>
</div>

