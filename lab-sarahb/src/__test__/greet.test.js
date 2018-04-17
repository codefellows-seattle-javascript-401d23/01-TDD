'use strict'
const greet = require('../lib/greet');

describe('greet.test.js', () => {
    describe('greet.hi', () => {
        test('Should return hello name', () => {
            expect(greet.hi('gregor')).toEqual('hello gregor');
        });
    });
});