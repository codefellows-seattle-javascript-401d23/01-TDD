'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet.hi', () => {
    test('Should return null when non-string value supplied', () => {
      expect(greet.hi()).toEqual(null);
    });
    test('Should return hello NAME', () => {
      expect(greet.hi('world')).toEqual('hello world');
    });
  });
});
