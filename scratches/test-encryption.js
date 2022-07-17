/**
 * @author ramkishore
 */

//Checking the crypto module
const crypto = require('crypto');
const algorithmType = 'aes-256-cbc';
const encryptionKey = crypto.randomBytes(32);
const initializationVector = crypto.randomBytes(16);

console.log("ENCRYPTION KEY : ", encryptionKey.toString("base64"));
console.log("INITIALIZATION VECTOR : ", initializationVector.toString("base64"));

//Encrypting text
function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithmType, Buffer.from(encryptionKey), initializationVector);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return {
        iv : initializationVector.toString('hex'),
        encryptedData : encrypted.toString('hex')
    };
}

// Decrypting text
function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(algorithmType, Buffer.from(encryptionKey), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

// Text send to encrypt function
var encryptedText = encrypt("VATICAN CAMEOS");
console.log(encryptedText);
console.log("DECRYPTED DATA : ", decrypt(encryptedText));