var webpack = require('webpack');
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
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!cssnext-loader')
      }
    ]
  },
  resolve: {
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
    new ExtractTextPlugin('../stylesheets/[name].css')
  ]
};