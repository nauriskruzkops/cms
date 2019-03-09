<?php
/**
 * @var \Admin\Entity\MenuItems[] $mainMenuItems
 */

$mainMenu = $view['menu']->getMainTopMenu();
$mainMenuItems = $mainMenu['items'] ?? [];

?>
<div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto pull-right">
        <?php foreach ($mainMenuItems as $mainMenu) :?>
            <?php $lang = $mainMenu->getMenu()->getLocale(); ?>
            <?php if ($mainMenu->getChildren()->count()) :?>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><?= $mainMenu->getTitle()?></a>
                    <div class="dropdown-menu">
                        <?php foreach ($mainMenu->getChildren() as $childMenu) :?>
                            <?php if ($childMenu->getEnabled()) :?>
                                <a class="dropdown-item" href="<?= $childMenu->getSlug()?>"><?= $childMenu->getTitle()?></a>
                            <?php endif;?>
                        <?php endforeach;?>
                    </div>
                </li>
            <?php else :?>
                <li class="nav-item">
                    <a class="nav-link" href="<?= $view['router']->path($mainMenu->getSlug(), ['_locale' => $lang]) ?>"><?= $mainMenu->getTitle()?></a>
                </li>
            <?php endif;?>
        <?php endforeach;?>
    </ul>
</div>
