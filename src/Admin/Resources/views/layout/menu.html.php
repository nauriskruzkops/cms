<div class="sp20"></div>
<div id="sidebarNav">
    <ul class="navbar-nav navbar-sidenav navbar-dark">

        <li class="nav-item">
            <a class="nav-link" href="<?= $view['router']->path('ADM_index') ?>">
                <i class="fa fa-fw fa-dashboard"></i>
                <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Dashboard') ?></span>
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link nav-link-collapse" data-toggle="collapse" href="#collapseContent" >
                <i class="fa fa-fw fa-edit"></i>
                <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Content') ?></span>
                <i class="float-right fa fa-fw fa-angle-down"></i>
            </a>
            <ul class="sidenav-second-level" id="collapseContent" style="">
                <li class="nav-item">
                    <a class="nav-link" href="<?= $view['router']->path('adm_page_list') ?>">
                        <i class="fa fa-fw fa-files-o"></i>
                        <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Pages') ?></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= $view['router']->path('adm_post_list') ?>">
                        <i class="fa fa-fw fa-file-o"></i>
                        <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Posts') ?></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= $view['router']->path('adm_menu_list') ?>">
                        <i class="fa fa-fw fa-navicon"></i>
                        <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Menu') ?></span>
                    </a>
                </li>
            </ul>
        </li>

        <li class="nav-item">
            <a class="nav-link nav-link-collapse" href="#" type="button" data-toggle="collapse" data-target="#collapseStorage" aria-expanded="false">
                <i class="fa fa-fw fa-hdd-o"></i>
                <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Storage') ?></span>
                <i class="float-right fa fa-fw fa-angle-down"></i>
            </a>
            <div class="navbar-collapse collapse" id="collapseStorage">
                <ul class="navbar-collapse collapse">
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $view['router']->path('adm_storage', ['group'=>'images']) ?>">
                            <i class="fa fa-fw fa-file-image-o"></i>
                            <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Images') ?></span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link nav-link-collapse" href="#" type="button" data-toggle="collapse" data-target="#collapseProducts" aria-expanded="false">
                <i class="fa fa-fw fa-hdd-o"></i>
                <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Products') ?></span>
                <i class="float-right fa fa-fw fa-angle-down"></i>
            </a>
            <div class="navbar-collapse collapse" id="collapseProducts">
                <ul class="navbar-collapse collapse">
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $view['router']->path('adm_products') ?>">
                            <i class="fa fa-fw fa-product-hunt"></i>
                            <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:ProductsList') ?></span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="<?= $view['router']->path('adm_inbox') ?>">
                <i class="fa fa-fw fa-envelope-o"></i>
                <span class="nav-link-text">
                    <?= $view['translator']->trans('Adm:Nav:Inbox') ?>
                </span>
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="<?= $view['router']->path('adm_translation') ?>">
                <i class="fa fa-fw fa-book"></i>
                <span class="nav-link-text">
                    <?= $view['translator']->trans('Adm:Nav:Translation') ?>
                </span>
            </a>
        </li>



        <li class="nav-item">
            <a class="nav-link nav-link-collapse" href="#" type="button" data-toggle="collapse" data-target="#collapseSettings" aria-expanded="false">
                <i class="fa fa-fw fa-gears"></i>
                <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Settings') ?></span>
                <i class="float-right fa fa-fw fa-angle-down"></i>
            </a>
            <div class="navbar-collapse collapse" id="collapseSettings">
                <ul class="navbar-collapse collapse">
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $view['router']->path('adm_settings', ['group'=>'appearance']) ?>">
                            <i class="fa fa-fw fa-gear"></i>
                            <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Appearance') ?></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $view['router']->path('adm_settings', ['group'=>'Site']) ?>">
                            <i class="fa fa-fw fa-gear"></i>
                            <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Site') ?></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $view['router']->path('adm_settings', ['group'=>'products']) ?>">
                            <i class="fa fa-fw fa-gear"></i>
                            <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Products') ?></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $view['router']->path('adm_settings', ['group'=>'general']) ?>">
                            <i class="fa fa-fw fa-gear"></i>
                            <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:General') ?></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $view['router']->path('adm_settings', ['group'=>'system']) ?>">
                            <i class="fa fa-fw fa-gear"></i>
                            <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:System') ?></span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="<?= $view['router']->path('adm_users') ?>">
                <i class="fa fa-fw fa-users"></i>
                <span class="nav-link-text">
                    <?= $view['translator']->trans('Adm:Nav:Users') ?>
                </span>
            </a>
        </li>

    </ul>

</div>