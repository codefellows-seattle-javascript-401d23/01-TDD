'use strict';

const greet = require('../lib/greet.js');

describe('greet module test aka greet.test.js', () => {
  test('Should return null', () => {
    expect(greet.aloha()).toEqual(null);
  });
  test('Should return Hello World', () => {
    expect(greet.aloha(World)).toEqual('Hello World');
  });
});
