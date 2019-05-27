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
            <td>
               <?= $this->escape($translation->getKey())?>
            </td>
            <td>.</td>
            <td>.</td>
            <td class="text-right">
                <a href="" class="btn btn-sm btn-default btn-outline-primary">Change</a>
            </td>
        </tr>
    <?php endforeach;?>
</tbody>
