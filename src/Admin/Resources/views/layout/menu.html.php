<div>
    <ul id="sidebarNav" class="navbar-nav navbar-sidenav navbar-dark">

        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Overview">
            <a class="nav-link" href="<?= $view['router']->path('ADM_index') ?>">
                <i class="fas fa-cogs"></i>
                <span class="nav-link-text">Dashboard</span>
            </a>
        </li>

        <li class="nav-item active" data-toggle="tooltip" data-placement="right" title="" data-original-title="Content">
            <a class="nav-link nav-link-collapse" data-toggle="collapse" href="#collapseContent" data-parent="#collapseContent" aria-expanded="true">
                <i class="fa fa-fw fa-wrench"></i>
                <span class="nav-link-text">Content</span>
            </a>
            <ul class="sidenav-second-level collapse show" id="collapseContent" style="">
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Pages">
                    <a class="nav-link" href="<?= $view['router']->path('adm_post_list') ?>">
                        <i class="fas fa-clone"></i>
                        <span class="nav-link-text">Posts</span>
                    </a>
                </li>

                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Pages">
                    <a class="nav-link" href="<?= $view['router']->path('adm_page_list') ?>">
                        <i class="fas fa-clone"></i>
                        <span class="nav-link-text">Pages</span>
                    </a>
                </li>


                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Menu">
                    <a class="nav-link" href="<?= $view['router']->path('adm_menu_list') ?>">
                        <i class="fab fa-elementor"></i>
                        <span class="nav-link-text">Menu</span>
                    </a>
                </li>
            </ul>
        </li>

        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Settings">
            <a class="nav-link" href="<?= $view['router']->path('adm_settings') ?>">
                <i class="fas fa-gears"></i>
                <span class="nav-link-text">Settings</span>
            </a>
        </li>

    </ul>
</div>