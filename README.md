[![TypeScript version][ts-badge]][typescript-38]
[![Node.js version][nodejs-badge]][nodejs]
[![Build Status - Travis][travis-badge]][travis-ci]
[![Node.js CI][ga-badge]][ga-ci]

# Typescript Boilerplate

## Install

### Clone the repository

```bash
git clone git@github.com:veloxiadev/typescript-boilerplate.git ts-project
```

### `cd` into the new project directory

```bash
cd ts-project
```

### Install the dependencies

```bash
npm install
```

## Usage

The `tsc` command is required to compile Typescript files. Install it globally:

```bash
npm install -g typescript
```

The source files are located in `/src`. To compile the files and generate javascript, run `npm run build`. By default, the `npm run build` command will generate javascript files (in the `/dist` directory) together with documentation (in the `/docs` directory).

## Commands

```bash
# Compile all files
npm run build

# Build and recompile when files are changed
npm run watch

# Build documentation only
npm run build:docs

# Build source files only
npm run build:main

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint
npm run lint
```

[ts-badge]: https://img.shields.io/badge/TypeScript-3.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[travis-badge]: https://travis-ci.org/veloxiadev/typescript-boilerplate.svg?branch=master
[travis-ci]: https://travis-ci.org/github/veloxiadev/typescript-boilerplate
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[ga-badge]: https://github.com/veloxiadev/typescript-boilerplate/workflows/Node.js%20CI/badge.svg
[ga-ci]: https://github.com/veloxiadev/typescript-boilerplate/actions
