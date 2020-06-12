[![TypeScript version][ts-badge]][typescript-38]
[![Node.js version][nodejs-badge]][nodejs]
[![Build Status - Travis][travis-badge]][travis-ci]
[![Node.js CI][ga-badge]][ga-ci]
[![npm version](https://img.shields.io/npm/v/@veloxia/veloxia.svg)](https://www.npmjs.com/package/@veloxia/veloxia)

# @veloxia/veloxia

Some javascript helper functions.

## Installation

```bash
npm install @veloxia/veloxia
```

## Example usage

```javascript
// ES6 import
import * as v from "@veloxia/veloxia";
// Node require
const v = require("@veloxia/veloxia");
```

_v.awaitCondition()_ lets you await anything.

```javascript
(async () => {
  let aVariable;
  // Set aVariable after 5 seconds
  setTimeout(() => {
    aVariable = "Hello";
  }, 5000);
  // Since the timeout above has to pass before aVariable
  // is defined, this console.log will not print any value.
  console.log(aVariable);
  // => _undefined_
  await awaitCondition(() => typeof aVariable !== "undefined");
  // After the await condition has been met, the script
  // execution continues. aVariable is now available to us:
  console.log(aVariable);
  // => "Hello"
})();
```

_v.numberFormat()_ adds thousands separators/decimal points to a number.

```javascript
const val = v.numberFormat(8999.9112, 2, ",", " ");
console.log(val); // 8 999,91
```

_v.date()_ applies a format template to a date object.

```javascript
const now = v.date("Y-m-d");
// => 2020-06-11
const yesterday = v.date("Y-m-d", Date.now() - 1000 * 3600 * 24);
// => 2020-06-10
```

[ts-badge]: https://img.shields.io/badge/TypeScript-3.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[travis-badge]: https://travis-ci.org/veloxiadev/veloxia.js.svg?branch=master
[travis-ci]: https://travis-ci.org/github/veloxiadev/veloxia.js
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[ga-badge]: https://github.com/veloxiadev/veloxia.js/workflows/Node.js%20CI/badge.svg
[ga-ci]: https://github.com/veloxiadev/veloxia.js/actions
