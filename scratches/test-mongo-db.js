/**
 * @author ramkishore
 */
const {MongoClient} = require('mongodb');

/**
 *
 * @author ramkishore
 */
function establishConnection () {
    return new Promise((resolve, reject) => {
        const uri = "mongodb://localhost:27017/scratches?retryWrites=true&w=majority";
        // const uri = "mongodb+srv://rmkshr-rsvp:Vihaan2508@vihaan2508.3233q.mongodb.net/test?authSource=admin&replicaSet=atlas-hlfu6m-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
        const client = new MongoClient(uri);
        client.connect();
        resolve(client);
    });
}

const insertMany = async function (client, jsonData) {
    return new Promise((resolve, reject) => {
        try {
            const result = client.db("rmkshr").collection("rsvp-users").insertMany(jsonData);
            resolve(result);
        } catch (exception) {
            reject(exception);
        }
    });
}

function getAllData (client) {
    return new Promise((resolve, reject) => {
        const result = client.db("iamlegend").collection("user_seed").find({}).toArray();
        resolve(result);
    });
}


const jsonData =[
    {
    name : "ram",
    age : "8 months",
    address : {
        place : "puthuvelamangalam",
        post : "sethukuli post",
        city : "Mettur",
        area : "kolathur"
    },
    vaccination : "5",
    nature : "very naughty"
},
    {
        name : "kishore",
        age : "8 years",
        address : {
            place : "puthuvelamangalam",
            post : "sethukuli post",
            city : "Mettur",
            area : "kolathur"
        },
        vaccination : "15",
        nature : "very naughty"
    }
    ]

establishConnection().then(client => {return getAllData(client)}).then(result => console.log(result));
