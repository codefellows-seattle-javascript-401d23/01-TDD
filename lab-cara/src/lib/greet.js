'use strict';

const greet = (name) => {
  if (name === '' || typeof name !== 'string') {
    return null;
  }
  return `Hello ${name}!`;
};

exports.greet = greet;

