
/**
 * @author ramkishore
 */

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
    queueUrl: 'https://sqs.us-east-1.amazonaws.com/418090287981/s3tosqsstacktest-StandardQueue-2T8hyvzfPfMZ',
    handleMessage: async (message) => {
        await console.log(message);
    }
});

app.on('error', (err) => {
    console.error(err.message);
});

app.on('processing_error', (err) => {
    console.error(err.message);
});

app.start();