"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
/**
 * Get the file extension (i.e. .pdf, .txt, .json etc.) from an input
 * file path.
 *
 * @param absPath
 * @returns
 */
function getExtension(absPath) {
    return absPath.match(/\.(\w+)$/i)[1].toLowerCase();
}
exports.getExtension = getExtension;
/**
 * File reading (synchronous). Automatically decodes JSON if file is
 * named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 */
function fr(dirName, relativePath) {
    const absPath = path_1.resolve(dirName, relativePath);
    if (!fs_1.existsSync(absPath))
        return undefined;
    const buffer = fs_1.readFileSync(absPath).toString();
    const format = getExtension(absPath);
    switch (format) {
        case "json":
            return JSON.parse(buffer);
        case "csv":
            return buffer;
        default:
            return buffer;
    }
}
exports.fr = fr;
/**
 * File writing (synchronous). Automatically converts objects to JSON if
 * the file is named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 * @param content File content to write.
 */
function fw(dirName, relativePath, content) {
    // resolve absolute path etc
    const absPath = path_1.resolve(dirName, relativePath);
    const format = getExtension(absPath);
    // check current data type
    const dataType = typeof content;
    let buffer;
    switch (format) {
        // JSON is handled by parsing the file content
        case "json":
            buffer = dataType === "string" ? content : JSON.stringify(content);
            break;
        // If not JSON, fallback to obj.toString()
        default:
            buffer = content.toString();
            break;
    }
    // Throw exception if we did not manage to convert the
    // input data to string
    if (typeof buffer !== "string") {
        throw new Error(`Could not convert file content to string.`);
    }
    // Check if parent directory exists, and create it if not
    if (!fs_1.existsSync(path_1.resolve(absPath, ".."))) {
        fs_1.mkdirSync(path_1.resolve(absPath, ".."), { recursive: true });
    }
    fs_1.writeFileSync(absPath, buffer);
    return absPath;
}
exports.fw = fw;
