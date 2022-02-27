// Loops : Used to execute a peice of code untill a certain condition is met.

var names = [
    "Ram",
    "Kishore",
    "Senthil",
    "Sasi"
];

console.log("fori" + "\n");
// The usual for loop.
for (var q = 0; q < names.length; q++) { 
        console.log(names[q]);
}

console.log("\n" + "For Of Loop" + "\n");
// for of : Just like an enhanced for loop in java. 

for (const name of names) {
    console.log(name);
}

// For Each loop
console.log("\n" + "For Each" + "\n");
names.forEach(function (name) {
    console.log(name);
});