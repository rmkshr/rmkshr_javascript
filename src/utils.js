/**
 * @author ramkishore
 */

function updateFileName(fileName) {
    try {
        return fileName.replace("New", "Done");
    } catch (exception) {
        console.error(exception);
    }
}

const updateJsonDataFromFile = function (arrayData) {
    return new Promise((resolve, reject) => {
        let finalDbData = [];
        if(Object.keys(arrayData).length === 0 && arrayData.constructor === Object){
            reject("updateFileData : json data from file is empty");
        }
        arrayData.forEach(data => {
            const  updatedData = {
                _id : data.Email,
                ...data,
                isRegistered : false
            }
            finalDbData.push(updatedData);
        });
        resolve(finalDbData);
    });
}
module.exports = {updateFileName, updateJsonDataFromFile};