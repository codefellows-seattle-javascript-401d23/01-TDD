'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet.hi', () => {
    test('Should return Hello World!', () => {
      expect(greet.hi('World')).toEqual('Hello World!');
    });
    test('Should return null if non string', () => {
      expect(greet.hi('')).toEqual(null);
      expect(greet.hi()).toEqual(null);
    });
  });
});
