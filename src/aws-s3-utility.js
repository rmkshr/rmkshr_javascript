/**
 * @author ramkishore
 */

const awsObject = require("aws-sdk");
const csvToJsonObject = require("csvtojson");
const s3Object = new awsObject.S3();

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

const readDataFromS3  = function (fileName) {
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


module.exports = {readDataFromS3, getAllValidFileNames};