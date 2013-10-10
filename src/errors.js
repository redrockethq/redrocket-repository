'use strict';
var util = require('util')
  ;

function AbstractError(message) {
  Error.captureStackTrace(this, this);
  this.message = message;
}
util.inherits(AbstractError, Error);

function EntityNotFoundError() {
  AbstractError.prototype.constructor.call("Entity not found");
}
util.inherits(EntityNotFoundError, AbstractError);

function EntityKeyNotFoundError(keyName) {
  AbstractError.prototype.constructor.call("Key Strategy is set to none, and a the entity doesn't have a key named " + keyName + ".  Your entity must have a key.");
}
util.inherits(EntityKeyNotFoundError, AbstractError);


module.exports = {
  AbstractError: AbstractError,
  EntityNotFoundError: EntityKeyNotFoundError,
  EntityKeyNotFoundError: EntityKeyNotFoundError
};