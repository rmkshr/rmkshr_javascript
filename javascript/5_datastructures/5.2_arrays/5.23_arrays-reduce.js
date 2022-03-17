/**
 * @author ramkishore
 */

// Arrays Reduce

const numbers = [2,4,6,8,10,20];

// A reduce functions performs a reducer operation, on an array and returns a single value.
// Let us find the sum of elements of the above array using the reduce function.

const sumOfAllElements = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumOfAllElements);