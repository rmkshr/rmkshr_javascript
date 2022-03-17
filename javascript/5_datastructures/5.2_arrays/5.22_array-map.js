/**
 * @author ramkishore
 */

// Arrays with Map function

const numbers = [2,4,6,8,10];

// Arrays provide a map function to perform set of operations on each element of at array.
// We can do so by invoking the map function and passing in the callback function with the set of desired operations.

const numberTwice = numbers.map(number => number*2);
console.log(numberTwice);