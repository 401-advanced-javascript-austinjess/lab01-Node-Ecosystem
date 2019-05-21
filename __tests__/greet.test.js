'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');

const randomName = faker.name.firstName();

describe('User should be greeted by name', () => {
  it('greet user', () => {
    expect(greet(randomName)).toEqual(`Hello ${randomName}`);
  });
});

describe('Input must be a string', () => {
  it('value is not a string', () => {
    expect(greet(1)).toEqual(null);
  });
});

// write a test that expects 'Hello world' when using world as the input
describe('hello world test', () => {
  it('hello world', () => {
    expect(greet('world')).toEqual(`Hello world`);
  });
});
