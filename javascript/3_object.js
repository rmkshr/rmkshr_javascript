//Objects are a collection of properties. 
// We can have nested objects in java script.

var person = { 
    firstName : "Quentine",
    lastName : "terratnino",
    age : 55,
    isFemale : false,
    dob : new Date(1965,1,15).toJSON(),
    address : {
        city : "Texas",
        pinCode : "USATXS"
    }
};

console.log(person.firstName);
console.log(person.age);
console.log(person.isFemale);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));