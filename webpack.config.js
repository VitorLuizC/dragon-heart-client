const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(__dirname, './app/index.js'),
  output: {
    filename: 'game.js',
    path: './'
  },
  resolve: {
    extensions: ['.js', '.json'],
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
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: 'app/ui/view.pug'
    })
  ]
};

module.exports = config;
