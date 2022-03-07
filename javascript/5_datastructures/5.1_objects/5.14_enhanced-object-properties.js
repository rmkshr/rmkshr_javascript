/**
 * @author ramkishore
 */

// Enhanced Object Properties.
// Let us consider a function that gets in two args and return the as an object. 
const calculator = (brand, price) => ({ 
    brand: brand,
    price : price
});

const casio = calculator("casio", 25);
console.log(casio);

// The same above function can be written like the below. 

const consoleWars = (brand, price) => ({
        brand,
        price
});

console.log("\n" + "With Enhanced object parameters");
const gameConsole = consoleWars("PS4 Slim", 299);
console.log(gameConsole);

// Manipulating object keys. We can also specify object keys as other constants and use them as property keys. 

const brandProp = "BRAND"; 
const cars = (brand, price) => ({
    [brandProp.toLowerCase()] : brand,
    price,
    // getDiscount : function () { 
    //     return this.price - (this.price *.30)
    // }
    // The above block of code can also be written like this. 
    getDiscount() {
        return this.price - (this.price * .30)
     }

});
console.log("\n" + "With built in functions");
const carName = cars("Tesla", 35000);
console.log(carName);
console.log(carName.getDiscount());