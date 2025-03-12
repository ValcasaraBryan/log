const log = require('../src/index');

describe('Logging functions', () => {
    let consoleSpy;
    const mockDate = new Date('2024-01-01T12:00:00.000Z');
    const mockTimestamp = mockDate.toISOString();

    beforeEach(() => {
        // Mock Date.now to return consistent timestamp
        jest.useFakeTimers();
        jest.setSystemTime(mockDate);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        jest.useRealTimers();
    });

    test('info() should log message with timestamp using console.log', () => {
        consoleSpy = jest.spyOn(console, 'log');
        
        log.info('Test message');
        
        expect(consoleSpy).toHaveBeenCalledWith(`[${mockTimestamp}] Test message`);
    });

    test('warn() should log message with timestamp using console.warn', () => {
        consoleSpy = jest.spyOn(console, 'warn');
        
        log.warn('Warning message');
        
        expect(consoleSpy).toHaveBeenCalledWith(`[${mockTimestamp}] Warning message`);
    });

    test('error() should log message with timestamp using console.error', () => {
        consoleSpy = jest.spyOn(console, 'error');
        
        log.error('Error message');
        
        expect(consoleSpy).toHaveBeenCalledWith(`[${mockTimestamp}] Error message`);
    });
});
