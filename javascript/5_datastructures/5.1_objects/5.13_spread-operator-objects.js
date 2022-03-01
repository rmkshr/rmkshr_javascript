// Spread operator on Objects.

const person = { 
    firstName : "Quentine",
    lastName : "terratnino",
    age : 55,
    isFemale : false,
    dob : new Date(1965,1,15).toJSON(),
    area : "hollywood",
    occupation : "director",
    toString : function() {
        return `Name : ${this.firstName} Age : ${this.age}`
    },
    deleteMe : true
};

const address = {
    city : "Texas",
    pinCode : "USATXS"
};

// To combine person and the address object, we can create a new object and begin copying properties from
// both the objects in to the new object. 

const cast = { 
    castName : person.firstName,
    city : address.city,
    zip : address.pinCode,
    age : person.age, 
    area : person.area
};

console.log(Object.values(cast));

// We can do the same operation effectively as follows. Using the spread operator. 

const people = { 
    ...person,
    address : {...address} // we can also enclose properties in nested objects like this.
};

console.log("\n" + "With Spread Operator");
console.log(Object.values(people));