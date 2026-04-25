'use strict';

// Closure #1
function createLogger(prefix) {
    return function (message) {
        console.log(`${prefix}: ${message}`);
    };
}

const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');

authLogger('User logged in');
apiLogger('Request failed');

// Closure #2
function createLimiter(limit) {
    if (!Number.isFinite(limit) || limit < 0) return null;
    let count = 0;

    return function () {
        if (count < limit) {
            count++;
            return 'OK';
        }
        return 'Error';
    };
}

const limited = createLimiter(3);

if (!limited) {
    console.log('Oh-Oh! Invalid input!');
} else {
    console.log(limited());
    console.log(limited());
    console.log(limited());

    console.log(limited());
}
