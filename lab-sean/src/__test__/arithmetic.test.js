'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {
    test('Should return the SUM of two numbers.', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });
    test('Should return the null if first number is NaN.', () => {
      expect(arithmetic.add('name', 2)).toEqual(null);
    });
    test('Should return the null if second number is NaN.', () => {
      expect(arithmetic.add(2, 'name')).toEqual(null); 
    });
  });
  describe('arithmetic.subtract.js', () => {
    test('Should return the DIFFERENCE of two numbers.', () => {
      expect(arithmetic.subtract(10, 5)).toEqual(5);
    });
    test('Should return the null if first number is NaN.', () => {
      expect(arithmetic.subtract('name', 2)).toEqual(null);
    });
    test('Should return the null if second number is NaN.', () => {
      expect(arithmetic.subtract(2, 'name')).toEqual(null); 
    });
  });
});
