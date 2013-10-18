'use strict';
var Cocktail = require('cocktail')
  , dbc = require('dbc.js')
  , Storages = require('./storages')
  ;


function Repository(options) {
  options = options || {};
  this.storage = options.storage || new Storages.Memory();
}

Cocktail.mix(Repository, {
  '@exports': module,
  all: function (callback) {
    this.storage.all(callback);
  },
  getByKey: function (key, callback) {
    this.storage.getByKey(key, callback);
  },
  query: function (predicate, callback) {
    this.storage.query(predicate, callback);
  },
  remove: function (key, callback) {
    this.storage.remove(key, callback);
  },
  exists: function (key, callback) {
    this.storage.exists(key, callback);
  }
});