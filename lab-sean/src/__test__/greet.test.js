'use strict';

const greet = require('../lib/greet.js');

describe('greet.test.js', () => {
  describe('greet.hello', () => {
    test('Should return Hello Name.', () => {
      expect(greet.hello('Kona')).toEqual('Hello Kona.');
    });
    test('Should return NULL if NAME is not a String', () => {
      expect(greet.hello(75)).toEqual(null);
    });
  });
});
