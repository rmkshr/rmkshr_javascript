/**
 * @author ramkishore
 */
const awsS3Utility = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/aws-s3-utility.js");
const mongoDataHandler = require ("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/mongo-data-handler.js");

awsS3Utility.getAllValidFileNames.then(nameList => {
    nameList.forEach(name => {
            awsS3Utility.readDataFromS3(name).then(jsonData =>{
                mongoDataHandler.insertMany(jsonData);
            });
        });
});


