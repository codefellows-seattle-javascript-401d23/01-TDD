'use strict';

const greet = require('../lib/greet.js');

test('Should return hello name', () => {
  expect(greet.hi('poop')).toEqual('hello poop');
});

