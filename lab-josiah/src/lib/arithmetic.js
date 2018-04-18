'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (val1, val2) => {
  if (typeof val1 !== 'number' || typeof val2 !== 'number') return null;
  return val1 + val2;
};

arithmetic.sub = (val1, val2) => {
  if (typeof val1 !== 'number' || typeof val2 !== 'number') return null;
  return val1 - val2;
};
