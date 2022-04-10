/**
 * @author ramkishore
 */
const awsS3Utility = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/aws-s3-utility.js");
const mongoDataHandler = require ("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/mongo-data-handler.js");
const utils = require ("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/utils.js");


const { Consumer } = require('sqs-consumer');

const consumerApp = Consumer.create({
    queueUrl: 'https://sqs.us-east-1.amazonaws.com/418090287981/s3tosqsstacktest-StandardQueue-2T8hyvzfPfMZ',
    handleMessage: (message) => {
        const fileName = JSON.parse(message["Body"]).Records[0].s3.object.key;
        console.log(fileName);
            awsS3Utility.readFileDataFromS3(fileName)
                .then(jsonData => {return utils.updateJsonDataFromFile(jsonData)})
                .then(finalJsonData => {return mongoDataHandler.insertMany(finalJsonData)})
                .then(result => { console.log("Created data count : ".concat(result.insertedCount.toString()))})
                .catch(exception => console.log(exception));
    }
});

consumerApp.on('error', (error) => {
    console.error(error.message);
});

consumerApp.on('processing_error', (error) => {
    console.error(error.message);
});

consumerApp.start();



