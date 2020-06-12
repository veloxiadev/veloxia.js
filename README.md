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

## Usage

```javascript
import * as v from "@veloxia/veloxia";
const val = v.numberFormat(8999.9112, 2, ",", " ");
console.log(val); // 8 999,91
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
