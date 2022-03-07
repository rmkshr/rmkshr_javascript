/**
 * @author ramkishore
 */

// Objects 

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

//person.lastName = "terrantino"; //Here we cannot compute the keys.
person["lastName"] = "terrantino"; // We can compute the keys here as well. 

//delete person.deleteMe;
delete person["deleteMe"];

console.log(person.toString());
console.log(person);

// Loop through all the properties of an object.
for(const p in person){
    console.log(p);
    console.log(person[p]);
}

console.log(Object.keys(person));
console.log(Object.values(person));