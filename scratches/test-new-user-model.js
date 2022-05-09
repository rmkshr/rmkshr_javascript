/**
 * @author ramkishore
 */
const awsObject = require("aws-sdk");
const csvToJsonObject = require("csvtojson");
const s3Object = new awsObject.S3();

let usersCollectionTemplate = {
    "_id" : "",
    "identity" : {
        "Users" : "",
        "firstName" : "",
        "lastName" : ""
    },
    "invitedNetwork" : {
        "orgRootID" : "",
        "orgRootEID" : "",
        "isRegistered" : false,
        "isVerifiedByGHX" : false,
        "registeredTS" : false,
        "verifiedTS" : false,
        "seededTS" : false
    },
    "vax" : {
        "shots" : {
            "dateReceived" : "",
            "location" : "",
            "manufacturer" : "",
            "series" : "",
            "s3Url" : "",
            "isValidated" : "",
            "vaccineType" : ""
        },
        "tests" : {
            "dateReceived" : "",
            "location" : "",
            "s3Url" : "",
            "isValidated" : ""
        },
        "exceptions" : {
            "date" : "",
            "s3Url" : "",
            "isValidated" : ""
        }
    }
};

function prepareUserData (fileData) {

}

const readFileDataFromS3  = function (fileName) {
    return new Promise ((resolve, reject) => {
        try{
            const params = {
                Bucket: "my-awsome-bucket",
                Key: fileName
            };
            const dataStream = s3Object.getObject(params).createReadStream();
            const jsonData = csvToJsonObject().fromStream(dataStream);
            if(Object.keys(jsonData).length === 0 && jsonData.constructor === Object) {
                reject("Empty Json/File Data");
            } else {
                resolve(jsonData);
            }
        } catch(exception) {
            console.log(exception);
            reject(exception);
        }
    });
}

usersCollectionTemplate
readFileDataFromS3("Michigan-M-7723-SeedUsers.csv").then(result => {
   console.log(result);
});