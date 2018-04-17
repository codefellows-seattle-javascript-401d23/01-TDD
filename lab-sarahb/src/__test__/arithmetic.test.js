'use strict';

const arithmetic = require('../lib/arithmetic.js');

test('Should return hello name', () => {
  expect(arithmetic.hi('poop')).toEqual('hello poop');
});
