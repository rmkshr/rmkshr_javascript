/**
 * @author ramkishore
 */

const promiseFunctions = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/scratches/test-promise.js");


// const trigger = promiseFunctions.promiseFour()
//     .then(result => {return promiseFunctions.promiseOne(result)})
//     .then(result => {return promiseFunctions.promiseTwo(result)})
//     .then(result => {return promiseFunctions.promiseThree(result)})
//     .then(result => {return promiseFunctions.promiseFive(result)})
//     .catch(rejects => console.log(rejects));
//
// trigger.then(result => console.log(result));

// async function tryingAwait () {
//     try {
//         await promiseFunctions.promiseFour();
//         promiseFunctions.promiseOne().then(result => console.log(result));
//         await promiseFunctions.promiseTwo("One ");
//     } catch (rejects) {
//         console.log("catch" + rejects);
//     }
// }
// tryingAwait();

let userdataList;
let secondUserData;
let thirdUserData;
const output = promiseFunctions.promiseOne().then(firstResult => {
    userdataList = firstResult;
    return promiseFunctions.promiseTwo(firstResult)})
    .then(secondResult => {
        secondUserData = secondResult;
        return promiseFunctions.promiseThree(userdataList)})
    .then(thirdResult => {
        thirdUserData = thirdResult;
        return promiseFunctions.promiseFour(secondUserData)
    });
output.then(result => console.log(result));