# Swap Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform a text by swapping every character from upper to lower case, or lower to upper case

## Installation

```
npm install text-swap-case --save
```

## Usage

```js
import { swapCase } from "text-swap-case";

swapCase("string"); //=> "STRING"
swapCase("dot.case"); //=> "DOT.CASE"
swapCase("PascalCase"); //=> "pASCALcASE"
swapCase("camelCase"); //=> "CAMELcASE"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-swap-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-swap-case
[downloads-image]: https://img.shields.io/npm/dm/text-swap-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-swap-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-swap-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-swap-case
