 /* 
 Hoisting : 
 During this entire course, you could notice that i have been using the var keyword to declare all the variables.
 This declaration type is used in the older versions of javascript. 
 This however is not a good practice. Let me demonstrate with an example below. 
 */

 for(var i = 0; i < 5; i++){
    console.log(i);
 }

 console.log("Value outside the loop : " + i);

 /* So, logically the variable i should not be accessible outside the for loop. 
 but, we are able to access the variable beyond its actual scope. 
 this is called "hoisting". The code interpretor created a global variable for every 
 variable that is declared during the program. We need to avoid this at any cost. */

