'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic', () => {
    test('should return the sum of both parameters.', () => {
      expect(arithmetic.add(5, 10)).toEqual(15);
    });
    test('should return the difference between the first and second parameters.', () => {
      expect(arithmetic.sub(10, 5)).toEqual(5);
    });
    test('should return null if either parameter is not a number.', () => {
      expect(arithmetic.add(5, 'string')).toEqual(null);
    });
    test('should return null if either parameter is anything but a number.', () => {
      expect(arithmetic.sub(15, [])).toEqual(null);
    });
  });
});
