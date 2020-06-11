"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numberFormat(num, decimals = 0, decimalPoint = ",", thousandsSeparator = " ") {
    const afterDecimal = Math.round(Math.pow(10, decimals) * (num - Math.floor(num)));
    const beforeDecimal = `${Math.floor(num)}`.split("");
    const separated = [];
    let buffer = "";
    for (let i = beforeDecimal.length - 1; i >= 0; i--) {
        buffer = `${beforeDecimal[i]}${buffer}`;
        if (buffer.length === 3) {
            separated.unshift(buffer);
            buffer = "";
        }
    }
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
//# sourceMappingURL=index.js.map