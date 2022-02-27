/**
 * @author ramkishore
 */
// Ternary If statements. 

// The applicable conditions to use the ternary if statements are as follows. 
// 1 - The condition has only one if condition and one else condition. 
// 2 - Each condition has only one program statement in the body. 

// The conventional way. 
var number = 5; 

if(number % 2 == 0) { 
    console.log("Even");
} else { 
    console.log("Odd");
}

// Implementing the same logic above using ternary if statement. 
var ternaryInput = 8;
var result = ternaryInput % 2 == 0 ? "Even" : "Odd";

console.log("Ternary result : " + result);