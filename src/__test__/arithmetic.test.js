'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('greet module test aka greet.test.js', () => {
  test('for add- This is Blank and Should return null', () => {
    expect(arithmetic.add()).toEqual(null);
  });
  test('for add- This is a string and Should return null', () => {
    expect(arithmetic.add('Josh')).toEqual(null);
  });
  test('for add- Should return 3', () => {
    expect(arithmetic.add(1, 2)).toEqual(3);
  });
  test('for sub- This is Blank and Should return null', () => {
    expect(arithmetic.sub()).toEqual(null);
  });
  test('for sub- This is a string and Should return null', () => {
    expect(arithmetic.sub('Josh')).toEqual(null);
  });
  test('sub- Should return 1', () => {
    expect(arithmetic.sub(2, 1)).toEqual(1);
  });
});
