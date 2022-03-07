/**
 * @author ramkishore
 */

// Arrow functions

// Below is the regular way of defining a function.
const getOrganisation = function (org) { 
    return {
        company : org, 
        website : `www.${org}.com`
    }
}


const orgObject = getOrganisation("apple");
console.log(JSON.stringify(orgObject, null, 1));

//We can define the same function using arrow operators like below. 
//We can define a function like below only when there is one param and the function body has only a return statement.
// (), this is needed only when you return an object. 
const getOrg = orgName => (
    {
        company : orgName, 
        website : `www.${orgName.toLowerCase()}.com`
    }
)

console.log(JSON.stringify(getOrg("AppleComputers"), null, 1));

// Adding two numbers. 
// Curly braces are used only when you return an object.

const addition = (a,b) => a + b;
console.log(addition(2,2));

const arithmeticOperation = (a, b, sign) => { 
    switch(sign) { 
        case "+" : 
            return a + b;
        case "-" : 
            return a - b;
        case "*" : 
            return a*b;
    }
}
console.log(arithmeticOperation(1,1,"+"));