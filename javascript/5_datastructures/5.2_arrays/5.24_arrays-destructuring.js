/**
 * @author ramkishore
 */

//Array Destructuring

const orgList = [
    "vendormate",
    "ghx",
    "SMI",
    "Apple",
    "Google"
];

// Reading elements of an array.
const vendormate = orgList[0];
const ghx = orgList[1];
const smi = orgList[2];

console.log(vendormate);
console.log(ghx);
console.log(smi);

// The above block of code can be written like the below.

const [v, g, s, ...remaining] = orgList;

console.log(v);
console.log(g);
console.log(s);
console.log(remaining);