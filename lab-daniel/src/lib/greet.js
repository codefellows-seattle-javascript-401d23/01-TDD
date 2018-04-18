'use strict';

const greet = (name) => {
  if (name === '' || typeof name !== 'string') {
    return null;
  }
  return `hello ${name}`;
};

exports.greet = greet;
