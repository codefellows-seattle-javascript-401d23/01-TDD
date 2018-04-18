'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic.test.js', () => {
  describe('These are unit tests to verify if our arithmetic module is running correctly', () => {
    test('Addition test to check with valid values', () => {
      const x1 = 9;
      const y1 = 4;  
      const ans1 = 13;
      expect(arithmetic.add(x1, y1)).toEqual(ans1);
    });
    test('This is a test to check if invalid values will return null as expected.', () => {
      expect(arithmetic.add('', 43)).toEqual(null);
    });
  });

  describe('These are unit tests to verify if our arithmetic module for subtraction is in working order', () => {
    test('Subtraction test to check with valid values', () => {
      expect(arithmetic.sub(59, 17)).toEqual(42);
    });
    test('This is a test to check if invalid values will return null as expected', () => {
      expect(arithmetic.sub('String Cheese', 52)).toEqual(null);
    });
  });
});
