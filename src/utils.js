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

module.exports = {updateFileName};