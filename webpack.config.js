//const path = require('path');
//const Webpack = require('webpack');
//const WebpackNotifierPlugin = require('webpack-notifier');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const postCSSImport = require('postcss-import');
//const postCSSNested = require('postcss-nested');
//const autoprefixer = require('autoprefixer-core');
//
//const assetsPath = path.join(__dirname, '..', 'public', 'assets');
//const publicPath = 'assets/';
//
//const WEBPACK_HOST = 'localhost';
//const WEBPACK_PORT = 3001;
//
//
//module.exports = [
//  {
//    // The configuration for the client
//    name: 'browser',
//
//    context: __dirname + '/client/js', // todo: move all js to app folder and change context to it
//    entry: {
//      app: [
//        'webpack-dev-server/client?http://' + WEBPACK_HOST + ':' + WEBPACK_PORT,
//        'webpack/hot/only-dev-server',
//        './init',
//      ],
//    },
//    output: {
//      path: assetsPath,
//      filename: '[name].js',
//
//      publicPath: publicPath,
//    },
//    module: {
//      preLoaders: [
//        {
//          test: /\.js$/,
//          loader: 'eslint-loader',
//          exclude: /node_modules/,
//        },
//      ],
//      loaders: [
//        {
//          test: /\.js$/,
//          exclude: /node_modules/,
//          loaders: ['react-hot-loader', 'babel-loader?stage=1'],
//        },
//        {
//          test: /\.css$/,
//          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!cssnext-loader'),
//        },
//      ],
//    },
//    resolve: {
//      root: [
//        path.join(__dirname, 'client'),
//        path.join(__dirname, 'components'),
//        path.join(__dirname, 'config'),
//      ],
//      extensions: ['', '.js', '.jsx', '.css'],
//      //modulesDirectories: [
//      //  'app', 'node_modules'
//      //]
//    },
//    //watch: true, // ?
//    devtool: '#inline-source-map',
//
//    postcss: [
//      postCSSImport(),
//      postCSSNested(),
//      autoprefixer({browsers: ['last 2 versions']}),
//    ],
//    cssnext: {
//      browsers: 'last 2 versions',
//    },
//    plugins: [
//      new Webpack.HotModuleReplacementPlugin(),
//      new WebpackNotifierPlugin(),
//      new ExtractTextPlugin('../stylesheets/[name].css'),
//    ],
//  },
//];
