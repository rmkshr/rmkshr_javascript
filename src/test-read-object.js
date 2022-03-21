const fs = require("fs");



fs.readFile('/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/template/json/console.json', (err, data) => {
    const jsonData = JSON.parse(data);
    const records = jsonData.Records;
    const recordData = records[0];
    const s3data = recordData.s3;
    const fileObject = s3data.object;
    const fileName = fileObject.key;
    console.log(fileName.toString());
});