'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  }
  return num1 + num2;
};

arithmetic.subtract = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  }
  return num1 - num2;
};
