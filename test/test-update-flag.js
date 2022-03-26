/**
 * @author ramkishore
 */
const {MongoClient} = require('mongodb');

function establishConnection() {
    return new Promise((resolve, reject) => {
        const uri = "mongodb://localhost:27017/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri).connect();
        resolve(client);
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
        const result = dbClient.db("iamlegend").collection("user_seed").updateOne(filter, updateDoc, options);
        resolve(result);
    });
}

establishConnection()
    .then(dbClient => { return updateRegisteredFlag(dbClient, "sasi@gmail.com")})
    .then(result => {console.log(result)});