# Header Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a dash separated text of capitalized words

## Installation

```
npm install text-header-case --save
```

## Usage

```js
import { headerCase } from "text-header-case";

headerCase("string"); //=> "String"
headerCase("dot.case"); //=> "Dot-Case"
headerCase("PascalCase"); //=> "Pascal-Case"
headerCase("camelCase"); //=> "Camel-Case"
headerCase("version 1.2.3"); //=> "Version-1-2-3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-header-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-header-case
[downloads-image]: https://img.shields.io/npm/dm/text-header-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-header-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-header-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-header-case
