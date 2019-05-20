'use strict';

const greet = require('../lib/greet.js');

describe('User should be greeted by name', () => {
  it('greet user', () => {
    expect(greet('JOHN')).toEqual('Hello JOHN');
  });
});
