const person = { 
    firstName : "Quentine",
    age : 55,
    isFemale : false,
    dob : new Date(1965,1,15).toJSON(),
    address : {
        city : "Texas",
        pinCode : "USATXS"
    },
    toString : function() {
        return `Name : ${this.firstName} Age : ${this.age}`
    },
    deleteMe : true
};

// Accessing data from the object.
// Lot of code to access three properties of an object.
const personName = person.firstName;
const personAge = person.age;
const personDeleteFlag = person.deleteMe;

console.log(personName);
console.log(personAge);
console.log(personDeleteFlag);


//Spread operator. 
const {firstName : name, // getting firstName property from person object and renaming it to name.
       age, 
       deleteMe, 
       address : {city : town, pinCode : zipCode} // getting city property and renaming it to town.
    } = person; // the object from which we access the properties.

console.log("\n" + "Using Spread Operator");
console.log(name);
console.log(age);
console.log(deleteMe);
console.log(town);
console.log(zipCode);