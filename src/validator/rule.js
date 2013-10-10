'use strict';

var dbc = require('dbc.js'),
  uuid = require('node-uuid');

function Rule($name, $message, $expression) {

  dbc([$name], "Name is required");
  dbc([$expression, "Operator is required"]);

  this.name = $name;
  this.message = $message;
  this.expression = $expression;
  this._id = uuid.v4();

  if (!$message) {
    this.message = this.name + " " + "is not valid";
  }
}

Rule.prototype.run = function () {
  var self = this;
  return typeof(this.expression) === 'function' ? this.expression() : (this.expression);
};


module.exports = Rule;