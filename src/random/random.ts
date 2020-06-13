/**
 * Generates a random number between `min` and `max`.
 * @param min min ≤ R
 * @param max max ≥ R
 * @param decimals Number of decimals to return
 */
export function random(min: number, max: number, decimals = 8) {
  const rand = Math.random() * (max - min) + min;
  return Math.round(rand * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
/**
 * Generates a random integer between `min` and `max`.
 * @param min min ≤ R
 * @param max max ≥ R
 */
export function randomInteger(min: number, max: number) {
  return random(min, max, 0);
}
/**
 * Generates a random string of characters (a-z, A-Z, 0-9).
 * @param length
 */
export function randomString(length: number) {
  let str = "";
  while (str.length < length) {
    str += randomInteger(100000, 1000000).toString(36);
  }
  return str.substr(0, length);
}
