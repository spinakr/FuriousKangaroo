const path = require('path');
const webpack = require('webpack');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfigDev = new HtmlWebpackPlugin({
  template: './src/index.ejs',
  filename: '../index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve('./dist/'),
    publicPath: 'http://localhost:17212/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    inline: true,
    port: 17212,
  },
  plugins: [
    HtmlWebpackPluginConfigDev,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
