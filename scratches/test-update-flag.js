/**
 * @author ramkishore
 */
const {MongoClient} = require('mongodb');

function establishConnection() {
    return new Promise((resolve, reject) => {
        const uri = "mongodb://localhost:27017/scratches?retryWrites=true&w=majority";
        try {
            const client = new MongoClient(uri).connect();
            resolve(client);
        } catch (exception) {
            console.log(exception);
            reject(exception);
        }
    })
}

function updateRegisteredFlag (dbClient, email) {
    return new Promise((resolve, reject) => {
        const filter = {_id : email};
        const options = { upsert: false };
        const updateDoc = {
            $set : {
                isRegistered : true
            },
        };
        try {
            const result = dbClient.db("iamlegend").collection("user_seed").updateOne(filter, updateDoc, options);
            resolve(result);
        } catch (exception) {
            console.log(exception);
            reject(exception.message);
        }
    });
}

establishConnection()
    .then(dbClient => { return updateRegisteredFlag(dbClient, "sasi@gmail.com")})
    .then(result => {console.log(result)});