<?php

use Admin\Entity\MenuItems;
use Admin\Entity\Page;
use App\Helpers\LayoutHelper;
use App\Helpers\PageHelper;
use Symfony\Bundle\FrameworkBundle\Templating\GlobalVariables;
use Symfony\Bundle\FrameworkBundle\Templating\PhpEngine;

/**
 * @var MenuItems[] $mainMenuItems
 * @var array $languages
 * @var GlobalVariables $app
 * @var PhpEngine $view
 * @var Page $page
 * @var PageHelper $pageHelper
 * @var LayoutHelper $layoutHelper
 *
 */
$mainMenu = $view['menu']->getMainTopMenu();
$mainMenuItems = $mainMenu['items'] ?? [];
$languages = $view['settings']->values('languages');
$headerStyle = $view['slots']->get('headerStyle', 'header-style-one');

//$object = $view['slots']->output('page', null);
$layoutHelper = $view['layout'];

$html = '';
function nestedMainTreeRow($items, &$html, $view) // added pass by reference
{
    foreach($items as $key => $node)
    {
        $url = $view['router']->path($node['slug'], ['_locale' => $view['locale']]);
        if ($node['__children'] ?? false) {
            $html .= '<li class="dropdown">';
                $html .= sprintf('<a href="%s" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">%s</a>', "#", $view->escape($node['title']));
                $html .= '<ul class="dropdown-menu">';
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

<header class="main-header <?= $headerStyle?>">
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
                            <img src="<?= $layoutHelper->logo()?>" alt="<?= $this->escape($view['settings']->value('site_title')) ?>" title="<?= $this->escape($view['settings']->value('site_title')) ?>">
                        </a>
                    </div>
                </div>
                <?php if ($languages) :?>
                    <dic class="language-icon-mobile">
                        <?php foreach ($languages as $languageKey => $languageTitle) :?>
                            <a class="nav-item" href="<?=
                            $view['router']->path('index', ['_locale' => $languageKey])
                            ?>" title="<?= $this->escape($languageTitle)?>"><?= $this->escape(strtoupper($languageKey))?></a>
                        <?php endforeach;?>
                    </dic>
                <?php endif;?>

                <nav id="main-menu" class="navbar navbar-custom">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div id="main-navbar" class="navbar-collapse collapse">
                            <ul id="main-navigation" class="nav navbar-nav navbar-right">
                                <?= nestedMainTreeRow($mainMenuItems, $html, $view)?>
                            </ul>
                        </div>
                    </div>
                </nav>

<?php /*
                <div class="nav-outer clearfix">
                    <nav class="main-menu">

                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-menu-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>

                        <div id="main-menu-collapse" class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
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
                        <div class="navbar-collapse collapse">
                            <ul class="navigation">
                                <?= $html?>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
*/?>
</header>