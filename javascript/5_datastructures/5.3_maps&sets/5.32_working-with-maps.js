/**
 * @author ramkishore
 */


const map = new Map();
map.set("firstName", "James");
map.set("lastName", "Bond");
map.set("age", 45);

// We can also write the above lines like the below by chaining the set method.
map.set("firstName", "James").set("lastName", "Bond").set("age", 45).set("delete", true);

console.log(map);

//find the size of map using the size function.
console.log(map.size);

//Check if a map has a particular key.
console.log(map.has("firstName")); // returns true
console.log(map.has("google")); // returns false

//Get the value of a key.
console.log(map.get("firstName"));

//Delete a key value pair
console.log(map.delete("delete"));

//Convert a map into an Object
console.log(Object.fromEntries(map.entries()));

//Clear out an entire map
map.clear();
console.log(map.size);