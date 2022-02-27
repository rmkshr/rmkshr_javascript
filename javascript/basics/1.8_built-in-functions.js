/**
 * @author ramkishore
 */
//Just like java, there are many javascript built in functions
// that makes the life of a programmer much easier. Below are the few examples.

// To know about all the available built it functions, visit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference


var manager = "Vishwa"; 
var techLead = "Sasi"; 

console.log(manager.toUpperCase()); // converts the entire string to upper case. 

// returns the index of the character 's'. NOTE : the arg you pass is case sensitive!!
console.log(techLead.indexOf("s")); // output : 2
console.log(techLead.indexOf("S")); // output : 0

// Replaces upper case S with lower case s
console.log(techLead.replace("S", "s"));