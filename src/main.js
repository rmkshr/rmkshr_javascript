/**
 * @author ramkishore
 */
const awsS3Utility = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/aws-s3-utility.js");
const mongoDataHandler = require ("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/mongo-data-handler.js");

awsS3Utility.getAllValidFileNames.then(nameList => {
    nameList.forEach(fileName => {
            awsS3Utility.readFileDataFromS3(fileName).then(jsonData =>{
                mongoDataHandler.insertMany(jsonData, fileName).then(fileName => {
                    awsS3Utility.copyS3BucketFile(fileName).then(fileName => {
                        awsS3Utility.deleteS3BucketFile(fileName).catch(exception => console.log(exception));
                    });
                });
            });
        });
});



