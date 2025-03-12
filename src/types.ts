const EmojisMap = {
    START: '🚀',    // Rocket emoji for start
    SUCCESS: '✅',   // Check mark for success
    WARNING: '⚠️',   // Warning sign for warnings
    ERROR: '❌',     // Cross mark for errors
    INFO: 'ℹ️'      // Info symbol for info
} as const;

export type EmojisKey = keyof typeof EmojisMap;
export const EmojisKeys = Object.fromEntries(
    Object.keys(EmojisMap).map(key => [key, key])
) as Record<EmojisKey, EmojisKey>;
export default EmojisMap;