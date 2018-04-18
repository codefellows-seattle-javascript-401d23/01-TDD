'use strict';

const arithmetic = require('../lib/arithmetic.js'); 

describe('Arithmetic', () => {
  test('Should return null if not a number.', () => {
    expect(arithmetic.add('')).toBeNull();
  });
  test('Should return a number.', () => {
    expect(arithmetic.add(1, 2)).toEqual(3);
  });

  describe('Arithmetic', () => {
    test('Should return null if not a number.', () => {
      expect(arithmetic.sub('')).toBeNull();
    });
    test('Should return a number.', () => {
      expect(arithmetic.sub(2, 1)).toEqual(1);
    });
  });
});
