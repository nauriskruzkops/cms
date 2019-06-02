<?php

use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Admin\Entity\Translation[]|ArrayCollection $translations
 * @var \Admin\Entity\Translation $translationKey
 * @var string $locale
 */
$view->extend('AdminBundle::layout/layout.html.php');
?>

<div class="page-title">
    <div class="row">
        <div class="col-6">
            <h1><?= $view['translator']->trans('Adm:Translation') ?> : <?= $view['translator']->trans('Adm:Edit') ?></h1>
        </div>
        <div class="col-6 text-right">
            ...
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <div class="white-box">
            <form action="<?=  $view['router']->path('adm_translation_edit', ['id' => $translationKey->getId()])?>" method="post">

                <div class="form-group row">
                    <label for="staticGroup" class="col-sm-2 col-form-label"><?= $view['translator']->trans('Adm:Group') ?></label>
                    <div class="col-sm-10">
                        <p class="form-control-plaintext"><?= $translationKey->getGroup()?></p>
                        <input type="hidden" name="translation_id" value="<?= $translationKey->getId()?>">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticKey" class="col-sm-2 col-form-label"><?= $view['translator']->trans('Adm:Translate') ?></label>
                    <div class="col-sm-10">
                        <p class="form-control-plaintext"><?= $translationKey->getKey()?></p>
                        <input type="hidden" name="translation_group" value="<?= $translationKey->getGroup()?>">
                    </div>
                </div>

                <hr>

                <?php foreach ($view['settings']->values('languages') as $langCode => $lang) :?>
                    <?php $value = $translations->filter(function (\Admin\Entity\Translation $translation) use ($langCode) {
                        return ($translation->getLocale() === $langCode);
                    })->first()?>
                    <div class="form-group row">
                        <label for="translate-<?= $langCode?>" class="col-sm-2 col-form-label"><?= $lang?></label>
                        <div class="col-sm-10">
                            <textarea type="text" class="form-control" id="translate-<?= $langCode?>" name="translation[<?= $langCode?>]"><?= $value ? $value->getValue() : ''?></textarea>
                        </div>
                    </div>
                <?php endforeach;?>

                <hr>

                <div class="form-group">
                    <div class="col-sm-10 offset-sm-2">
                        <input class="btn btn-success" type="submit" name="btn_save" value="<?= $view['translator']->trans('Adm:Save') ?>">
                        <button class="btn btn-success" name="btn_save_exit" type="submit"><?= $view['translator']->trans('Adm:SaveAndExit') ?></button>
                        <a href="<?= $view['router']->path('adm_translation') ?>" class="btn btn-outline-success"><?= $view['translator']->trans('Adm:Back') ?></a>
                    </div>
                </div>

            </form>

        </div>
    </div>
</div>

