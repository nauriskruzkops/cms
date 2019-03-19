<?php
/**
 * @var \Admin\Entity\MenuItems[] $mainMenuItems
 * @var array $languages
 *
 */
$mainMenu = $view['menu']->getMainTopMenu();
$mainMenuItems = $mainMenu['items'] ?? [];
$languages = $view['settings']->values('languages');

?>
<header class="main-header header-style-one">
    <?php if ($languages) :?>
        <div class="header-top">
            <div class="auto-container">
                <div class="inner-container clearfix">
                    <div class="top-right">
                        <div class="language-icon">
                            <ul class="clearfix">
                                <?php foreach ($languages as $languageKey => $languageTitle) :?>
                                    <li>
                                        <a class="nav-item" href="<?=
                                            $view['router']->path('index', ['_locale' => $languageKey])
                                        ?>" title="<?= $this->escape($languageTitle)?>"><?= $this->escape(strtoupper($languageKey))?></a>
                                    </li>
                                <?php endforeach;?>
                            </ul>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    <?php endif;?>

    <div class="main-box">
        <div class="auto-container">
            <div class="outer-container clearfix">
                <div class="logo-box">
                    <div class="logo">
                        <a href="<?= $view['router']->path('index', ['_locale' => $view['locale']])?>">
                            <img src="<?= $view['assets']->getUrl('logo-white.png', 'images') ?>" alt="<?= $this->escape($view['settings']->value('site_title')) ?>" title="<?= $this->escape($view['settings']->value('site_title')) ?>">
                        </a>
                    </div>
                </div>
                <div class="nav-outer clearfix">
                    <nav class="main-menu">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
                                <?php
                                $html = '';
                                function nestedMainTreeRow($items, &$html, $view) // added pass by reference
                                {
                                    foreach($items as $key => $node)
                                    {
                                        $url = rtrim(sprintf('/%s/%s', $view['locale'], $node['slug']), '/');
                                        if ($node['__children'] ?? false) {
                                            $html .= '<li class="dropdown">';
                                                $html .= sprintf('<a href="%s" aria-haspopup="true" aria-expanded="false">%s</a>', $url, $view->escape($node['title']));
                                                $html .= '<ul>';
                                            nestedMainTreeRow($node['__children'], $html, $view);
                                                $html .= '</ul>';
                                            $html .= '</li>';
                                        } else {
                                            $html .= sprintf('<li><a href="%s">%s</a></li>', $url, $view->escape($node['title'])
                                            );
                                        }
                                    }
                                    return $html;
                                }
                                ?>
                                <?= nestedMainTreeRow($mainMenuItems, $html, $view)?>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div class="sticky-header">
        <div class="auto-container">
            <div class="sticky-inner-container clearfix">
                <div class="logo pull-left">
                    <a href="/" class="img-responsive">
                        <img src="<?= $view['assets']->getUrl('logo-small.png', 'images') ?>" alt="<?= $this->escape($view['settings']->value('site_title')) ?>" title="<?= $this->escape($view['settings']->value('site_title')) ?>">
                    </a>
                </div>
                <div class="right-col pull-right">
                    <nav class="main-menu">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
                                <?= $html?>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

</header>