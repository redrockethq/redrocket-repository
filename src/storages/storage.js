'use strict';

var dbc = require('dbc.js')
  , uuid = require('node-uuid');

function Storage($KeyGenerator, $Validator) {


  this.KeyGenerator = $KeyGenerator;
  dbc([this.KeyGenerator], 'KeyGenerator must be present');

  this.Validator = $Validator;
  dbc(this.Validator, "Validator is null");
}

module.exports = {
  $init: function (next) {
    this.register('Storage').as.ctor(Storage);
  }
};