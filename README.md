[![TypeScript version][ts-badge]][typescript-38]
[![Build Status - Travis][travis-badge]][travis-ci]
[![Node.js CI][ga-badge]][ga-ci]

# @veloxia/veloxia

Some javascript helper functions.

## Installation

```bash
npm install @veloxia/veloxia
```

### Import

ES6/Typescript

```javascript
import * as v from "@veloxia/veloxia";
```

CommonJS

```javascript
const v = require("@veloxia/veloxia");
```

## Example usage

### File reading and file writing

`v.fw()` and `v.fr()` provides quick access to file read/write. The helpers enforce providing the `__dirname` to avoid opening or writing to the wrong file. If the file extension is `.json`, the content is automatically encoded/decoded using `JSON.stringify()` and `JSON.parse()`.

```javascript
// Save an object as JSON
const obj = { name: "Hello world" };
v.fw(__dirname, "file.json", obj);

// Open the file and parse automatically
const file = v.fr(__dirname, "file.json");
console.log(file);
// => {name: 'Hello world'}
```

### Utils

`v.awaitCondition()` lets you await anything.

```javascript
(async () => {
  let aVariable;
  setTimeout(() => {
    aVariable = "Hello";
  }, 5000);
  console.log(aVariable);
  // => undefined
  await awaitCondition(function () {
    if(typeof aVariable !== "undefined") return true;
  }
  console.log(aVariable);
  // => "Hello"
})();
```

### Formatting

`v.numberFormat()` adds thousands separators/decimal points to a number.

```javascript
const val = v.numberFormat(8999.9112, 2, ",", " ");
console.log(val); // 8 999,91
```

### Dates

`v.date()` applies a format template to a date object.

```javascript
const now = v.date("Y-m-d");
// => 2020-06-11
const yesterday = v.date("Y-m-d", Date.now() - 1000 * 3600 * 24);
// => 2020-06-10
```

[ts-badge]: https://img.shields.io/badge/TypeScript-3.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[travis-badge]: https://travis-ci.org/veloxiadev/veloxia.js.svg?branch=master
[travis-ci]: https://travis-ci.org/github/veloxiadev/veloxia.js
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[ga-badge]: https://github.com/veloxiadev/veloxia.js/workflows/Node.js%20CI/badge.svg
[ga-ci]: https://github.com/veloxiadev/veloxia.js/actions
