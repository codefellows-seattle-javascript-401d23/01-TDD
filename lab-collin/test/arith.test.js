'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arith.test.js', () => {
  test('Should return sum of arguments', () => {
    expect(arithmetic.add(1, 5)).toEqual(6);
  });
});
