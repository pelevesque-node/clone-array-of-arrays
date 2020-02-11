[![Build Status](https://travis-ci.org/pelevesque/clone-array-of-arrays.svg?branch=master)](https://travis-ci.org/pelevesque/clone-array-of-arrays)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/clone-array-of-arrays/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/clone-array-of-arrays?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# clone-array-of-arrays

Clones an array of arrays.

## Node Repository

https://www.npmjs.com/package/@pelevesque/clone-array-of-arrays

## Installation

`npm install @pelevesque/clone-array-of-arrays`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

```js
const cloneArrayOfArrays = require('@pelevesque/clone-array-of-arrays')
```

```js
const arrayOfArrays = [[0, 0], [0, 1], [0, 2]]
const result = cloneArrayOfArrays(arrayOfArrays)
// result === [[0, 0], [0, 1], [0, 2]]
```
