
function info(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}

function warn(message) {
    const timestamp = new Date().toISOString();
    console.warn(`[${timestamp}] ${message}`);
}

function error(message) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] ${message}`);
}

module.exports = {
    info,
    warn,
    error
};