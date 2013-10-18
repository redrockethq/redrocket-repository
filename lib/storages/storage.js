'use strict';

var Cocktail = require('cocktail')
  , dbc = require('dbc.js')
  , Strategies = require('../keys')
  ;

function Storage(options) {
  options = options || {};

  if (options.bucket) {
    this.bucket = options.bucket;
  }

  this.keyStrategy = options.keyStrategy || new Strategies.GuidStrategy();
  this.key = this.keyStrategy.key;

  dbc(this.key, "Key is required");
}

Cocktail.mix(Storage, {
  all: function () {
  },
  getByKey: function (key) {
    dbc(key, "Key is required");
  },
  query: function () {
  },
  save: function (entity) {
    dbc([entity, typeof entity === 'object'], 'Entity is required and must be an object');
    if (!entity[this.key]) {
      entity[this.key] = this.keyStrategy.generate();
      dbc([entity[this.key]], 'Error generating key');
    }
  },
  remove: function (key) {
    dbc([key], 'Key is required');
  },
  exists: function (key) {
    dbc([key], 'Key is required');
  }
});

module.exports = Storage;