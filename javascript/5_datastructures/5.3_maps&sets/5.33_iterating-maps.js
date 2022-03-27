/**
 * @author ramkishore
 */

// Iterating Maps

const map = new Map().set("firstName", "James").set("lastName", "Bond").set("age", 45).set("delete", true);

console.log(map.keys());

// We can iterate through the map using the keys or the values.

console.log("keys");
for(const key of map.keys()){
    console.log(key);
}

console.log("values");
for(const value of map.values()){
    console.log(value);
}

console.log(map.entries());
for(const entry of map) {
    console.log(entry);
    console.log(entry[0]);
    console.log(entry[1]);
}

