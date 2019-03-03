<?php
/**
 *
 * THEME CONFIG v0.1
 *
 */
return [
    'title' => 'Vitbuve Borvel',
    'original_url' => 'https://themeforest.net/item/borvel-construction-building-company-html-template/23077029',
    'local_url' => '/assets/theme/theme/index.html',

    # Admin site tex editor
    'admin_content_css' => [
        "/assets/theme/theme/css/bootstrap.css",
        "/assets/theme/theme/plugins/revolution/css/settings.css",
        "/assets/theme/theme/plugins/revolution/css/layers.css",
        "/assets/theme/theme/plugins/revolution/css/navigation.css",
        "/assets/theme/theme/css/style.css",
        "/assets/theme/theme/css/style-overwrite.css",
        "/assets/theme/theme/css/responsive.css",
    ],

    # Templates
    'page_templates_all' => [
        [
            "title" => "Simple section",
            "description" => "Simple section",
            "content" => 'theme/templates/simple-section-white.html.php',
            "type" => "landing",
        ],
        [
            "title" => "Simple section grey",
            "description" => "Simple section",
            "content" => 'theme/templates/simple-section-grey.html.php',
            "type" => "landing",
        ],
        [
            "title" => "Company Overview",
            "description" => "Company Overview",
            "content" => 'theme/templates/company-overview.html.php',
            "type" => "landing",
        ],
        [
            "title" => "Approach section",
            "description" => "Approach section",
            "content" => 'theme/templates/approach-section.html.php',
            "type" => "landing",
        ],
        [
            "title" => "Service section #1",
            "description" => "Service page #1",
            "content" => 'theme/templates/services-section-1.html.php',
            "type" => "landing",
        ],
        [
            "title" => "Service section #2",
            "description" => "Service page #2",
            "content" => 'theme/templates/services-section-2.html.php',
            "type" => "landing",
        ],
        [
            "title" => "Service page #1",
            "description" => "Service page #1",
            "content" => 'theme/templates/service-page-1.html.php',
            "type" => "landing",
        ],
        [
            "title" => "Service page #2",
            "description" => "Service page #1",
            "content" => 'theme/templates/service-page-2.html.php',
            "type" => "landing",
        ],
        [
            "title" => "Contact page",
            "description" => "Contact page",
            "content" => 'theme/templates/contact-page.html.php',
            "type" => "landing",
        ]
    ],
]
?>