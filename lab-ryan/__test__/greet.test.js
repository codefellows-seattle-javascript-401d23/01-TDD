'use strict';

const greet = require('../lib/greet.js');

describe('Tests to check if non-string value or if "World" returns appropriate values', () => {
  test('Non-String value test expected value of null.', () => {
    const nonString = 8;
    expect(greet.greet(nonString)).toEqual(null);
  });
  test('Testing for passing world, expected value Hello world!', () => {
    const world = 'world';
    expect(greet.greet(world)).toEqual('Hello world!');
  });
});
