'use strict';

const greet = module.exports = {};

greet.hi = (name) => {
  if (name === '' || typeof name !== 'string') {
    throw new Error('No name input or not a string');
  }
  return `Hello there, ${name}.`;
};

