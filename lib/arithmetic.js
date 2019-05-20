'use strict';

let arithmetic = (module.exports = {});

arithmetic.add = function(arr) {
  const result = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return result;
};

arithmetic.subtract = function(arr) {
  const result = arr.reduce((acc, cur) => {
    return acc - cur;
  });
  return result;
};

arithmetic.multiply = function(arr) {
  const result = arr.reduce((acc, cur) => {
    if (typeof cur !== 'number') {
      return null;
    }
    return acc * cur;
  }, 1);
  return result;
};

arithmetic.divide = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  if (b === 0) {
    return null;
  }
  return a / b;
};
