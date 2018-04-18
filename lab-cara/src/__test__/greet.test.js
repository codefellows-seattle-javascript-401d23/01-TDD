'use strict';

const greet = require('../lib/greet.js'); 

describe('Testing if string is null or if it should return Hello World!', () => {
  test('should return null if not a string.', () => {
    expect(greet.greet(9)).toBeNull();
  });
  test('Should return Hello world', () => {
    expect(greet.greet('world')).toEqual('Hello world!');
  }); 
});
