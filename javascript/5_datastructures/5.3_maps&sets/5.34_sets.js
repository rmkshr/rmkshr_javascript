/**
 * @author ramkishore
 */

//Sets


//An Array allows duplicates.
const numberArray = [1,2,2,3,3,4,5];
console.log(numberArray);

//A set does not allow duplicates.
const numberSet = new Set();
numberSet.add(1).add(2).add(3).add(3).add(4).add(5).add(6).add(2);

console.log(numberSet);

// Set and Map share the same set of APIs.
console.log(numberSet.delete(6));
console.log(numberSet);

// Check if an element is present
console.log(numberSet.has(6));
console.log(numberSet.has(4));

// Looping through the set

for(const element of numberSet){
    console.log(element);
}

numberSet.forEach(element => console.log(element));

// To clear a set
console.log(numberSet.size);
numberSet.clear();
console.log(numberSet.size);

// To Remove duplicate from an array, you just need to convert and array into a set.

const setFromArray = Array.from(new Set(numberArray));
console.log(setFromArray);
