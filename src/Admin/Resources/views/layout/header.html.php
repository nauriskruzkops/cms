
<?php

/**
 * @var \Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables $app
 * @var \Symfony\Component\Templating\PhpEngine $view
 */

?>

<nav id="mainTopNav" class="navbar navbar-expand-lg navbar-light fixed-top bg-primary align-middle">
    <a class="navbar-brand text-dark" href="<?= $view['router']->path('ADM_index') ?>" style="padding-left: 45px">
        <span class="text-dark"><?= $view['settings']->value('sys_owner')?></span> <strong class="text-dark"><?= $view['settings']->value('sys_title')?></strong>
        <span clasins="align-middle text-dark" style="font-weight: normal; font-size: 10px;"> | <span class="text-dark"><?= $view['settings']->value('sys_desc')?></span>
    </a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-right" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link text-dark">Hi, <?= $this->escape((string)$app->getUser())?></a class="nav-link text-dark">
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle mr-lg-2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-fw fa-user-circle fa-lg"></i>
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="<?= $view['router']->path('adm_user_profile') ?>"><?= $view['translator']->trans('Adm:Profile') ?></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" data-toggle="modal" data-target="#logoutModal"><?= $view['translator']->trans('Adm:Logout') ?></a>
                </div>
            </li>
        </ul>
    </div>
</nav>