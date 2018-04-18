## Describe the exported values of each module defined in your `lib` directory:
In Arithmetic.js, the module is set to an empty object, outside of the function. Because there are two objects (sub, add), both are accessbile through the const arithmetic = module.exports = {};

In greet.js, the module export is exports.greet = greet because the greet function on arithmetic.test.js needs to access the greet function on arithmetic.js. 


## Time & Observation
I expected this would take 2 hours, but it took 3. It took quite a bit of time just to get the dependencies and structure right, and I had some issues with running node because of how I set it up. 

## Question
 I'm not sure what this means:
 Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use).


