<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Admin\Entity\Settings[] $settings
 * @var integer $page
 */
?>
<div class="table-responsive">
<table class="table table-sm table-hover">
    <thead>
        <tr>
            <th style="width: 5%">#</th>
            <th style="width: 30%"><?= $view['translator']->trans('Adm:Title') ?></th>
            <th style="width: 60%"><?= $view['translator']->trans('Adm:Value') ?></th>
            <th><?= $view['translator']->trans('Adm:Transl.') ?></th>
            <th> </th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($settings as $setting) :?>
            <tr>
                <td><?= $setting->getId()?></td>
                <td>
                    <a href="<?= $view['router']->path('adm_settings_change', ['key' => $setting->getKey()]) ?>"><?= $this->escape($setting->getTitle())?></a>
                    <p class="small text-muted"><?=$this->escape($setting->getKey())?></p>
                </td>
                <td>
                    <?php if ($setting->getValues() && !$setting->getValues()->isEmpty()) :?>
                        <div class="card">
                            <ul class="list-group list-group-flush">
                            <?php foreach ($setting->getValues() as $collectionValue) :?>
                                <li class="list-group-item text-">
                                    <div class="row">
                                        <div class="col-6"><?= $collectionValue->getKey()?></div>
                                        <div class="col-6"><?= $collectionValue->getValue()?></div>
                                    </div>
                                </li>
                            <?php endforeach;?>
                            </ul>
                        </div>
                    <?php else :?>
                        <b><?= $this->escape($setting->getValue())?></b>
                    <?php endif;?>
                </td>
                <td>
                    <?= $setting->getTranslatable() ? $view['translator']->trans('Adm:Yes') : $view['translator']->trans('Adm:No')?>
                </td>
                <td>
                    <a class="btn btn-sm btn-default" href="<?= $view['router']->path('adm_settings_change', ['key' => $setting->getKey()]) ?>"><?= $view['translator']->trans('Adm:edit') ?></a>
                </td>
            </tr>
        <?php endforeach;?>
    </tbody>
</table>
</div>