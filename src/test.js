
/**
 * @author ramkishore
 */

const awsObject = require("aws-sdk");
const csvToJsonObject = require("csvtojson");
const s3Object = new awsObject.S3();


async function readDataFromS3 (fileName, callback) {
        const params = {
            Bucket: "my-awsome-bucket",
            Key: fileName
        };
    const stream = s3Object.getObject(params).createReadStream();
    const jsonData = await csvToJsonObject().fromStream(stream);
    callback(jsonData);
}

const fileNameList = [
    "New_OrgOne_SeedUsers.csv",
    "New_OrgTwo_SeedUsers.csv",
    "New_OrgThree_SeedUsers.csv",
    "New_OrgFour_SeedUsers.csv"
];

 function collectDataFromS3 (fileNameList) {
    fileNameList.forEach(fileName => {
        readDataFromS3(fileName, (json) => {
           console.log(json);
        });
    });
}

collectDataFromS3(fileNameList);