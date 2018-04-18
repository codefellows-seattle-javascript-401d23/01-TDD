'use strict';

const greet = module.exports = {};

greet.aloha = (worldText) => {
  if (typeof worldText !== 'string') {
    return null;
  }
  return `Hello ${worldText}`;
};
