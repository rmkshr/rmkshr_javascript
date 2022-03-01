// Type coercion
// With type coercion
console.log("Type Coercion");
console.log(0 == false);
console.log(0 == true);
console.log("0" == false);
console.log("0" == true);
console.log("1" == 1);

// === 
// The tyoe coercion does not happen when we use type coercion. 
console.log("Without Type Coercion");
console.log(0 === false);
console.log(0 === true);
console.log("0" === false);
console.log("0" === true);
console.log("1" === 1);

// So, in the above demo, it is never a good practice to use ==.
// It is always a good practice to compare values with ===.