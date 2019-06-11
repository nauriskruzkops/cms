var Encore = require('@symfony/webpack-encore');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Public site
Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .splitEntryChunks()
    //.enableSingleRuntimeChunk()
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    // .configureFilenames({
    //     css: 'css/[name]-[contenthash].css',
    //     js: 'js/[name]-[chunkhash].js'
    // })
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
    .addEntry('site', './src/Resources/views/theme/assets/main.js')
;
const siteConfig = Encore.getWebpackConfig();
siteConfig.name = 'site';
Encore.reset();

// Admin side
Encore
    .setOutputPath('public/build-admin/')
    .setPublicPath('/build-admin')
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
;

const adminConfig = Encore.getWebpackConfig();
adminConfig.name = 'admin';
Encore.reset();

// Editor side
Encore
    .setOutputPath('public/build-editor/')
    .setPublicPath('/build-editor')
    .splitEntryChunks()
    //.enableSingleRuntimeChunk()
    .disableSingleRuntimeChunk()
    //.cleanupOutputBeforeBuild()
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

module.exports = [adminConfig, siteConfig, editorConfig
    // {
    //     plugins: [
    //         new MiniCssExtractPlugin({
    //             // Options similar to the same options in webpackOptions.output
    //             // both options are optional
    //             filename: "[name].css",
    //             chunkFilename: "[id].css"
    //         })
    //     ],
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.css$/,
    //                 use: [
    //                     {
    //                         loader: MiniCssExtractPlugin.loader,
    //                         options: {
    //                             // you can specify a publicPath here
    //                             // by default it use publicPath in webpackOptions.output
    //                             publicPath: '../'
    //                         }
    //                     },
    //                     "css-loader"
    //                 ]
    //             }
    //         ]
    //     }
    // }
];

