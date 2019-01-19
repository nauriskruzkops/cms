<?php

use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var GlobalVariables $app
 * @var PhpEngine $view
 */
$view['theme']->extend('layout/extend/base.html.php');

?>
<?= $view['theme']->render('layout/partial/main-menu.html.php',[])?>

<?php $view['slots']->output('_content') ?>

<?= $view['theme']->render('layout/partial/footer.html.php',[])?>
