'use strict';

const greet = module.exports = {};

greet.hello = (name) => {
  try {
    if (name === '' || typeof name !== 'string') {
      throw new Error ('Name must be put in or name must be a string of letters.');
    }
    return `Hello there, ${name}.`;
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

greet.hello = (4);



// This is the less robust wa
// greet.hello = (name) => {
//   if (name === '' || typeof name !== 'string') {
//   throw new Error('Name must be put in or name must be a string of letters.');
//   }
//   return `Hello there, ${name}.`;
// };

// greet.hello = (4);

