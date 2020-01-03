# Camel Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Convert into a text with the separator denoted by the next word capitalized.

## Installation

```
npm install text-camel-case --save
```

## Usage

```js
import { camelCase } from "text-camel-case";

camelCase("string"); //=> "string"
camelCase("dot.case"); //=> "dotCase"
camelCase("PascalCase"); //=> "pascalCase"
camelCase("camelCase"); //=> "camelCase"
camelCase("version 1.2.3"); //=> "version_1_2_3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

### Merge Numbers

If you'd like to remove the behavior prefixing `_` before numbers, you can use `camelCaseTransformMerge`:

```js
import { camelCaseTransformMerge } from "text-camel-case";

camelCase("version 123", { transform: camelCaseTransformMerge }); //=> "version123"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-camel-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-camel-case
[downloads-image]: https://img.shields.io/npm/dm/text-camel-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-camel-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-camel-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-camel-case
