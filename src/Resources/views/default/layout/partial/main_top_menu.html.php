<?php
/**
 * @var \Admin\Entity\MenuItems[] $mainMenuItems
 */

$mainMenu = $view['menu']->getMainTopMenu();
$mainMenuItems = $mainMenu['items'] ?? [];
$languages = $view['settings']->values('languages');

?>
<div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto pull-right">
        <?php
        $html = '';
        function nestedTreeRow($items, &$html='', $view) // added pass by reference
        {
            foreach($items as $key => $node)
            {
                if ($node['__children'] ?? false) {
                    $html .= '<li class="nav-item dropdown">';
                        $html .= sprintf('<a class="nav-link dropdown-toggle" href="%s" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">%s</a>',
                            $node['slug'], $view->escape($node['title'])
                        );
                        $html .= '<ul class="dropdown-menu">';
                            nestedTreeRow($node['__children'], $html, $view);
                        $html .= '</ul>';
                    $html .= '</li>';
                } else {
                    $html .= sprintf('<li class="nav-item"><a class="nav-link" href="%s">%s</a></li>',
                        $node['slug'], $view->escape($node['title'])
                    );
                }
            }
            return $html;
        }
        ?>
        <?= nestedTreeRow($mainMenuItems, $html, $view)?>
    </ul>
</div>
