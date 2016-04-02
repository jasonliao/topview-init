var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var sassLoaders = [
  'css-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/app/index.js'
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
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
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css')
  ]
};
