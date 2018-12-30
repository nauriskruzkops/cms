<div>
    <ul id="sidebarNav" class="navbar-nav navbar-sidenav navbar-dark">

        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="<?= $view['translator']->trans('Adm:Nav:Dashboard') ?>">
            <a class="nav-link" href="<?= $view['router']->path('ADM_index') ?>">
                <i class="fas fa-cogs"></i>
                <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Dashboard') ?></span>
            </a>
        </li>

        <li class="nav-item active" data-toggle="tooltip" data-placement="right" title="" data-original-title="<?= $view['translator']->trans('Adm:Nav:Content') ?>">
            <a class="nav-link nav-link-collapse" data-toggle="collapse" href="#collapseContent" data-parent="#collapseContent" aria-expanded="true">
                <i class="fa fa-fw fa-wrench"></i>
                <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Content') ?></span>
            </a>
            <ul class="sidenav-second-level collapse show" id="collapseContent" style="">
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="<?= $view['translator']->trans('Adm:Nav:Pages') ?>">
                    <a class="nav-link" href="<?= $view['router']->path('adm_page_list') ?>">
                        <i class="fas fa-clone"></i>
                        <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Pages') ?></span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="<?= $view['translator']->trans('Adm:Nav:Posts') ?>">
                    <a class="nav-link" href="<?= $view['router']->path('adm_post_list') ?>">
                        <i class="fas fa-clone"></i>
                        <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Posts') ?></span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="<?= $view['translator']->trans('Adm:Nav:Menu') ?>">
                    <a class="nav-link" href="<?= $view['router']->path('adm_menu_list') ?>">
                        <i class="fab fa-elementor"></i>
                        <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Menu') ?></span>
                    </a>
                </li>
            </ul>
        </li>

        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="<?= $view['translator']->trans('Adm:Nav:Settings') ?>">
            <a class="nav-link" href="<?= $view['router']->path('adm_settings') ?>">
                <i class="fas fa-gears"></i>
                <span class="nav-link-text"><?= $view['translator']->trans('Adm:Nav:Settings') ?></span>
            </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="<?= $view['translator']->trans('Adm:Nav:Users') ?>">
            <a class="nav-link" href="<?= $view['router']->path('adm_users') ?>">
                <i class="fas fa-users"></i>
                <span class="nav-link-text">
                    <?= $view['translator']->trans('Adm:Nav:Users') ?>
                </span>
            </a>
        </li>


    </ul>
</div>