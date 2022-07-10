/**
 * @author ramkishore
 */

const { Parser } = require('json2csv');

const fields = ['name', 'gender', 'age'];
const opts = { fields };
let myData =[
    {
        name : "ram",
        gender : "male",
        age : "29"
    },
    {
        name : "kishore",
        gender : "male",
        age : "29"
    },
    {
        name : "suganya",
        gender : "female",
        age : "27"
    },
    {
        name : "vihaan",
        gender : "male",
        age : "0.10"
    }
]
try {
    const parser = new Parser(opts);
    const csv = parser.parse(myData);
    console.log(csv);
} catch (err) {
    console.error(err);
}