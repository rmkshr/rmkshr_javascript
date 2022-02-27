/**
 * @author ramkishore
 */
console.log("let keyword");
let myName = "Ramkishore"; 
// Program logic
console.log(myName);

myName = {};
// Some other logic
console.log(myName);

myName = function () { 
    return "myName as a function";
}
console.log(myName());

myName = 2293;
// Additional program logic
console.log(myName);

/* From the above example you could see that, the intended type when declaring the variable "myName" was a String.
But, at the end of our entire program we ended up assigning a number after a series of changes to the data type involving the myName variable. 
This is not a good practice when writing a javascript code.*/
console.log("\n" + "Const Keyword");
// Introducing the "const" keyword. 

const org = "SMI";
console.log(org);

// In the below satement when i try to reassign a different value or a different data type to the variable "org", I am thrown an error by the compiler. 
// Basically Strings are immutable, even in javascript. 

//  org = 50;
//  console.log(org);

// This is not same when it comes to objects. 
const orgObject = {};
console.log(orgObject);

orgObject["client"] = "GHX";
orgObject["location"] = "Madurai"; 
orgObject["domain"] = "Health care";
console.log(orgObject);

delete orgObject.domain;
console.log(orgObject);

// We can mutate the orgObject, but cannot reassign the variable to another value or a variable. 