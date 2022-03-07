/**
 * @author ramkishore
 */

// Functions 

// Once defined, we need to invoke the function with parantheses. 
// In the below example : org is the parameter. And "apple" is the argument.

//It is always a good practice to use the const keyword when creating a function so that no re-assignment is allowed.
const getOrganisation = function (org) { 
    return {
        company : org, 
        website : `www.${org}.com`
    }
}


const orgObject = getOrganisation("apple");
console.log(JSON.stringify(orgObject, null, 1));