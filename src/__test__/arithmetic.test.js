'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('greet module test aka greet.test.js', () => {
  test('This is Blank and Should return null', () => {
    expect(arithmetic.add()).toEqual(null);
  });
  test('This is a string and Should return null', () => {
    expect(arithmetic.add('Josh')).toEqual(null);
  });
  test('Should return 3', () => {
    expect(arithmetic.add(1, 2)).toEqual(3);
  });
});
