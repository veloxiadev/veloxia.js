"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a number into a string with thousands separator, decimal point etc.
 * @param num Input number
 * @param decimals
 * @param decimalPoint
 * @param thousandsSeparator
 */
function numberFormat(num, decimals = 0, decimalPoint = ",", thousandsSeparator = " ") {
    // Convert decimals to an integer with the requested number
    // of decimals. Example (given 48.9161 as input):
    // 1. x - Math.floor(x) => 0.9161
    // 2. x * 10^decimals, i.e. x * 10^2 (x * 100 = 91.61) if 2 decimals
    // 3. Round output => 92
    // 4. The number to display after decimal point = 92
    let afterDecimal = `${Math.round(Math.pow(10, decimals) * (num - Math.floor(num)))}`;
    // 5. If decimal is < 10|100|1000 etc, prepend 0:s
    while (afterDecimal.length < decimals) {
        afterDecimal = `0${afterDecimal}`;
    }
    // Before decimal is less complicated: just floor divide
    // to get 91.
    const beforeDecimal = `${Math.floor(num)}`.split("");
    const separated = [];
    let buffer = "";
    // Loop through the digits backwards. When 3 digits are in
    // the buffer, unshift the buffer to create an array of arrays
    // (of size 3).
    for (let i = beforeDecimal.length - 1; i >= 0; i--) {
        buffer = `${beforeDecimal[i]}${buffer}`;
        if (buffer.length === 3) {
            separated.unshift(buffer);
            buffer = "";
        }
    }
    // If the number is not evenly divisible into 3, for example
    // 41 000. The last (first) part of the number gets unshifted
    // even though it's not 3 characters long.
    if (buffer.length > 0) {
        separated.unshift(buffer);
    }
    let decimalString = "";
    if (decimals > 0) {
        decimalString = `${decimalPoint}${afterDecimal}`;
    }
    return separated.join(thousandsSeparator) + decimalString;
}
exports.numberFormat = numberFormat;
