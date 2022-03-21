/**
 * @author ramkishore
 */

const awsS3Utility = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/aws-s3-utility.js");
const mongoDataHandler = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/mongo-data-handler.js");
const winstonLogger = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/winston-logger.js");

const logger = winstonLogger.logger;

const {Consumer} = require('sqs-consumer');

const app = Consumer.create({
    queueUrl: 'https://sqs.us-east-1.amazonaws.com/418090287981/s3tosqsstacktest-StandardQueue-2T8hyvzfPfMZ',
    handleMessage: async (message) => {
        console.log(message);
        const data = message["Body"];
        const jsonData = JSON.parse(data);
        const records = jsonData.Records;
        const recordData = records[0];
        const s3data = recordData.s3;
        const fileObject = s3data.object;
        const fileName = fileObject.key;
        console.log(fileName);
        if (fileName.startsWith("New")) {
            await awsS3Utility.readFileDataFromS3(fileName).then(jsonData => {
                mongoDataHandler.insertMany(jsonData).then(fileName => {
                    awsS3Utility.copyS3BucketFile(fileName).then(fileName => {
                        awsS3Utility.deleteS3BucketFile(fileName);
                    });
                });
            }).catch(exception => console.log(exception));
        }
    }
});

app.on('error', (err) => {
    console.error(err.message);
});

app.on('processing_error', (err) => {
    console.error(err.message);
});

app.start();