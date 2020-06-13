"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
/**
 * Generates a random string of characters (a-z, A-Z, 0-9).
 * @param length
 */
function randomString(length) {
    let str = "";
    while (str.length < length) {
        str += number_1.randomInteger(100000, 1000000).toString(36);
    }
    return str.substr(0, length);
}
exports.randomString = randomString;
//# sourceMappingURL=string.js.map