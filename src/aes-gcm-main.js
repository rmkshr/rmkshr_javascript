/**
 * @author ramkishore
 */

const {encrypt, decrypt} = require("../scratches/test-encryption-aes-gcm");

let encryptedData = encrypt("VATICAN CAMEOS", "VIHAAN");

console.log(encryptedData);

let decryptedDatq = decrypt(encryptedData, "VIHAAN");

console.log(decryptedDatq);