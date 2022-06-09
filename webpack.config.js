'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './FOOD/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/FOOD/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
