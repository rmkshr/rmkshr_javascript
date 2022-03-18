/**
 * @author ramkishore
 */


// An object containing person details.
const person = {
    firstName : "James",
    lastName : "Bond",
    age : 45
};

console.log(person);

// The difference between object and map is that a map allows us to store any object of any data type as a value.
// With a map we can also store an object as a key.

const map = new Map();
map.set("firstName", "James");
map.set("lastName", "Bond");
map.set("age", 45);

console.log(map);

// Interesting use cases.
// We can also pass an object as a key.
// There is difference between "1" and 1 as key.

const mapTwo = new Map();
mapTwo.set("firstName", "James");
mapTwo.set("lastName", "Bond");
mapTwo.set("age", 45);
mapTwo.set({runTime : "140"}, "No Time to Die");
mapTwo.set("1", "oneAsString");
mapTwo.set(1, "oneAsInteger");
mapTwo.set(1, "oneAsObject"); // Now since keys in a map needs to be unique, oneAsInteger is replaced by oneAsObject.

console.log(mapTwo);