'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (x, y) => {
  if (x !== parseInt(x, 10) || y !== parseInt(y, 10)) {
    return null;
  }
  return x + y;
};

arithmetic.sub = (x, y) => {
  if (x !== parseInt(x, 10) || y !== parseInt(y, 10)) {
    return null;
  }
  return x - y;
};

