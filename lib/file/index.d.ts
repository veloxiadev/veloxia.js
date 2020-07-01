/**
 * Get the file extension (i.e. .pdf, .txt, .json etc.) from an input
 * file path.
 *
 * @param absPath
 * @returns
 */
export declare function getExtension(absPath: string): string;
/**
 * File reading (synchronous). Automatically decodes JSON if file is
 * named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 */
export declare function fr<T>(dirName: string, relativePath: string): T;
/**
 * File writing (synchronous). Automatically converts objects to JSON if
 * the file is named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 * @param content File content to write.
 */
export declare function fw<T>(dirName: string, relativePath: string, content: T): string;
