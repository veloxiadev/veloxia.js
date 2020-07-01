import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

/**
 * Get the file extension (i.e. .pdf, .txt, .json etc.) from an input
 * file path.
 *
 * @param absPath
 * @returns
 */
export function getExtension(absPath: string) {
  return absPath.match(/\.(\w+)$/)[1].toLowerCase();
}
/**
 * File reading (synchronous). Automatically decodes JSON if file is
 * named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 */
export function fr<T>(dirName: string, relativePath: string): T {
  const absPath = resolve(dirName, relativePath);
  if (!existsSync(absPath)) return undefined;
  const buffer: any = readFileSync(absPath).toString();
  const format = getExtension(absPath);
  switch (format) {
    case "json":
      return JSON.parse(buffer) as T;
    case "csv":
      return buffer as T;
    default:
      return buffer as T;
  }
}
/**
 * File writing (synchronous). Automatically converts objects to JSON if
 * the file is named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 * @param content File content to write.
 */
export function fw<T>(
  dirName: string,
  relativePath: string,
  content: T
): string {
  // resolve absolute path etc
  const absPath = resolve(dirName, relativePath);
  const format = getExtension(absPath);
  // check current data type
  const dataType = typeof content;
  let buffer: any;
  switch (format) {
    // JSON is handled by parsing the file content
    case "json":
      buffer = dataType === "string" ? (content as T) : JSON.stringify(content);
      break;
    // If not JSON, fallback to obj.toString()
    default:
      buffer = content.toString();
      break;
  }
  if (typeof buffer !== "string") {
    throw new Error(`Could not convert file content to string.`);
  }
  // Check if parent directory exists, and create it if not
  if (!existsSync(resolve(absPath, ".."))) {
    mkdirSync(resolve(absPath, ".."), { recursive: true });
  }
  writeFileSync(absPath, buffer);
  return absPath;
}
