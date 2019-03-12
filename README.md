# WEB+CMS
Simple Symfony 4 website with CMS

Install environment
--------------------
    composer install
    doctrine:database:create
    doctrine:migrations:up
    npm install
    yarn install
    yarn encore {prod|dev}
    
Develpoment process
--------------------

    php bin/console cache:clear
    php bin/console doctrine:schema:update --force
    yarn encore dev --config-name {site|editor|admin} --watch
    
