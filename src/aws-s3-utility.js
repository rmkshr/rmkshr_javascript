/**
 * @author ramkishore
 */

const awsObject = require("aws-sdk");
const csvToJsonObject = require("csvtojson");
const s3Object = new awsObject.S3();
const utils = require ("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/utils.js");

const getAllValidFileNames = new Promise ((resolve, reject) => {
    const fileNameList = [];
    const params = {
        Bucket: "my-awsome-bucket",
        Prefix: "New",
    };
    s3Object.listObjects(params, function(error, data) {
        if (error) {
            console.log(error, error.stack);
            reject(error);
        }
        else {
            data["Contents"].forEach(dataObject => {
                fileNameList.push(dataObject["Key"]);
            });
            resolve(fileNameList);
        }
    });
});

const readFileDataFromS3  = function (fileName) {
    return new Promise ((resolve, reject) => {
        const params = {
            Bucket: "my-awsome-bucket",
            Key: fileName
        };
        const dataStream = s3Object.getObject(params).createReadStream();
        const jsonData = csvToJsonObject().fromStream(dataStream);
        resolve(jsonData);
    });
}

const copyS3BucketFile = function (fileName) {
    return new Promise ((resolve, reject) => {
        const params = {
            Bucket: "my-awsome-bucket",
            CopySource: "/my-awsome-bucket/".concat(fileName),
            Key: utils.updateFileName(fileName)
        };
        s3Object.copyObject(params, function(error, data) {
            if (error) {
                console.log(error, error.stack);
                reject(error);
            }
            else {
                resolve(fileName);
            }
        });

    });
}

const deleteS3BucketFile = function (fileName) {
    return new Promise ((resolve, reject) => {
        const params ={
            Bucket: "my-awsome-bucket",
            Key: fileName
        }
        s3Object.deleteObject(params, function(error, data) {
            if (error) {
                console.log(error, error.stack);
                reject(error);
            }
            else  {
              resolve(data);
            }
        });
    });
}


module.exports = {getAllValidFileNames,readFileDataFromS3,copyS3BucketFile,deleteS3BucketFile};