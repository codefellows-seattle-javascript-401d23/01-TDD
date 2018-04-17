# Lab 01: Node Ecosystem
**Author**: Carl Olson
**Version**: 1.0.0 

## Overview
This lab focused on learning how to export modules and then using Test Driven Development to run tests on functions.

The greet.js module exports a single function that takes a single parameter. It expects the parameter to be a string and returns `Hello ${parameter}` or null if invoked with an argument that is not a string.

The arithmetic module exports an object. The object has access to two methods: `add` and `subtract`. The method ```arithetic.add``` expects two parameters and returns the sum of them, or if either parameter is not a number it returns null. The method ```arithetic.subtract``` expects two parameters and returns the value of the first parameter minus the second, or if either parameter is not a number it returns null. 

## Getting Started
- Install devDependecies.
- Create new folder /lib for js module files. 
- Create test folder with test files.

## Architecture
- JavaScript
- Node
- Babel
- ESLint
- Jest

## Change Log

04-16-2018 9:00pm - Installed dependencies and setup folders and files.
04-16-2018 10:00pm - Wrote main functions in arithmetic and greet js files and started writing tests.
04-17-2018 1:30pm - Completed tests and passing. 

## Credits and Collaborations
Consulted with my classmate Kris on this. 