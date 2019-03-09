<?php

use Admin\Entity\Page;
use Admin\Entity\PageBlocks;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\Helper\FormHelper;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;
use Symfony\Component\Form\Form;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var FormHelper $formHelper
 * @var Form $form
 * @var Page $page
 * @var PageBlocks $pageBlocks
 */

$formView = $form->createView();
$formHelper = $view['form'];

?>

<?= $view->render(sprintf('@AdminBundle/Resources/views/pages/templates/landing/landing.html.php'),[
    'form' => $form,
    'page' => $page,
])?>
