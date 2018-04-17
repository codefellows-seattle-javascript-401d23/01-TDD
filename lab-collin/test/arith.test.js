'use strict';

const arithmetic = require('../lib/arithmetic');

describe('add.test.js', () => {
  test('Should return sum of arguments', () => {
    expect(arithmetic.add(1, 5)).toEqual(6);
  });
});

describe('subtract.test.js', () => {
  test('Should return subtraction of arguments', () => {
    expect(arithmetic.sub(5, 1)).toEqual(4);
  });
});

describe('invalid.test.js', () => {
  test('Should return null', () => {
    expect(arithmetic.add('sam', 'hamm')).toEqual(null);
  });
});
