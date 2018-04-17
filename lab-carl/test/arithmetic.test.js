'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithetic.add', () => {
    test('Should add numbers together', () => {
      expect(arithmetic.add(10, 5)).toEqual(15);
    });
  });
  describe('arithmetic.subtract', () => {
    test('Should return a - b', () => {
      expect(arithmetic.subtract(10, 5)).toEqual(5);
    });
  });
});
