# Sentence Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform into a lower case with spaces between words, then capitalize text

## Installation

```
npm install text-sentence-case --save
```

## Usage

```js
import { sentenceCase } from "text-sentence-case";

sentenceCase("string"); //=> "String"
sentenceCase("dot.case"); //=> "Dot case"
sentenceCase("PascalCase"); //=> "Pascal case"
sentenceCase("camelCase"); //=> "Camel case"
sentenceCase("version 1.2.3"); //=> "Version 1 2 3"
```

The function also accepts [`options`](https://github.com/idimetrix/text-case#options).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/text-sentence-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-sentence-case
[downloads-image]: https://img.shields.io/npm/dm/text-sentence-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-sentence-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-sentence-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-sentence-case
