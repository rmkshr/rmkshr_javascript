/**
 * @author ramkishore
 */
// const {downloadCsv} = require("download-csv");
import downloadCsv from 'download-csv';
const datas = [
    { name: 'test1', score: 1, level: 'Z' },
    { name: 'test2', score: 2 },
    { name: 'test3', score: 3 },
    { name: 'test4', score: 4 },
];

const columns = { name: '姓名', score: '分数' };

downloadCsv(datas, columns, "Vihaan");