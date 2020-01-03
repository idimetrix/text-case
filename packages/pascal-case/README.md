# Pascal Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Convert into a text of capitalized words without separators.

## Installation

```
npm install text-pascal-case --save
```

## Usage

```js
import { pascalCase } from "text-pascal-case";

pascalCase("string"); //=> "String"
pascalCase("dot.case"); //=> "DotCase"
pascalCase("PascalCase"); //=> "PascalCase"
pascalCase("camelCase"); //=> "CamelCase"
pascalCase("version 1.2.3"); //=> "Version_1_2_3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

### Merge Numbers

If you'd like to remove the behavior prefixing `_` before numbers, you can use `pascalCaseTransformMerge`:

```js
import { pascalCaseTransformMerge } from "text-pascal-case";

pascalCase("version 123", { transform: pascalCaseTransformMerge }); //=> "Version123"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-pascal-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-pascal-case
[downloads-image]: https://img.shields.io/npm/dm/text-pascal-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-pascal-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-pascal-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-pascal-case
