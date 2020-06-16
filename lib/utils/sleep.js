import { __awaiter } from "tslib";
/**
 * Sleep for a while. Provides the same functionality as
 * with PHP, Bash etc.
 *
 * The function is asynchronous, which means other scripts
 * are able to run while the sleeping script is waiting.
 * As soon as the sleep is over, the script execution will
 * continue.
 *
 * @example
 * ```javascript
 * async function task () {
 *  console.log(`Starting task...`)
 *  console.log(`Going to sleep for 2 seconds...`)
 *  await v.sleep(1000 * 2)
 *  console.log(`I'm back!`)
 * }
 * ```
 *
 * @param ms Number of milliseconds to sleep (1000 ms = 1 s)
 */
export function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, ms));
    });
}
