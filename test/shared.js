'use strict';

var path = require('path')
  , loader = require('minioc-loader')
  , minioc = loader.minioc
  , container = minioc.root;

loader(({
  basePath: path.resolve(__dirname + '../../'),
  log: {
    info: function (message) {
      console.log(message);
    }
  }
}));

loader.loadSync(container, './src');


module.exports = {
  container: container
};