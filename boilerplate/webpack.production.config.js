var webpack = require('webpack');
var path = require('path');

var sassLoaders = [
  'style-loader',
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
      loader: sassLoaders.join('!')
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
  }
};
