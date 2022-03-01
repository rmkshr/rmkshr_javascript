// Callbacks
// Callback is a function that is passed as an argument to another function. 

const greetUser = (userName, callBack) => { 
    if(callBack){
        console.log(callBack(userName));
    } else { 
        console.log(userName);
    }
    
}

const printUser = (userName) => console.log("Hello " + userName);


greetUser("Ramkishore", printUser);