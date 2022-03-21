
/**
 * @author ramkishore
 */

const awsS3Utility = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/aws-s3-utility.js");
const mongoDataHandler = require ("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/mongo-data-handler.js");
const winstonLogger = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/winston-logger.js");

const logger = winstonLogger.logger;

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
queueUrl: 'https://sqs.us-east-1.amazonaws.com/418090287981/s3tosqsstacktest-StandardQueue-2T8hyvzfPfMZ',
handleMessage: async (message) => {
    console.log(message);
    const data = message["Body"];
    const jsonData = JSON.parse(data);
    const records = jsonData.Records;
    const recordData = records[0];
    const s3data = recordData.hgkdjgf;
    const fileObject = s3data.object;
    const fileName = fileObject.key;
        console.log(fileName);

        // await awsS3Utility.readFileDataFromS3(fileName).then(jsonData =>{
        //     mongoDataHandler.insertMany(jsonData, fileName).then(fileName => {
        //         // There is no AWS provided API to rename a file in S3 bucket, so we make a copy and give our new name,
        //         // upload that file to the same bucket and delete the older file.
        //         awsS3Utility.copyS3BucketFile(fileName).then(fileName => {
        //             awsS3Utility.deleteS3BucketFile(fileName);
        //         });
        //     });
        // }).catch(exception => console.log(exception));

    }
});

app.on('error', (err) => {
    console.error(err.message);
});

app.on('processing_error', (err) => {
    console.error(err.message);
});

app.start();