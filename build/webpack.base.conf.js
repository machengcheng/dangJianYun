'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');
const webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'src': resolve('src'),
      'common': path.resolve(__dirname,'../src/common'),
      'assets': path.resolve(__dirname,'../src/assets'),
      'styles': path.resolve(__dirname,'../src/assets/styles'),
      'components': path.resolve(__dirname,'../src/components'),
      'views': path.resolve(__dirname,'../src/views'),
      'router': path.resolve(__dirname,'../src/router'),
      'static': path.resolve(__dirname,'../src/static')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('mock'), resolve('/node_modules/_element-ui@2.0.4@element-ui/packages/'),resolve('/node_modules/_element-ui@2.0.4@element-ui/src/utils/'),resolve('/node_modules/_element-ui@2.0.4@element-ui/src/mixins/')]
        // include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
};
