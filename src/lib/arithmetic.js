'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }
  return (x + y);
};

arithmetic.sub = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }
  return (x - y);
};
