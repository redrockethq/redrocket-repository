'use strict'

var Cocktail = require('cocktail')
  , uuid = require('node-uuid')
  , hat = require('hat')
  , slug = require('slugs')
  , dbc = require('dbc.js')
  ;

function KeyStrategy(params) {
  params = params || {};
  this.key = params.key || 'id';
  dbc(this.key, "Key is required");
}

function GuidKeyStrategy(params) {
  params = params || {};
  this.callSuper('constructor', params);
}

Cocktail.mix(GuidKeyStrategy, {
  '@extends': KeyStrategy,
  generate: function () {
    return uuid.v4();
  }
});

function SlugKeyStrategy(params) {
  params = params || {};
  this.callSuper('constructor', params);
}

Cocktail.mix(SlugKeyStrategy, {
  '@extends': KeyStrategy,
  generate: function (name) {
    dbc([name], "Name is required");
    return slug(name);
  }
});

function TokenKeyStrategy(params) {
  params = params || {};
  this.callSuper('constructor', params);
}

Cocktail.mix(TokenKeyStrategy, {
  '@extends': KeyStrategy,
  generate: function () {
    return hat();
  }
});


module.exports = {
  GuidStrategy: GuidKeyStrategy,
  SlugStrategy: SlugKeyStrategy,
  TokenStrategy: TokenKeyStrategy
};