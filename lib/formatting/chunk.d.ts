/**
 * Splits an array into smaller chunks.
 * @template T Array element type, e.g. "string" or "number"
 * @param input Input array
 * @param length Max length of each chunk
 * @param skipLast Ignore last chunk if it's smaller than `length` [default=false]
 * @returns chunk
 */
export declare function chunkArray<T = any>(input: T[] | any[], length: number, skipLast?: boolean): T[][] | any[][];
/**
 * Splits a string into smaller chunks.
 * @param input Input string
 * @param length Max length of each chunk
 * @param skipLast Ignore last chunk if it's smaller than `length` [default=false]
 * @returns string
 */
export declare function chunkString(input: string, length: number, skipLast?: boolean): string[];
