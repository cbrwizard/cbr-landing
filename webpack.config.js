var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postCSSImport = require('postcss-import');
var postCSSNested = require('postcss-nested');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  context: __dirname + "/client/js",
  entry: {
    app: './init'
  },
  output: {
    path: __dirname + "/public/javascripts",
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          stage: 1
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!cssnext-loader')
      }
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, 'client')
    ],
    extensions: ["", ".js", ".jsx"]
  },
  watch: true,
  devtool: "#inline-source-map",

  postcss: [
    postCSSImport(),
    postCSSNested(),
    autoprefixer({browsers: ['last 2 versions']})
  ],
  cssnext: {
    browsers: "last 2 versions"
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new ExtractTextPlugin('../stylesheets/[name].css')
  ]
};