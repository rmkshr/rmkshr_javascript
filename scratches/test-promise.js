/**
 * @author ramkishore
 */

function taskOne () {
    return new Promise (resolve => setTimeout(resolve,20000));
}

function taskTwo () {
    return new Promise ((resolve, reject) => {
        resolve(" promise one");
    });
}


function taskThree (dataOne) {
    return new Promise ((resolve, reject) => {
        resolve(dataOne + " promise two");
    });
}

const finalOut = taskOne()
    .then(value => {return taskTwo(value)})
    .then(value => {return taskThree(value)});


// finalOut.then(value => console.log(value));

function promiseOne () {
    return new Promise ((resolve, reject) => {
        resolve("first promise invoked");
    });
}

function promiseTwo (dataOne) {
    return new Promise ((resolve, reject) => {
        resolve(dataOne + "then second promise invoked");
    });
}

function promiseThree (dataTwo) {
    return new Promise ((resolve, reject) => {
        resolve(dataTwo + "then third promise invoked");
    });
}

function promiseFour (dataThree) {
    return new Promise ((resolve, reject) => {
        resolve(dataThree + "then fourth promise invoked");
    });
}

function promiseFive (dataFour) {
    return new Promise ((resolve, reject) => {
        resolve(dataFour + "then final promise invoked");
    });
}

module.exports = {promiseOne, promiseTwo, promiseThree, promiseFour, promiseFive};