import EmojisMap, { EmojisKey } from "./types";

function formatLog(message: any, type: EmojisKey = "INFO") {
    const emoji = EmojisMap[type];
    return `[${new Date().toISOString()}] ${emoji} ${message}`;
}

/**
 * Logs an info message to console.log
 * @param message - The message to log (can be any type)
 * @param type - Optional type to override default INFO emoji
 */
export function info(message: any, type: EmojisKey = "INFO") {
    console.log(formatLog(message, type));
}

/**
 * Logs a warning message to console.warn
 * @param message - The warning message to log (can be any type)
 * @param type - Optional type to override default WARNING emoji
 */
export function warn(message: any, type: EmojisKey = "WARNING") {
    console.warn(formatLog(message, type));
}

/**
 * Logs an error message to console.error
 * @param message - The error message to log (can be any type)
 * @param type - Optional type to override default ERROR emoji
 */
export function error(message: any, type: EmojisKey = "ERROR") {
    console.error(formatLog(message, type));
}

export default {
    info,
    warn,
    error,
};
