<?php

use Shared\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var FormHelper $formHelper
 * @var Form $block
 * @var \Shared\Entity\PageBlocks $blockData
 * @var integer $blockKey
 */

$formHelper = $view['form'];
$blockData = $block->getData();
$formBlockView = $block->createView();

?>
<input type="hidden" name="<?= $formBlockView['post']->vars['full_name']?>" value="<?= $formBlockView['post']->vars['value']?>">
Block list!

<script type="text/javascript">
    $(function () {
        // ...
    })
</script>


