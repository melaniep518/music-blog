const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
const aliases = require('./aliases.js');

module.exports = {
  entry: ["./client/App.jsx"],
  output: {
    path: __dirname + "/bundle",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    root: path.resolve(__dirname),
    alias: aliases,
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};
