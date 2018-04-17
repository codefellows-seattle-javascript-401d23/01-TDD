'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  test('Should return Hello and user string', () => {
    expect(greet.hi('world')).toEqual('Hello world.');
  });
});

describe('invalid.test.js', () => {
  test('Should return null', () => {
    expect(greet.hi('')).toEqual(null);
  });
});
