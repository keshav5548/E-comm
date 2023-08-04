//Extends means we have inherited ErrorHandler class from Error class which is default class in node
class ErrorHander extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHander;
