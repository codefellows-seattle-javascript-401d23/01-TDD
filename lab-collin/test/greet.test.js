'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  test('Should return Hello and user string', () => {
    expect(greet.hi('MyName')).toEqual('Hello there, MyName.');
  });
});
