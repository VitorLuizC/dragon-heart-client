const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: path.join(__dirname, './app/index.js'),
  output: {
    filename: 'game.js',
    path: __dirname
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: 'app/ui/view.pug'
    }),
    new ExtractTextPlugin('[name].css')
  ]
};

module.exports = config;
