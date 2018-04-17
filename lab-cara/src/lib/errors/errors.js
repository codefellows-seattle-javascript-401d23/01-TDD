'use strict';
//i dont know if this is for the lab 
const greet = module.exports = {};

//reference error 
// because it is a one line of code, i need to abstract this to be a one-line return statement
greet.helloReferenceError = name => `Hi there ${name} and ${otherName}!`;

greet.helloTypeError = (name) => {
  try {
    if (typeof name !== 'string') {
      throw new Error (`${name} must be a string of letters.`);
    }
  } catch (err) {
    console.error(err);
  }
  return undefined;
};


console.log(greet.helloTypeError(4));
// greet.helloReferenceError('cara'); //for line greet.helloReferenceError = name



