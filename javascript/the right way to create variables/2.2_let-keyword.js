/**
 * @author ramkishore
 */
/* Using the "let" keyword instead, to create new variables is a good practice. 
Let us consider the same example that was used to demonstrate hoisting. 
*/


 for(let i = 0; i < 5; i++){
    console.log(i);
 }

 console.log("Value outside the loop : " + i);

 // When we run the above program, we get an error at line:10.
 
 /* So, from the above example when we use the "let" keyword, the scope remains within the designated area. 
 This is the best practice to follow when writing code using javascript.*/ 