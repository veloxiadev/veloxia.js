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
export declare function awaitCondition(
  condition: (...args: any[]) => any,
  config?: {
    args: any[];
    interval: number;
    timeout: number;
  }
): Promise<unknown>;
