/**
 * Splits an array into smaller chunks.
 * @template T Array element type, e.g. "string" or "number"
 * @param input Input array
 * @param length Max length of each chunk
 * @param skipLast Ignore last chunk if it's smaller than `length` [default=false]
 * @returns chunk
 */
export function chunkArray<T = any>(
  input: T[] | any[],
  length: number,
  skipLast = false
): T[][] | any[][] {
  const result: T[][] = [];
  let next: T[] = [];
  for (let i = 0; i < input.length; i++) {
    next.push(input[i]);
    if (next.length === length || i === input.length - 1) {
      result.push(next);
      next = [];
    }
  }
  if (skipLast === true && result[result.length - 1].length < length) {
    result.pop();
  }
  return result;
}
/**
 * Splits a string into smaller chunks.
 * @param input Input string
 * @param length Max length of each chunk
 * @param skipLast Ignore last chunk if it's smaller than `length` [default=false]
 * @returns string
 */
export function chunkString(
  input: string,
  length: number,
  skipLast = false
): string[] {
  const result: string[] = [];
  for (let i = 0; i < input.length / length; i += 1) {
    result.push(input.substr(i * length, length));
  }
  if (skipLast === true && result[result.length - 1].length < length) {
    result.pop();
  }
  return result;
}
