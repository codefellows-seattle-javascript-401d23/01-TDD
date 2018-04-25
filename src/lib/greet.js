'use strict';

const greet = module.exports = {};

greet.greet = (name) => {
  if (name === '' || typeof name !== 'string') {
    return null;
  }
  return `hello ${name}`;
};
