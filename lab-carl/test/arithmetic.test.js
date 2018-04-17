'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithetic.add', () => {
    test('Should add numbers together', () => {
      expect(arithmetic.add(10, 5)).toEqual(15);
    });
    test('Should return null if a or b is not a number', () => {
      expect(arithmetic.add(1, 'a string')).toEqual(null);
      expect(arithmetic.add('a string', 1)).toEqual(null);
    });
  });
  describe('arithmetic.subtract', () => {
    test('Should return 6 if a is 10 and b is 4', () => {
      expect(arithmetic.subtract(10, 4)).toEqual(6);
    });
    test('Should return null if a or b is not a number', () => {
      expect(arithmetic.subtract(1, 'a string')).toEqual(null);
      expect(arithmetic.subtract('a string', 1)).toEqual(null);
    });
  });
});
