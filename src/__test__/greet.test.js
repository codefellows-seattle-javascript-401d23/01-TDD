'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet.greet', () => {
    test('Should return null', () => {
      expect(greet.greet('')).toEqual(null);
    });
    test('Should say hello world', () => {
      expect(greet.greet('world')).toEqual('hello world');
    });
  });
});
