'use strict';

function greet(inName) {
  if (inName === '' || typeof inName !== 'string') {
    return null;
  }
  return `Hello ${inName}!`;
}

exports.greet = greet;
