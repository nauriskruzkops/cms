<nav id="mainTopNav" class="navbar navbar-expand-lg navbar-light bg-primary fixed-top align-middle">
    <a class="navbar-brand text-dark" href="<?= $view['router']->path('ADM_index') ?>" style="padding-left: 45px">
        <span class="text-dark"><?= $view['settings']->value('sys_owner')?></span> <strong class="text-dark"><?= $view['settings']->value('sys_title')?></strong>
        <span class="align-middle text-dark" style="font-weight: normal; font-size: 10px;"> | <span class="text-dark"><?= $view['settings']->value('sys_desc')?></span>
    </a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-right" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link disabled" href="/profile">Michelle Young</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle mr-lg-2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-fw fa-user-circle fa-lg"></i>
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="/profile">Profile</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" data-toggle="modal" data-target="#logoutModal">Logout</a>
                </div>
            </li>
        </ul>
    </div>
</nav>