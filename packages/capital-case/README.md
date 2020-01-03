# Capital Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a space separated text with each word capitalized.

## Installation

```
npm install text-capital-case --save
```

## Usage

```js
import { capitalCase } from "text-capital-case";

capitalCase("string"); //=> "String"
capitalCase("dot.case"); //=> "Dot Case"
capitalCase("PascalCase"); //=> "Pascal Case"
capitalCase("camelCase"); //=> "Camel Case"
capitalCase("version 1.2.3"); //=> "Version 1 2 3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-capital-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-capital-case
[downloads-image]: https://img.shields.io/npm/dm/text-capital-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-capital-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-capital-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-capital-case
