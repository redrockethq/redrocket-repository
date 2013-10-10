'use strict';

var uuid = require('node-uuid')
  , util = require('util');

function DefaultKeyGenerator() {
}

DefaultKeyGenerator.prototype.newKey = function () {
  return uuid.v4();
};

module.exports = {
  $init: function (next) {
    this.register('KeyGenerator').as.ctor(DefaultKeyGenerator);

    if (next) {
      next();
    }
  }
}