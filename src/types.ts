export type EmojisKey = 'START' |
    'SUCCESS' |
    'WARNING' |
    'ERROR' |
    'INFO';

export type EmojisMap = {
    [key in EmojisKey]: string
}

const emojis: EmojisMap = {
    START: '🚀',    // Rocket emoji for start
    SUCCESS: '✅',   // Check mark for success
    WARNING: '⚠️',   // Warning sign for warnings
    ERROR: '❌',     // Cross mark for errors
    INFO: 'ℹ️'      // Information symbol for info
};

export default emojis;