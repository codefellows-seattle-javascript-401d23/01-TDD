'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (numOne, numTwo) => {
  if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
    return null;
  }
  return numOne + numTwo;
};

arithmetic.sub = (numOne, numTwo) => {
  if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
    return null;
  }
  return numOne - numTwo;
};

