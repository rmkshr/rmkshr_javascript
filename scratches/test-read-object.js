const fs = require("fs");



fs.readFile('/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/template/json/console.json', (err, data) => {
    // const jsonData = JSON.parse(data).Records[0].s3.object.key;
    // console.log(jsonData);
    // console.log(jsonData.toString());
    const fileName = console.log(JSON.parse(Buffer.from(JSON.parse(data).Records[0].body)).Records[0].s3.object.key);
});
