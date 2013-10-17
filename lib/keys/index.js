'use strict'

var Cocktail = require('cocktail')
  , uuid = require('node-uuid')
  , hat = require('hat')
  , slug = require('slugs')
  , dbc = require('dbc.js')
  ;

function KeyStrategy() {

}

Cocktail.mix(KeyStrategy, {
  constructor: function (params) {
    var self = this;
    params = params || {};
    self.key = params.key || 'id';
    dbc(self.key, "Key is required");
  }
});


function GuidKeyStrategy() {

}

Cocktail.mix(GuidKeyStrategy, {
  '@extends': KeyStrategy,
  constructor: function (params) {
    var self = this;
    params = params || {};
    self.key = params.key || 'id';
    dbc(self.key, "Key is required");
  },
  generate: function () {
    return uuid.v4();
  }
});

function SlugKeyStrategy() {

}

Cocktail.mix(SlugKeyStrategy, {
  '@extends': KeyStrategy,
  constructor: function (params) {
    var self = this;
    params = params || {};
    self.key = params.key || 'id';
    dbc(self.key, "Key is required");
  },
  generate: function (name) {
    dbc([name], "Name is required");
    return slug(name);
  }
});

function TokenKeyStrategy() {

}

Cocktail.mix(TokenKeyStrategy, {
  '@extends': KeyStrategy,
  constructor: function (params) {
    var self = this;
    params = params || {};
    self.key = params.key || 'id';
    dbc(self.key, "Key is required");
  },
  generate: function () {
    return hat();
  }
});


module.exports = {
  GuidStrategy: GuidKeyStrategy,
  SlugStrategy: SlugKeyStrategy,
  TokenStrategy: TokenKeyStrategy
};