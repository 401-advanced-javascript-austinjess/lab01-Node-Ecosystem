'use strict';

const arithmetic = require('../lib/arithmetic.js');

// add
describe('inputs should be added together', () => {
  it('addition', () => {
    expect(arithmetic.add(1, 3)).toEqual(4);
  });
});

// subtract
describe('inputs should be subtracted', () => {
  it('subtraction', () => {
    expect(arithmetic.subtract(1, 3)).toEqual(-2);
  });
});

// multiply
describe('inputs should be multiplied', () => {
  it('multiplication', () => {
    expect(arithmetic.multiply(1, 3)).toEqual(3);
  });
});

// divide
describe('inputs should be divided', () => {
  it('division', () => {
    expect(arithmetic.divide(3, 1)).toEqual(3);
  });
});
