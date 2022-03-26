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


finalOut.then(value => console.log(value));