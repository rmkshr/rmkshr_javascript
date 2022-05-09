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

// trigger.then(result => console.log(result));

async function tryingAwait () {
    try {
        await promiseFunctions.promiseFour();
        promiseFunctions.promiseOne().then(result => console.log(result));
        await promiseFunctions.promiseTwo("One ");
    } catch (rejects) {
        console.log("catch" + rejects);
    }
}
tryingAwait();