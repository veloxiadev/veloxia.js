"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a random number between `min` and `max`.
 * @param min min ≤ R
 * @param max max ≥ R
 * @param decimals Number of decimals to return
 */
function random(min, max, decimals = 8) {
    const rand = Math.random() * (max - min) + min;
    return Math.round(rand * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
exports.random = random;
/**
 * Generates a random integer between `min` and `max`.
 * @param min min ≤ R
 * @param max max ≥ R
 */
function randomInteger(min, max) {
    return random(min, max, 0);
}
exports.randomInteger = randomInteger;
/**
 * Generates a random string of characters (a-z, A-Z, 0-9).
 * @param length
 */
function randomString(length) {
    let str = "";
    while (str.length < length) {
        str += randomInteger(100000, 1000000).toString(36);
    }
    return str.substr(0, length);
}
exports.randomString = randomString;
//# sourceMappingURL=random.js.map