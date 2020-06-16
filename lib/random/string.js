import { randomInteger } from "./number";
/**
 * Generates a random string of characters (a-z, A-Z, 0-9).
 * @param length
 */
export function randomString(length) {
    let str = "";
    while (str.length < length) {
        str += randomInteger(100000, 1000000).toString(36);
    }
    return str.substr(0, length);
}
