'use strict';
const greet = require('../src/lib/greet.js');
const arithmetic = require('../src/lib/arithmetic.js');

describe('Greet Module Tests', () => {
    test('Return null when non strings are supplied', ()=>{
        expect(greet.hi(20)===null);
    });
    test('return hello world when world is supplied', ()=>{
        expect(greet.hi('world')==='hello world');
    })
});
describe('Arithmetic Module Tests',()=>{
    test('arithmetic.add returns null with non-validinputs',()=>{
        expect(arithmetic.add('a','b')===('null'))})
    test('arithmetic.sub returns null with non-validinputs',()=>{
        expect(arithmetic.sub('a','b')===('null'))})
    test('arithmetic.add returns 5 when 3 and 2 are provided',()=>{
        expect(arithmetic.add(3,2)===(5))})
    test('arithmetic.sub to return 2 when 5 and 3 are provided',()=>{
        expect(arithmetic.sub(5,2)===(3))})
});