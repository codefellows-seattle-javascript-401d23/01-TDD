# 01: Node Ecosystem
**Author**: David Stoll
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)
## Overview
This lab is intended to work through some of the elements of TDD, showing how to run basic tests on functions that are present in JavaScript modules. 
## Documentation
`greet.greet()` - function with an arity of one, taking in a `string`. String is entered into a template literal to output the message 'hello `string`'. Non string parameters result in an output of `null`.
`arithmetic.add()` - function with an arity of two, taking in two `numbers`. Numbers are passed through the function with an output of the sum of the two numbers. Non-numbers entered results in an output of `null`.
`arithmetic.sub()` - function with an arity of two, taking in two `numbers`. Numbers are passed through the function with an output of the sum of the two numbers. Non-numbers entered results in an output of `null`.
## Getting Started
1. Run npm init and install dependencies needed for linter and testing.
2. Create file structure with lib and \__test__\ folders to hold js & test files
3. Write test for `greet()` to show string in template literal
4. Complete greet.js to specs of test
5. Write tests for `add()` & `sun()` for the math computations
6. Complete arithmetic.js to specs of test
## Architecture
Built in VSCode with JavaScript, node.js, eslinter, & jest.
