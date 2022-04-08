/**
 * @author ramkishore
 */

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    sleep () {
        console.log(`${this.name} is sleeping`);
    }

    eat () {
        console.log(`${this.name} is eating`);
    }

    toString () {
        return `Name : ${this.name} Age : ${this.age} Gender : ${this.gender}`
    }
}

export default Person;