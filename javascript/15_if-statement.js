//if statement.
// The if statement allows us to execute a piece of code, based on a specific condition.


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

