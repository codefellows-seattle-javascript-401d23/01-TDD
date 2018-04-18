'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet', () => {
    test('Should return null if parameter is not a string.', () => {
      expect(greet.greet(5)).toEqual(null);
    });
    test('should return valid greeting if parameter is a string.', () => {
      expect(greet.greet('world')).toEqual('hello world');
    });
  });
});
