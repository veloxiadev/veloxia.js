"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * This function provides extended async/await functionality, by allowing
 * you to await _anything_.
 *
 * @example
 * ```javascript
 * let aVariable;
 * // Set aVariable after 5 seconds
 * setTimeout(() => {
 *  aVariable = "Hello";
 * }, 5000)
 * // Since the timeout above has to pass before aVariable
 * // is defined, this console.log will not print any value.
 * console.log(aVariable)
 * // => _undefined_
 * await awaitCondition(() => typeof aVariable !== 'undefined')
 * // Now it's defined!
 * console.log(aVariable)
 * // => "Hello"
 * ```
 *
 * @param condition A function that should return a truthy value when the condition is met
 * @param config Config
 */
function awaitCondition(condition, config = { args: [], interval: 1000 * 0.1, timeout: 1000 * 45 }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const promise = new Promise((resolve, reject) => {
            // Log start time
            const startTime = Date.now();
            // The loop function will call itself with a timeout until the
            // condition is met or the timeout has been reached.
            const loop = (cond, condArgs) => {
                const res = cond.call(globalThis, ...condArgs);
                // res is true or truthy => resolve
                if (res)
                    return resolve(res);
                // timeout has been reached => reject
                if (Date.now() - startTime > config.timeout)
                    return reject(`Condition check timed out after ${config.timeout} ms.`);
                // otherwise call this function recursively
                setTimeout(loop, config.interval, cond, condArgs);
            };
            loop(condition, config.args);
        });
        return promise;
    });
}
exports.awaitCondition = awaitCondition;
//# sourceMappingURL=await.js.map