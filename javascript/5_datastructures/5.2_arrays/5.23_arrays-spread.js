/**
 * @author ramkishore
 */

// Arrays Spread operator

const arrayOne = ["good", "morning"];
const arrayTwo = ["have", "a", "nice", "day"];

// We can use the spread operator to combine two different arrays into one, without using the loop operation.
const catchPhrase = [...arrayOne, ...arrayTwo];
console.log(catchPhrase);

// We can also use the spread operator while passing arguments into a function.

const concatString = (stringOne, stringTwo) => stringOne + stringTwo;
//console.log(concatString(arrayOne[0], arrayOne[1]));
console.log(concatString(...arrayOne));