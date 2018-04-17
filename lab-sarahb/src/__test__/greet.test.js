'use strict';

const greet = require('../lib/greet');

test('Should return hello name', () => {
  expect(greet.hi('poop')).toEqual('hello poop');
});

