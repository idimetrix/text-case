# No Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Convert text to all lowercase letters with spaces between words

## Installation

```
npm install text-no-case --save
```

## Usage

```js
import { noCase } from "text-no-case";

noCase("string"); //=> "string"
noCase("dot.case"); //=> "dot case"
noCase("PascalCase"); //=> "pascal case"
noCase("camelCase"); //=> "camel case"
noCase("version 1.2.3"); //=> "version 1 2 3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-no-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-no-case
[downloads-image]: https://img.shields.io/npm/dm/text-no-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-no-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-no-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-no-case
