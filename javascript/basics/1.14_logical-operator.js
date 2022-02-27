/**
 * @author ramkishore
 */
// Logical operator 
// && , ||
// Logical operator allows us to chain two or more comparison operators together. 


function comparator (numOne, numTwo) { 
    console.log(numOne == numTwo && numOne - numTwo == 0); 
    console.log(numOne == numTwo || numOne < numTwo ); 
}

comparator(10, 10);