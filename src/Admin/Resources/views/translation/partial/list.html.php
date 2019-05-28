<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var \Admin\Entity\Translation[] $translations
 */

?>
<tbody>
    <?php foreach ($translations as $translation) :?>
        <tr>
            <td><?= $this->escape($translation['key'])?></td>
            <td><?= $this->escape($translation['group'])?></td>
            <?php foreach ($view['settings']->values('languages') as $langCode => $lang) :?>
                <td></td>
            <?php endforeach;?>
            <td class="text-right">
                <a href="<?=  $view['router']->path('adm_translation_edit', ['id' => $translation['id']])?>" class="btn btn-sm btn-default btn-outline-primary">
                    <?= $view['translator']->trans('Change')?>
                </a>
            </td>
        </tr>
    <?php endforeach;?>
</tbody>
