const { types } = require('./types');
/**
 * Formats a log message with timestamp and optional emoji type indicator
 * @param {string} message - The message to log
 * @param {string} [type='INFO'] - The type of log message (INFO, WARNING, ERROR, SUCCESS, START)
 * @returns {string} Formatted log message with timestamp and emoji
 */
function formatLog(message, type = types.INFO) {
    const timestamp = new Date().toISOString();
    const emoji = type ? types[type.toUpperCase()] || '' : '';
    return `[${timestamp}] ${emoji} ${message}`;
}

/**
 * Logs an info message to console.log
 * @param {string} message - The message to log
 * @param {string} [type] - Optional type to override default INFO emoji
 */
function info(message, type) {
    console.log(formatLog(message, type));
}

/**
 * Logs a warning message to console.warn
 * @param {string} message - The warning message to log
 * @param {string} [type] - Optional type to override default WARNING emoji
 */
function warn(message, type = types.WARNING) {
    console.warn(formatLog(message, type));
}

/**
 * Logs an error message to console.error
 * @param {string} message - The error message to log
 * @param {string} [type] - Optional type to override default ERROR emoji
 */
function error(message, type = types.ERROR) {
    console.error(formatLog(message, type));
}

module.exports = {
    info,
    warn,
    error,
};