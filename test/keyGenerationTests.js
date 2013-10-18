'use strict';

var expect = require('expect.js')
  , Strategies = require('../lib/keys')
  ;

describe('GuidStrategy', function () {
  var strategy = new Strategies.GuidStrategy();
  describe('#generate()', function () {
    it('should setup properly', function () {
      expect(strategy).to.be.ok();
      expect(strategy.key).to.be('id');
    });

    it('should generate key', function () {
      var key = strategy.generate();
      console.log(key);
      expect(key).to.be.ok();
    });
  });
});

describe('TokenStrategy', function () {
  var strategy = new Strategies.TokenStrategy();
  describe('#generate()', function () {
    it('should setup properly', function () {
      expect(strategy).to.be.ok();
      expect(strategy.key).to.be('id');
    });

    it('should generate key', function () {
      var key = strategy.generate();
      console.log(key);
      expect(key).to.be.ok();
    });
  });
});

describe('SlugStrategy', function () {
  var strategy = new Strategies.SlugStrategy();
  describe('#generate(name)', function () {
    it('should setup properly', function () {
      expect(strategy).to.be.ok();
      expect(strategy.key).to.be('id');
    });
    it('name should be required', function () {
      expect(function () {
        strategy.generate();
      }).to.throwError()
    });

    it('should generate key', function () {
      var key = strategy.generate("This is my fawesome slug");
      console.log(key);
      expect(key).to.be.ok();
    });
  });
});