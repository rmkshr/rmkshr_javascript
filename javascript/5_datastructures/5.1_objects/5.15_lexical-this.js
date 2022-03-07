/**
 * @author ramkishore
 */

// Lexical this 
// When we have nested functions, i.e : when you have a function inside a function, 
// the scope of "this" keyword is lost. This is called Lexical this. 
const person = { 
    firstName : "Ramkishore", 
    cars : ["VW GT", "PUNTO"], 
    toString : function () {
        console.log(`Name : ${this.firstName}`);
        this.cars.forEach(function(car) { 
            console.log(`Name : ${this.firstName} drives ${car}`)
        })
    },
    deleteMe : true
}
person.toString();

// Thre are couple ways we can fix the lexical this scenario.

// Fist option is to use the bind keyword.
const personBind = { 
    firstName : "Ramkishore", 
    cars : ["VW GT", "PUNTO"], 
    toString : function () {
        console.log(`Name : ${this.firstName}`);
        this.cars.forEach(function(car) { 
            console.log(`Name : ${this.firstName} drives ${car}`)
        }.bind(this)) // we bind the "this" keyword to this particular function.
    },
    deleteMe : true
}

console.log("\n" + "Using bind keyword");
personBind.toString();

// Other way is to store the context of "this" in a variable. Also called the "that" pattern.
const personThat = { 
    firstName : "Ramkishore", 
    cars : ["VW GT", "PUNTO"], 
    toString : function () {
        console.log(`Name : ${this.firstName}`);
        const that = this; // Storing the scope of "this" in the "that" variable.
        this.cars.forEach(function(car) { 
            console.log(`Name : ${that.firstName} drives ${car}`)
        })
    },
    deleteMe : true
}

console.log("\n" + "Using that keyword");
personThat.toString();

// The most preferred way is to simply use the arrow function. 
// NOTE : If you need access to "this" keyword inside a nedted function, then you cannot use arrow fuunctions.
// THE TOP LEVEL PROPERTY NEEDS TO BE A FUNCTION KEYWORD, NOT AN ARROW FUNCTION.
const personArrow = { 
    firstName : "Ramkishore", 
    cars : ["VW GT", "PUNTO"], 
    toString() {
        console.log(`Name : ${this.firstName}`);
        this.cars.forEach(car => { 
            console.log(`Name : ${this.firstName} drives ${car}`)
        })
    },
    deleteMe : true
}

console.log("\n" + "Using arrow function");
personArrow.toString();

