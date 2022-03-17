/**
 * @author ramkishore
 */

//Arrays 

const numbers = [14, 12, 25,8, 2, 2 ];

//Iterating through the array using "forEach"
numbers.forEach(number => console.log(number));

//Grabbing an element using the index of the array. 
console.log("\n" + "Grabbing a number using index");
console.log(numbers[2]);

//Changing the arrays value using index. 
console.log("\n" + "Changing the array value using index");
numbers[5] = 93;
console.log(numbers[5]);

//Adding a new value to the array. 
numbers.push(2);
console.log("\n" + "Adding new element to the array");
console.log(numbers);

//Removing an element of an array.
console.log("\n" + "Removing and element of the array");
const indexOfTwo = numbers.indexOf(2);
console.log("Index of  02 : " + indexOfTwo);
numbers.splice(indexOfTwo,2);
console.log("Final Array : " + numbers);
