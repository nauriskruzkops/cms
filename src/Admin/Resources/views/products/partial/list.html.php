<?php

use Admin\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Product[] $products
 * @var string $locale
 */

?>
<tbody>
    <tr>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td class="text-right">
            <a href="" class="btn btn-sm btn-outline-primary"><?= $view['translator']->trans('Adm:Edit') ?></a>
        </td>
    </tr>
</tbody>
