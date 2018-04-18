'use strict';

const greet = require('../lib/greet');
const arithmetic = require('../lib/arithmetic');

describe('greet.js', () => {
  test('should return null', () => {
    expect(greet()).toBeNull();
  });
  test('should return \'hello world\'', () => {
    expect(greet('world')).toEqual('hello world');
  });
});

describe('arithmetic.js', () => {
  describe('arithmetic.add', () => {
    test('should return the sum of two values', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
      expect(arithmetic.add(-4500, 4500)).toEqual(0);
    });
    test('Should return undefined', () => {
      expect(arithmetic.add()).toBeUndefined();
      expect(arithmetic.add('lkdjsf', 'lksd')).toBeUndefined();
    });
  });

  describe('arithmetic.sub', () => {
    test('should return the subtraction of two values', () => {
      expect(arithmetic.sub(1, 2)).toEqual(-1);
      expect(arithmetic.sub(5000, -4000)).toEqual(9000);
    });
    test('Should return undefined', () => {
      expect(arithmetic.sub()).toBeUndefined();
      expect(arithmetic.sub('lkdjsf', 'lksd')).toBeUndefined();
    });
  });
});
