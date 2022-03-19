/**
 * @author ramkishore
 */
const {MongoClient} = require('mongodb');

async function insertMany(jsonData){
    const uri = "mongodb://localhost:27017/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const result = await client.db("iamlegend").collection("user_seed").insertMany(jsonData);
        console.log(result);
    } catch (exception) {
        console.error(exception);
    } finally {
        await client.close();
    }
}

insertMany().catch(console.error);
module.exports = {insertMany};

