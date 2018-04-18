'use strict';

const greet = require('../lib/greet');
const arithmetic = require('../lib/arithmetic');

describe('greet.js', () => {
  test('This should return null', () => {
    expect(greet()).toBeNull();
  });
  test('This should return \'hello world\'', () => {
    expect(greet('world')).toEqual('hello world');
  });
});

describe('arithmetic.js', () => {
  describe('arithmetic.add', () => {
    test('This should return the sum', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
      expect(arithmetic.add(10, 15)).toEqual(25);
      expect(arithmetic.add(30, -30)).toEqual(0);
    });
    test('NaN should return null', () => {
      expect(arithmetic.add('foo', 'bar')).toBeNull();
    });
  });
  describe('arithmetic.sub', () => {
    test('This should subtract two values', () => {
      expect(arithmetic.sub(35, 70)).toEqual(-35);
      expect(arithmetic.sub(50, -3)).toEqual(53);
      expect(arithmetic.sub(-50, -3)).toEqual(-47);
    });
    test('return null if NaN', () => {
      expect(arithmetic.sub('foo', 'bar')).toBeNull();
    });
  });
});
