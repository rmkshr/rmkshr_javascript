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
        const uri = "mongodb+srv://rmkshr:vihaan2508@vihaan2508.3233q.mongodb.net/test";
        const client = new MongoClient(uri);
        client.connect().then(r => resolve(r));
    });
}

// function establishConnection () {
//     return new Promise((resolve, reject) => {
//         const uri = "mongodb+srv://rmkshr-rsvp:Vihaan2508@vihaan2508.3233q.mongodb.net/rmkshr?retryWrites=true&w=majority";
//         mongoClient.connect(
//             uri
//             // {ssl : true, sslCA : "../resources/X509-cert-6646409662405451064.pem"} // TODO Add certificate verification.
//         ).then(dbClient => {
//             if (dbClient) {
//                 resolve(dbClient);
//             } else {
//                 reject("DB Connection Failed");
//             }
//         });
//     });
// }

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
        const result = client.db("rmkshr").collection("rsvp-users").find({}).toArray();
        resolve(result);
    });
}


const jsonData = [
    {
        "_id": "JnTR_kishore@gmail.com",
        "first-name": "Suganya",
        "last-name": "Kishore",
        "email": "JnTR_kishore@gmail.com",
        "events": [
            {
                "id": "event_1",
                "name": "",
                "location": "",
                "date": "",
                "time": "",
                "type": "",
                "purpose": ""
            },
            {
                "id": "event_2",
                "name": "",
                "location": "",
                "date": "",
                "time": "",
                "type": "",
                "purpose": ""
            },
            {
                "id": "event_3",
                "name": "",
                "location": "",
                "date": "",
                "time": "",
                "type": "",
                "purpose": ""
            }
        ]
    },
    {
        "_id": "hello_kishore@gmail.com",
        "first-name": "Suganya",
        "last-name": "Kishore",
        "email": "hello_kishore@gmail.com",
        "events": [
            {
                "id": "event_1",
                "name": "",
                "location": "",
                "date": "",
                "time": "",
                "type": "",
                "purpose": ""
            },
            {
                "id": "event_2",
                "name": "",
                "location": "",
                "date": "",
                "time": "",
                "type": "",
                "purpose": ""
            },
            {
                "id": "event_3",
                "name": "",
                "location": "",
                "date": "",
                "time": "",
                "type": "",
                "purpose": ""
            }
        ]
    }
]

establishConnection().then(client => {return insertMany(client, jsonData)}).then(result => console.log(result));
