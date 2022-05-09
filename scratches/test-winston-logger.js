/**
 * @author ramkishore
 */


const winstonLogger = require("/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/src/winston-logger.js");

const logger = winstonLogger.getLogger();


logger.debug("DEBUG LOGGER");
logger.info("INFO LOGGER");
logger.warn("WARN LOGGER");
logger.error("ERROR LOGGER");
// Always throw as a new Error to print the entire stack trace.
logger.error(new Error("Something went wrong"));