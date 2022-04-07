/**
 * @author ramkishore
 *
 */

const {format, createLogger, transports} = require("winston");
const {timestamp, combine, printf} = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});


function getLogger () {
    return createLogger({
        level: "silly",
        // format: winston.format.simple(),
        // format: logFormat,
        format: combine(
            format.colorize(), // delete this when using json logger format
            timestamp(),
            format.errors({stack: true}),
            logFormat
        ),
        transports: [new transports.Console()]
    });
}

module.exports = {getLogger};