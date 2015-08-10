var webpack = require('webpack');

module.exports = {
  context: __dirname + "/client/js",
  entry: [
    './init'
  ],
  output: {
    path: __dirname + "/public/javascripts",
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  watch: true,
  devtool: "#inline-source-map"
};