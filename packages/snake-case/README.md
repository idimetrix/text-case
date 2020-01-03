# Snake Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a lower case text with underscores between words.

## Installation

```
npm install text-snake-case --save
```

## Usage

```js
import { snakeCase } from "text-snake-case";

snakeCase("string"); //=> "string"
snakeCase("dot.case"); //=> "dot_case"
snakeCase("PascalCase"); //=> "pascal_case"
snakeCase("camelCase"); //=> "camel_case"
snakeCase("version 1.2.3"); //=> "version_1_2_3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-snake-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-snake-case
[downloads-image]: https://img.shields.io/npm/dm/text-snake-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-snake-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-snake-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-snake-case
