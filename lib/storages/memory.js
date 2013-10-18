'use strict';

var Cocktail = require('cocktail')
  , _ = require('lodash')
  , Storage = require('./storage')
  ;

function MemoryStorage(options) {
  options = options || {};
  var self = this;
  self.callSuper('constructor', options);
  this._data = [];
  if (options.seed) {
    self._data = options.seed;
  }
}


Cocktail.mix(MemoryStorage, {
  '@extends': Storage,
  '@exports': module,

  /**
   * Retrieves all entities
   * @param {function} callback
   */
  all: function (callback) {
    var self = this;
    callback(null, self._data);
  },

  /**
   * Retrieves and entity by key
   * @param {number,string, object} key
   * @param {function} callback
   */
  getByKey: function (key, callback) {
    var self = this;
    self.callSuper('getByKey', key);
    var entity = _.find(self._data, self.key);
    if (entity) {
      callback(null, entity);
    } else {
      callback(null, null);
    }
  },

  /**
   * Filter entities by predicate
   * @param {function} predicate
   * @param {function} callback
   */
  query: function (predicate, callback) {
    var self = this;
    var results = _.where(self._data, predicate);
    callback(null, results);
  },

  /**
   * Save's the entity, if no key is provided save will generate a key based on key strategy
   * @param {object} entity
   * @param {function} callback
   */
  save: function (entity, callback) {
    var self = this;
    self.callSuper('save', entity);
    self._data.push(entity);
    callback(null, entity);
  },

  /**
   * Removes entity from storage
   * @param {number, string, object} key
   * @param callback
   */
  remove: function (key, callback) {
    var self = this;
    self.callSuper('remove', key);
    self.getByKey(key, function (err, entity) {
      if (!err && entity) {
        _.reject(self._data, entity);
        callback(null);
      } else {
        callback(err);
      }
    });
  },

  /**
   * Removes all entities
   * @param {function} callback
   */
  removeAll: function (callback) {
    var self = this;
    self._data = [];
    callback(null);
  },

  /**
   * Determines if entity exists by key
   * @param {number, string, object} key
   * @param {function} callback
   */
  exists: function (key, callback) {
    var self = this;
    this.callSuper('exists', key);
    callback(null, _.some(this._data, key));
  }

});