'use strict';

var container = require('../shared').container
  , _ = require('lodash')
  , expect = require('expect.js')
  , Rule = require('../../src/validator/rule');

describe('Validator', function () {

  describe('Rule', function () {

    it('name should be required', function () {
      try {
        var rule = new Rule(null, null, true);
      } catch (e) {
        expect(e instanceof Error).to.be.ok();
      }
    });


  });
});