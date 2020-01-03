# Dot Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a lower case text with a period between words

## Installation

```
npm install text-dot-case --save
```

## Usage

```js
import { dotCase } from "text-dot-case";

dotCase("string"); //=> "string"
dotCase("dot.case"); //=> "dot.case"
dotCase("PascalCase"); //=> "pascal.case"
dotCase("camelCase"); //=> "camel.case"
dotCase("version 1.2.3"); //=> "version.1.2.3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-dot-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-dot-case
[downloads-image]: https://img.shields.io/npm/dm/text-dot-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-dot-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-dot-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-dot-case
