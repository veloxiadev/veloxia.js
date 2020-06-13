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
