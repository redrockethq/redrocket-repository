'use strict';

var expect = require('expect.js')
  , Strategies = require('../../lib/keys')
  ;

describe('GuidStrategy', function () {
  var guidStrategy = new Strategies.GuidStrategy();
  describe('#generate()', function () {
    it('should setup properly', function () {
      expect(guidStrategy).to.be.ok();
      console.log(guidStrategy.id);
      expect(guidStrategy.key).to.be('id');
    });

    it('should generate key', function () {
      var key = guidStrategy.generate();
      console.log(key);
      expect(key).to.be.ok();
    });
  });
});

describe('TokenStrategy', function () {
  var tokenStrategy = new Strategies.TokenStrategy();
  describe('#generate()', function () {
    it('should setup properly', function () {
      expect(tokenStrategy).to.be.ok();
    });

    it('should generate key', function () {
      var key = tokenStrategy.generate();
      console.log(key);
      expect(key).to.be.ok();
    });
  });
});

describe('SlugStrategy', function () {
  var slugStrategy = new Strategies.SlugStrategy();
  describe('#generate(name)', function () {
    it('should setup properly', function () {
      expect(slugStrategy).to.be.ok();
    });
    it('name should be required', function () {
      expect(function () {
        slugStrategy.generate();
      }).to.throwError()
    });

    it('should generate key', function () {
      var key = slugStrategy.generate("This is my fawesome slug");
      console.log(key);
      expect(key).to.be.ok();
    });
  });
});