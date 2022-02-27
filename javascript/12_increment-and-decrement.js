/**
 * @author ramkishore
 */
// Increment and decrement operators. 

// postfix operators. 
// The postfix operator : value++, increments the value and returns the value that was before incrementing. 
// So, if you need the incremented value, you need to access that variable again.

console.log("Postfix Operation");
var index = 0;
console.log(index++);
console.log(index);
console.log(index--);
console.log(index);


// prefix operators.
// The prefix operator : ++value, increments the value and returns the value after incrementing. 
// So, you get the result right then and there.

console.log("\n" + "Prefix Operation");
var numberOne = 0;
console.log(++numberOne);
console.log(--numberOne);