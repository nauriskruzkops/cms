<?php

namespace Admin\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class AdminExtension extends Extension
{
    /**
     * @param array $configs
     * @param ContainerBuilder $container
     * @throws \Exception
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yaml', 'glob');
    }

    /**
     * @param array $config
     * @param ContainerBuilder $container
     * @return Configuration|object|\Symfony\Component\Config\Definition\ConfigurationInterface|null
     */
    public function getConfiguration(array $config, ContainerBuilder $container)
    {
        return new Configuration();
    }

    /**
     * @return string The XSD base path
     */
    public function getXsdValidationBasePath()
    {
        return null;
    }

    /**
     * @return string
     */
    public function getNamespace()
    {
        return 'Admin';
    }
}
