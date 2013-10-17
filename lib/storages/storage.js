'use strict';

var Cocktail = require('cocktail')
  , dbc = require('dbc.js')
  , Strategies = require('../keys')
  ;

Cocktail({
  '@exports': module,
  '@as': 'class',
  constructor: function (params) {
    params = params || {};
    this.bucket = params.bucket;
    this.keyStrategy = params.keyStrategy || new Strategies.GuidStrategy();
    this.key = this.keyStrategy.key;

  }
});