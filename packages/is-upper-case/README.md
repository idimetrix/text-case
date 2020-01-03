# Is Upper Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Returns `true` if text is upper case only.

## Installation

```
npm install text-is-upper-case --save
```

## Usage

```js
import { isUpperCase } from "text-is-upper-case";

isUpperCase("string"); //=> false
isUpperCase("dot.case"); //=> false
isUpperCase("PascalCase"); //=> false
isUpperCase("camelCase"); //=> false
isUpperCase("CONSTANT_CASE"); //=> true
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-is-upper-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-is-upper-case
[downloads-image]: https://img.shields.io/npm/dm/text-is-upper-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-is-upper-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-is-upper-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-is-upper-case
