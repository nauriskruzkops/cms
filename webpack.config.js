var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .autoProvidejQuery()
    .addEntry('site', './public/assets/theme/default/js/main.js')
;

const siteConfig = Encore.getWebpackConfig();
siteConfig.name = 'site';
Encore.reset();

Encore
    .setOutputPath('public/admin/build/')
    .setPublicPath('/build')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .autoProvidejQuery()
    .addEntry('admin', './src/Admin/Resources/assets/js/app.js')
    .addEntry('editor', './src/Admin/Resources/assets/js/editor.js')
;

const adminConfig = Encore.getWebpackConfig();
adminConfig.name = 'admin';
Encore.reset();

module.exports = [adminConfig, siteConfig];