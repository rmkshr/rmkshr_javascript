/**
 * @author ramkishore
 */
const {MongoClient} = require('mongodb');

const insertMany = function (jsonData, fileName) {
    return new Promise((resolve, reject) => {
        const uri = "mongodb://localhost:27017/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri);

        try {
            client.connect();
            const result = client.db("iamlegend").collection("user_seed").insertMany(jsonData);
            console.log(result);
            resolve(fileName);
        } catch (exception) {
            console.error(exception);
            reject(exception);
        }
    });
}

module.exports = {insertMany};

