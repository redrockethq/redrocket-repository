'use strict';
var expect = require('expect.js')
  , Memory = require('../lib/storages').Memory
  , uuid = require('node-uuid')
  ;

describe('Memory Storage', function () {

  describe('#constructor(params)', function () {

    it('should setup without any data', function () {
      var memory = new Memory();
      expect(memory).to.be.ok();
      expect(memory._data.length).to.be(0);
    });

    it('should seed initial data', function () {
      var memory = new Memory({
        seed: ['one', 'two', 'three']
      });
      expect(memory).to.be.ok();
      expect(memory._data.length).to.be(3);
    });

  });


  describe('#all(callback)', function () {

    it('should return all 3 entities', function (done) {

      var memory = new Memory({
        seed: ['one', 'two', 'three']
      });

      expect(memory).to.be.ok();
      expect(memory._data.length).to.be(3);

      memory.all(function (err, entities) {
        if (err) {
          done(err);
        } else {
          expect(entities.length).to.be(3);
          done();
        }
      });

    });

  });

  describe('#getByKey(key, callback)', function () {
    var memory;

    beforeEach(function () {
      var seed = [
        {
          id: 1,
          name: "Bob"
        },
        {
          id: "Blah",
          name: "Blah"
        },
        {
          id: 2,
          name: "Billy"
        }
      ]

      memory = new Memory({
        seed: seed
      });
    });

    it('should retrieve a known entity by id when the id is numeric', function (done) {

      memory.getByKey(1, function (err, entity) {
        if (err) {
          done(err);
        } else {
          expect(entity).to.be.ok();
          expect(entity.name).to.be("Bob");
        }

        done();
      });

    });

  });

  describe('#save(entity, callack)', function () {

    it('should require an object as an entity', function () {

      var memory = new Memory();
      expect(function () {
        memory.save(function () {
        }, function (err, entity) {

        });
      }).to.throwError();

      expect(function () {
        memory.save({ }, function (err, entity) {

        });
      }).to.not.throwError();
    });

    it('should save the object', function (done) {
      var memory = new Memory();
      expect(memory).to.be.ok();
      console.log(memory);
      expect(memory._data.length).to.be(0);
      console.log(memory._data);
      memory.save({}, function (err, entity) {
        expect(err).to.not.be.ok();
        expect(memory._data.length).to.be(1);
        expect(entity).to.be.ok();
        done();
      });
    });

    it('should assign key if none is passed', function (done) {
      var memory = new Memory();

      var keyless = {};
      expect(keyless.id).to.not.be.ok();
      expect(memory._data.length).to.be(0);
      memory.save({}, function (err, entity) {
        expect(err).to.not.be.ok();
        expect(memory._data.length).to.be(1);
        expect(entity.id).to.be.ok();
        console.log(entity);
        done();
      });
    });

    it('should ignore key if passed', function (done) {

      var memory = new Memory();
      var hasKey = { id: uuid.v4()};
      expect(hasKey.id).to.be.ok();
      expect(memory._data.length).to.be(0);
      memory.save({}, function (err, entity) {
        expect(err).to.not.be.ok();
        expect(memory._data.length).to.be(1);
        expect(entity.id).to.be.ok(hasKey.id);
        console.log(entity);
        done();
      });
    });


  });

});