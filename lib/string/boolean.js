"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a boolean value into `yes` or `no`.
 * @param input Input boolean or truthy/falsy value.
 * @param onTrue String to display if input is truthy.
 * @param onFalse String to display if input is falsy.
 */
function booleanToString(input, onTrue = "Ja", onFalse = "Nej") {
    return input ? onTrue : onFalse;
}
exports.booleanToString = booleanToString;
//# sourceMappingURL=boolean.js.map