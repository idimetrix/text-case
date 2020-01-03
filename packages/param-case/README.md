# Param Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a lower cased text with dashes between words.

## Installation

```
npm install text-param-case --save
```

## Usage

```js
import { paramCase } from "text-param-case";

paramCase("string"); //=> "string"
paramCase("dot.case"); //=> "dot-case"
paramCase("PascalCase"); //=> "pascal-case"
paramCase("camelCase"); //=> "camel-case"
paramCase("version 1.2.3"); //=> "version-1-2-3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-param-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-param-case
[downloads-image]: https://img.shields.io/npm/dm/text-param-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-param-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-param-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-param-case
