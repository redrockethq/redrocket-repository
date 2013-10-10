'use strict';

var dbc = require('dbc.js')
  , Rule = require('./rule');

function Validator() {
  this.entities = {};
}

Validator.prototype.registerRule = function (entity, rule) {
  var self = this;

  dbc([entity, typeof(entity) === 'object'], "Entity is required and must be an object");
  dbc([rule, typeof(rule) === 'Rule'], "Rule is required and must be of type Rule");

  if (!self.entities[typeof(entity)]) {
    self.entities[typeof(entity)] = [];
  }

  if (!self.entities[typeof(entity)][rule.name]) {
    self.entities[typeof(entity)][rule.name] = rule;
  } else {
    throw new Error('Rules associated with an entity must be unique');
  }
};

Validator.prototype.registerAllRules = function (entity, rules) {
  var self = this;

  dbc([entity, typeof(entity) === 'object'], "Entity is required and must be an object");

  _.forEach(rules, function (rule) {
    self.registerRule(entity, rule);
  });
};

Validator.prototype.addRule = function (entity, name, message, expression) {
  var self = this;
  dbc([entity, typeof(entity) === 'object'], "Entity is required and must be an object");

  var rule = new Rule(name, message, expression);
  self.register(entity, rule);
};

Validator.prototype.getRulesByEntity = function (entity) {
  var self = this;
  dbc([entity, typeof(entity) === 'object'], "Entity is required and must be an object");

  if (self.entities[typeof(entity)]) {
    return self.entities[typeof(entity)];
  } else {
    return [];
  }
};

module.exports = {
  $init: function (next) {

    if (this.has('Validator')) {
      this.register('Validator').as.singleton.from.ctor(Validator);
    }

    if (next) {
      next();
    }
  }
}