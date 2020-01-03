# Is Lower Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Returns `true` if text is lower case only.

## Installation

```
npm install text-is-lower-case --save
```

## Usage

```js
import { isLowerCase } from "text-is-lower-case";

isLowerCase("string"); //=> true
isLowerCase("dot.case"); //=> true
isLowerCase("PascalCase"); //=> false
isLowerCase("camelCase"); //=> false
isLowerCase("version 1.2.10"); //=> true
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-is-lower-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-is-lower-case
[downloads-image]: https://img.shields.io/npm/dm/text-is-lower-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-is-lower-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-is-lower-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-is-lower-case
