'use strict';
var util = require('util')
  , _ = require('lodash')
  , dbc = require('dbc.js')
  ;

function Repository(options) {
  options = options || {};

}

module.exports = {
  $init: function (next) {
    if (next) {
      next();
    }
  },
  Repository: Repository
};