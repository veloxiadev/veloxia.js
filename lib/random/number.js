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
