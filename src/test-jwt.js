/**
 * @author ramkishore
 */


const jwt = require("jsonwebtoken");


let payLoad = {
    "userName" : "vihaan250821@gmail.com",
    "password" : "VaticanCameos2508"
};

let secretKey = "vatican_cameos";

let jwtOptions = {
    "algorithm" : "HS256",
    "expiresIn" : "60000",
    "subject" : "access_token",
    "noTimestamp" : true,
    "audience" : "org"
}

let token = jwt.sign(payLoad, secretKey, jwtOptions);

let decoded = jwt.verify(token, secretKey);

console.log(token);

console.log(decoded);