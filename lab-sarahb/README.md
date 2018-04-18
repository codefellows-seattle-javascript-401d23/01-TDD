In your README.md file, describe the exported values of each module defined in your lib directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.
##greet module
- The module greet.js should export a single function.

- The greet function should have a single parameter (arity of one) that should expect a string as it's input

- The greet function should return the input name, concatenated with "hello ": eg. ("hello susan")
- The greet function should return null if the input is not a string
Arithmetic Module

##arithmetic module

- the arithmetic.js module should have add and sub methods that implement addition and subtraction.

- The add method should have a 2 parameters (airty of two)
if either argument is a non-number the function should return null
else return the sum of the 2 numbers

- The sub method should have 2 parameters (airty of two)
if either argument is a non-number the function should return null
else return the second parameter subtracted from the first parameter