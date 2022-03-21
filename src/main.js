/**
 * @author ramkishore
 */
const awsS3Utility = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/aws-s3-utility.js");
const mongoDataHandler = require ("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/mongo-data-handler.js");


awsS3Utility.getAllValidFileNames.then(nameList => {
    nameList.forEach(fileName => {
            awsS3Utility.readFileDataFromS3(fileName).then(jsonData =>{
                mongoDataHandler.insertMany(jsonData, fileName).then(fileName => {
                    // There is no AWS provided API to rename a file in S3 bucket, so we make a copy and give our new name,
                    // upload that file to the same bucket and delete the older file.
                    awsS3Utility.copyS3BucketFile(fileName).then(fileName => {
                        awsS3Utility.deleteS3BucketFile(fileName);
                    });
                });
            });
        });
}).catch(exception => console.log(exception));



