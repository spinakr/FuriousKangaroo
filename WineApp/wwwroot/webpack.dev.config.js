const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve('./dist/'),
    publicPath: 'http://localhost:17212/dist/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-object-rest-spread'],
        },
      },
    ],
  },

  devServer: {
    inline: true,
    port: 17212,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: '../index.html',
      inject: 'body',
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new Webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
  ],

};