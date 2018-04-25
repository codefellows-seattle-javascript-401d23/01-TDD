'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {
    test('Returns the sum of the two numbers', () => {
      expect(arithmetic.add(2, 3)).toEqual(5);
    });
    test('Returns null if either number are Nan', () => {
      expect(arithmetic.add('d', 7)).toEqual(null);
    });
  });
  describe('arithmetic.sub', () => {
    test('Returns the difference between two numbers', () => {
      expect(arithmetic.sub(8, 3)).toEqual(5);
    });
    test('Returns null if two numbers are not to be subtracted', () => {
      expect(arithmetic.sub('d', 2)).toEqual(null);
    });
  });
});
