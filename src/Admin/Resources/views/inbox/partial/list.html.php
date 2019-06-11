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
                <span class="text-muted small" style="white-space: nowrap">
                    <i class="fa fa-clock-o"></i> <?= $this->escape($message->getCreatedAt()->format('Y-m-d H:i:s'))?></span>
                <br>
                <span class="text-muted small">IP: <?= $this->escape($message->getIpAddress())?></span>
            </td>
            <td>
                <span class="small"><?= $view['translator']->trans('Adm:Email') ?>: <?= $this->escape($message->getEmail())?></span>
                <br>
                <span class="small"><?= $view['translator']->trans('Adm:Phone') ?>: <?= $this->escape($message->getPhone())?></span>
            </td>

            <td>
                <?= $view['translator']->trans('Adm:Topic') ?>: <?= $this->escape($message->getTopic())?>
                <br>
                <?=  nl2br($this->escape($message->getMessage()))?>
            </td>
            <td class="text-right">
                <button class="btn btn-sm btn-outline-danger" data-target="delete-message" data-delete-url="<?=  $view['router']->path('adm_inbox_delete', ['id' => $message->getId()]) ?>">
                    <i class="fa fa-trash-o" title="<?= $view['translator']->trans('Adm:Delete') ?>"></i>
                </button>
            </td>
        </tr>
    <?php endforeach;?>
</tbody>

<script type="application/javascript" >
    $(function () {
        $('[data-target=delete-message]').click(function () {
            if (confirm("Are you sure you want to delete this message?") !== true) {
                return false;
            }
            let deleteForm = $('<form method="post">');
            let self = this;
            $(deleteForm).prop('action', $(self).data('delete-url'));
            $(deleteForm).appendTo('body');
            deleteForm.submit();
            deleteForm.remove();
        })
    })
</script>
