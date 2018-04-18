'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('tests for the add method', () => {
  test('both arguments should be numbers', () => {
    expect(arithmetic.add('string', 2)).toEqual(null);
  });
  test('should return sum of the arguments', () => {
    expect(arithmetic.add(1, 2)).toEqual(3);
  });
});

describe('tests for the subtract method', () => {
  test('both arguments should be numbers', () => {
    expect(arithmetic.sub('string', 2)).toEqual(null);
  });
  test('should return second argument substract from first argument', () => {
    expect(arithmetic.sub(5, 2)).toEqual(3);
  });
});
