'use strict';

const greet = require('../lib/greet.js');

test('Should return hello name', () => {
  expect(greet.hi('world')).toEqual('hello world');
});
test('Should return null', () => {
  expect(greet.hi(45)).toEqual(null);
});

