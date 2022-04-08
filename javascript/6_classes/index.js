/**
 * @author ramkishore
 */
import Person from "./6.01_person-class.js";

// Importing the person class and making use of its constructor properties and behaviours.
const vihaan = new Person("Vihaan", "7mo", "Male");

//properties
console.log(vihaan.name);
console.log(vihaan.age);
console.log(vihaan.gender);

//behaviours
vihaan.sleep();

vihaan.eat();

//to String method that is user defined.
console.log(vihaan.toString());