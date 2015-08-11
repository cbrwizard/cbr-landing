var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postCSSImport = require('postcss-import');

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
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  watch: true,
  devtool: "#inline-source-map",

  postcss: [
    postCSSImport()
  ],
  plugins: [
    new ExtractTextPlugin('../stylesheets/[name].css')
  ]
};