/**
 * @author ramkishore
 */
const _crypto = require('crypto');

function encrypt (text, masterKey) {

    const iv = _crypto.randomBytes(16);
    const salt = _crypto.randomBytes(64);

    const key = _crypto.pbkdf2Sync(masterKey, salt, 2145, 32, 'sha512');

    const cipher = _crypto.createCipheriv('aes-256-gcm', key, iv);
    const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();
    return Buffer.concat([salt, iv, tag, encrypted]).toString('base64');
}

function decrypt (encryptedData, masterkey) {
    const bData = Buffer.from(encryptedData, 'base64');
    const salt = bData.slice(0, 64);
    const iv = bData.slice(64, 80);
    const tag = bData.slice(80, 96);
    const text = bData.slice(96);

    const key = _crypto.pbkdf2Sync(masterkey, salt , 2145, 32, 'sha512');

    const decipher = _crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(tag);

    const decryptedData = decipher.update(text, 'binary', 'utf8') + decipher.final('utf8');

    return decryptedData;
}

module.exports = {encrypt, decrypt};