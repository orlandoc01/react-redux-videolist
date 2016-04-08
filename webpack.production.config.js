'use strict';
let Webpack = require('webpack');
let path = require('path');
let nodeModulesPath = path.resolve(__dirname, 'node_modules');
let buildPath = path.resolve(__dirname, 'public', 'build');
let mainPath = path.resolve(__dirname, 'app', 'main.js');

let config = {

  //normal source map
  
  devtool: 'source-map',
  entry: mainpath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [modeModulesPath]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};

module.exports = config;
