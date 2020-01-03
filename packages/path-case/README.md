# Path Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a lower case text with slashes between words.

## Installation

```
npm install text-path-case --save
```

## Usage

```js
import { pathCase } from "text-path-case";

pathCase("string"); //=> "string"
pathCase("dot.case"); //=> "dot/case"
pathCase("PascalCase"); //=> "pascal/case"
pathCase("camelCase"); //=> "camel/case"
pathCase("version 1.2.10"); //=> "version/1/2/10"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-path-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-path-case
[downloads-image]: https://img.shields.io/npm/dm/text-path-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-path-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-path-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-path-case
