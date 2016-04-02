var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var sassLoaders = [
  'css-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
  entry: [
    './src/app/index.js'
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
    }]
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['src', 'node_modules']
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
