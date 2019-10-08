<?php

use Admin\Entity\MenuItems;
use Admin\Entity\Page;
use App\Helpers\LayoutHelper;
use App\Helpers\PageHelper;
use App\Helpers\SettingsHelper;
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
 * @var SettingsHelper $settings
 * @var string $locale
 *
 */
$mainMenu = $view['menu']->getMainTopMenu();
$mainMenuItems = $mainMenu['items'] ?? [];
$languageMenuItems = $view['menu']->getLanguageMenuItems();
$languages = $view['settings']->values('languages');
$headerStyle = $view['slots']->get('headerStyle', 'header-style-one');
$settings = $view['settings'];
$locale = $app->getRequest()->get('_locale');

$layoutHelper = $view['layout'];
$html = '';
function nestedMainTreeRow($items, &$html, $view, $locale) // added pass by reference
{
    foreach($items as $key => $node)
    {
        $url = $view['router']->path($locale.'_'.$node['slug'], ['_locale' => $locale]);
        if ($node['__children'] ?? false) {
            $html .= '<li class="dropdown">';
                $html .= sprintf('<a href="%s" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">%s</a>', "#", $view->escape($node['title']));
                $html .= '<ul class="dropdown-menu">';
                    nestedMainTreeRow($node['__children'], $html, $view, $locale);
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
                                <?php foreach ($languageMenuItems as $language) :?>
                                    <li>
                                        <a class="nav-item" href="<?=$language['uri']?>" hreflang="<?= $language['code']?>" title="<?= $this->escape($language['title'])?>"><?= $this->escape($language['title'])?></a>
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
                        <a href="<?= $view['router']->path('index', ['_locale' => $locale])?>">
                            <img src="<?= $layoutHelper->logo()?>" alt="<?= $this->escape($view['settings']->value('site_title')) ?>" title="<?= $this->escape($view['settings']->value('site_title')) ?>">
                        </a>
                    </div>
                </div>
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
                                <?= nestedMainTreeRow($mainMenuItems, $html, $view, $locale)?>
                                <?php if ($languages) :?>
                                    <li class="dropdown visible-xs">
                                        <a class="nav-item"></a>
                                        <?php foreach ($languageMenuItems as $language) :?>
                                            <a class="nav-item" href="<?=$language['uri']?>" hreflang="<?= $language['code']?>" title="<?= $this->escape($language['title'])?>">
                                                <?= $this->escape($language['title'])?>
                                            </a>
                                        <?php endforeach;?>
                                    </li>
                                <?php endif ?>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>