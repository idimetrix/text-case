# Constant Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into upper case text with an underscore between words

## Installation

```
npm install text-constant-case --save
```

## Usage

```js
import { constantCase } from "text-constant-case";

constantCase("string"); //=> "STRING"
constantCase("dot.case"); //=> "DOT_CASE"
constantCase("PascalCase"); //=> "PASCAL_CASE"
constantCase("camelCase"); //=> "CAMEL_CASE"
constantCase("version 1.2.3"); //=> "VERSION_1_2_3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-constant-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-constant-case
[downloads-image]: https://img.shields.io/npm/dm/text-constant-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-constant-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-constant-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-constant-case
