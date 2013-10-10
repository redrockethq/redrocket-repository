'use strict';

var util = require('util')
  , _ = require('lodash')
  , dbc = require('dbc.js')
  , Storage = require('./storage')
  ;

function MemoryStorage(options, $Validator) {
  options = options || {};
  options.Validator = $Validator;
  Storage.prototype.constructor.call(this, options);
}

util.inherits(MemoryStorage, Storage);

module.exports = {
  $init: function (next) {
    this.register('MemoryStorage').as.ctor(MemoryStorage);

    if (next) {
      next();
    }
  },
  MemoryStorage: MemoryStorage
};