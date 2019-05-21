'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

// const randomNumArr = faker.random.number().split('');

// add
describe('inputs should be added together', () => {
  it('addition', () => {
    expect(arithmetic.add([1, 2, 3, 4])).toEqual(10);
  });
});

// subtract
describe('inputs should be subtracted', () => {
  it('subtraction', () => {
    expect(arithmetic.subtract([30, 10, 5])).toEqual(15);
  });
});

// multiply
describe('inputs should be multiplied', () => {
  it('multiplication', () => {
    expect(arithmetic.multiply([1, 2, 3])).toEqual(6);
  });
});

// divide
describe('inputs should be divided', () => {
  it('division', () => {
    expect(arithmetic.divide(3, 1)).toEqual(3);
  });
});

describe('array should only consist of numbers', () => {
  it('all elements are not numbers', () => {
    expect(arithmetic.add([1, 'hello', 3])).toEqual(NaN);
  });
});
