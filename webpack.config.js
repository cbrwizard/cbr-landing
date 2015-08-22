const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postCSSImport = require('postcss-import');
const postCSSNested = require('postcss-nested');
const autoprefixer = require('autoprefixer-core');

module.exports = {
  context: __dirname + '/client/js',
  entry: {
    app: './init',
  },
  output: {
    path: __dirname + '/public/javascripts',
    filename: '[name].js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          stage: 1,
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!cssnext-loader')
      },
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'client'),
      path.join(__dirname, 'components'),
      path.join(__dirname, 'config'),
    ],
    extensions: ['', '.js', '.jsx', '.css'],
  },
  watch: true,
  devtool: '#inline-source-map',

  postcss: [
    postCSSImport(),
    postCSSNested(),
    autoprefixer({browsers: ['last 2 versions']}),
  ],
  cssnext: {
    browsers: 'last 2 versions',
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new ExtractTextPlugin('../stylesheets/[name].css'),
  ],
};
