/**
 * @author ramkishore
 */

const awsObject = require("aws-sdk");
const csvToJsonObject = require("csvtojson");
const s3Object = new awsObject.S3();
const utils = require ("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/utils.js");
const winstonLogger = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/winston-logger.js");

const logger = winstonLogger.logger;

const getAllValidFileNames = new Promise ((resolve, reject) => {
    try {
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
    } catch (exception) {
        console.log(exception);
        reject(exception);
    }

});

const readFileDataFromS3  = function (fileName) {
    return new Promise ((resolve, reject) => {
        try{
            const params = {
                Bucket: "s3tosqsbuckettest",
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

const copyS3BucketFile = function (fileName) {
    return new Promise ((resolve, reject) => {
        try {
            const params = {
                Bucket: "s3tosqsbuckettest",
                CopySource: "/s3tosqsbuckettest/".concat(fileName),
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
        } catch (exception) {
            console.log(exception);
            reject(exception);
        }
    });
}

const deleteS3BucketFile = function (fileName) {
    return new Promise ((resolve, reject) => {
        try {
            const params ={
                Bucket: "s3tosqsbuckettest",
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
        } catch (exception) {
            console.log(exception);
            reject(exception);
        }

    });
}



module.exports = {getAllValidFileNames,readFileDataFromS3,copyS3BucketFile,deleteS3BucketFile};