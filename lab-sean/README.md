### Documentation
In your README.md file, describe the exported values of each module defined in your `lib` directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.

The `lib` directory contains two file, `arithmetic.js` and `greet.js`. In `arithmetic.js` there is one object being exported, however there are two methods attached to that object that are available outside the file because they are attached to the object, which is being exported. 

The first method is `.add` and it takes two parameters, which must be numbers, and returns a single value which is the sumation of the two parameters. The second method `subtract` is similar, it takes two parameters, which must be numbers, and returns a single value, the difference between the two. If the inputs are not as expected the function will return `null`

The second file in `lib` is `greet.js`. This function takes a single parameter, which must be a string, and returns a string, but is a concatination including the parameter of the function. If the input is not as expected the function will return `null`