// Switch Statements. 

// Let us try to convert this function using if statement into switch statement.
console.log("Using If statement ========")
function printGender (gender) { 
    if(gender == "M" || gender == "Male") { 
        console.log("MALE");
    } else if (gender == "F" || gender == "Female") {
        console.log("FEMALE");
    } else {
        console.log("UNKNOWN");
    }
}

printGender("F");

// The same function above using switch statement.
console.log("\n" + "Using switch case =======")
function genderUsingSwitch (gender) { 

    switch(gender) { 
        case "M" : 
        console.log("Male");
        break;

        case "Male" : 
        console.log("Male");
        break;

        case "F" : 
        console.log("Female");
        break;

        case "Female" : 
        console.log("Female");
        break;

        default : 
        console.log("Unknown");
    }
}

genderUsingSwitch("F");