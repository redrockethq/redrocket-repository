'use strict';

var container = require('../shared').container
  , _ = require('lodash')
  , expect = require('expect.js');

describe('MemoryStorage', function () {

  describe('Key Generation', function () {

    describe('Default Key Generation Strategy', function () {
      var storage = container.get('MemoryStorage');
      var keys = [];

      it('should generate a key', function () {
        expect(storage).to.be.ok();
        expect(storage.KeyGenerator.newKey).to.be.ok();
        var key = storage.KeyGenerator.newKey();
        expect(key).to.be.ok();
      });

      it('should generate 10 unique keys', function () {
        var amountToGenerate = 10;
        keys = generateKeys(storage, amountToGenerate);
        expect(keys.length).to.be(amountToGenerate);
      });

      it('should generate 100 unique keys', function () {
        var amountToGenerate = 100;
        keys = generateKeys(storage, amountToGenerate);
        expect(keys.length).to.be(amountToGenerate);
      });

      it('should generate 1000 unique keys', function () {
        var amountToGenerate = 1000;
        keys = generateKeys(storage, amountToGenerate);
        expect(keys.length).to.be(amountToGenerate);
      });

      function generateKeys(storage, amountToGenerate) {
        var keys = [];
        for (var i = 0; i < amountToGenerate; i++) {
          var key = storage.KeyGenerator.newKey();
          if (!_.contains(keys, key)) {
            keys.push(key);
          }
        }

        return keys;
      };

    });

  });
});

