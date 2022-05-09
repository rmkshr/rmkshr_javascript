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
        const client = new MongoClient(uri);
        client.connect();
        resolve(client);
    });
}

const insertMany = async function (client, jsonData) {
    return new Promise((resolve, reject) => {
        try {
            const result = client.db("iamlegend").collection("latest-model").insertMany(jsonData);
            resolve(result);
        } catch (exception) {
            reject(exception);
        }
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


async function run () {
    const dbClient = await establishConnection();
    const result = await insertMany(dbClient, jsonData);
    console.log(result);
    setTimeout();
}

run();