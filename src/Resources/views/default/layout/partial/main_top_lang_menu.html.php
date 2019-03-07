<?php
/**
 * @var array $languages
 */

$languages = $view['settings']->values('languages');

?>
<?php if ($languages) :?>
    <ul class="navbar-nav pull-right">
        <?php foreach ($languages as $languageKey => $languageTitle) :?>
            <li class="nav-item">
                <?php if ($languageKey == $view['locale']) :?>
                    <a class="nav-link small"><?= $this->escape($languageKey)?></a>
                <?php else :?>
                    <a class="nav-link small" href="<?= $view['router']->path('index', ['_locale' => $languageKey]) ?>" title="<?= $this->escape($languageTitle)?>"><?= $this->escape($languageKey)?></a>
                <?php endif;?>
            </li>
        <?php endforeach;?>
    </ul>
<?php endif;?>
