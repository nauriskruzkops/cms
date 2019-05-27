<?php

use Admin\Entity\Inbox;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Inbox[] $messages
 * @var string $locale
 */

?>
<tbody>
    <?php foreach ($messages as $message) :?>
        <tr>
            <td>
               <strong><?= $this->escape($message->getSender())?></strong>
                <br>
                <span class="text-muted small">
                    <i class="fa fa-clock-o"></i> <?= $this->escape($message->getCreatedAt()->format('Y-m-d H:i:s'))?></span>
                <br>
                <span class="text-muted small">IP: <?= $this->escape($message->getId())?></span>
            </td>
            <td>
                <span class="small">Email: <?= $this->escape($message->getEmail())?></span>
                <br>
                <span class="small">Phone: <?= $this->escape($message->getPhone())?></span>
            </td>

            <td>
                Topic: <?= $this->escape($message->getTopic())?>
                <br>
                <?= $this->escape($message->getMessage())?>
            </td>
            <td class="text-right"> </td>
        </tr>
    <?php endforeach;?>
</tbody>
