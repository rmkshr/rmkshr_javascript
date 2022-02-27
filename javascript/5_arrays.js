//The Array object, as with arrays in other
// programming languages, enables storing a collection of multiple 
// items under a single variable name, and has
// members for performing common array operations.

var myTeam = [
    "Mani", // element 0
    "Vishwa", // element 1
    "Sasi", // element 2
    "Senthil" // element 3
];

//Indexing starts from '0' not '1'.

console.log(myTeam); // grabs all the element of an array.
console.log(myTeam[0]); // grabs only the element '0' of an array.
console.log(myTeam[1]); // grabs only the element '1' of an array.
console.log(myTeam[2]); // grabs only the element '2' of an array.
console.log(myTeam[3]); // grabs only the element '3' of an array.
console.log(myTeam[4]); // returns undefined when trying to grab an element out of bounds.

// find the length of array by using the length function.
console.log("Size of myTeam Array : " + myTeam.length); 