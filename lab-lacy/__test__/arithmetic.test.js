'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {
    test('Should return two values added together', () => {
      expect(arithmetic.add(2, 3)).toEqual(5);
    });
    test('Should return null if non-numbers are used', () => {
      expect(arithmetic.add()).toEqual(null);
    });
  });
  describe('arithmetic.sub', () => {
    test('Should return two values subtracted', () => {
      expect(arithmetic.sub(3, 2)).toEqual(1);
    });
    test('Should return null if non-numbers are used', () => {
      expect(arithmetic.sub()).toEqual(null);
    });
  });
});
