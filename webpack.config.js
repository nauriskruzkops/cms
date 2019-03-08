var Encore = require('@symfony/webpack-encore');

// Public site
Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .splitEntryChunks()
    //.enableSingleRuntimeChunk()
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .autoProvidejQuery()
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    })
    .addEntry('site', './src/Resources/views/default/public/js/main.js')
;
const siteConfig = Encore.getWebpackConfig();
siteConfig.name = 'site';
Encore.reset();

// Admin side
Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .splitEntryChunks()
    //.enableSingleRuntimeChunk()
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .autoProvidejQuery()
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    })
    .addEntry('admin', './src/Admin/Resources/assets/js/app.js')
    //.addEntry('editor', './src/Admin/Resources/assets/js/editor.js')
;

const adminConfig = Encore.getWebpackConfig();
adminConfig.name = 'admin';
Encore.reset();

// Editor side
Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .splitEntryChunks()
    //.enableSingleRuntimeChunk()
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .autoProvidejQuery()
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    })
    .addEntry('editor', './src/Admin/Resources/assets/js/editor.js')
    // .addLoader(
    //     {test: require.resolve('tinymce/tinymce'), loaders: ['imports?this=>window', 'exports?window.tinymce']},
    //     {test: /tinymce\/(themes|plugins)\//, loaders: ['imports?this=>window']})
;

const editorConfig = Encore.getWebpackConfig();
editorConfig.name = 'editor';

Encore.reset();

module.rules = [{
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}];

module.exports = [adminConfig, siteConfig, editorConfig];

