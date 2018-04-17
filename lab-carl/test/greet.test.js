'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  test('Should return Hello World!', () => {
    expect(greet('World')).toEqual('Hello World!');
  });
  test('Should return null if non string', () => {
    expect(greet('')).toEqual(null);
    expect(greet()).toEqual(null);
  });
});
