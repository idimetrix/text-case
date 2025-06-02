# Change Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Convert text between
> [`camelCase`](https://github.com/idimetrix/text-case/tree/master/packages/camel-case),
> [`PascalCase`](https://github.com/idimetrix/text-case/tree/master/packages/pascal-case),
> [`Capital Case`](https://github.com/idimetrix/text-case/tree/master/packages/capital-case),
> [`Header-Case`](https://github.com/idimetrix/text-case/tree/master/packages/header-case),
> [`Title Case`](https://github.com/idimetrix/text-case/tree/master/packages/title-case),
> [`path/case`](https://github.com/idimetrix/text-case/tree/master/packages/path-case),
> [`snake_case`](https://github.com/idimetrix/text-case/tree/master/packages/snake-case),
> [`param-case`](https://github.com/idimetrix/text-case/tree/master/packages/param-case),
> [`dot.case`](https://github.com/idimetrix/text-case/tree/master/packages/dot-case),
> [`no case`](https://github.com/idimetrix/text-case/tree/master/packages/no-case),
> [`CONSTANT_CASE`](https://github.com/idimetrix/text-case/tree/master/packages/constant-case),
> [`lower case`](https://github.com/idimetrix/text-case/tree/master/packages/lower-case),
> [`lOWER CASE FIRST`](https://github.com/idimetrix/text-case/tree/master/packages/lower-case-first),
> [`UPPER CASE`](https://github.com/idimetrix/text-case/tree/master/packages/upper-case),
> [`Upper case first`](https://github.com/idimetrix/text-case/tree/master/packages/upper-case-first),
> [`sWaP cAsE` -> `SwAp CaSe`](https://github.com/idimetrix/text-case/tree/master/packages/swap-case),
> [`Sentence Case`](https://github.com/idimetrix/text-case/tree/master/packages/sentence-case),
> [`isLowerCase`](https://github.com/idimetrix/text-case/tree/master/packages/is-lower-case),
> [`isUpperCase`](https://github.com/idimetrix/text-case/tree/master/packages/is-upper-case),
> and other

## Installation

```
npm install text-case --save
```

## Usage

```js
import {
  camelCase, // `camelCase`
  pascalCase, // `PascalCase`
  capitalCase, // `Capital Case`
  headerCase, // `Header-Case`
  titleCase, // `Title Case`
  pathCase, // `path/case`
  snakeCase, // `snake_case`
  paramCase, // `param-case`
  dotCase, // `dot.case`
  noCase, // `no case`
  constantCase, // `CONSTANT_CASE`
  lowerCase, // `lower case`
  lowerCaseFirst, // `lOWER CASE FIRST`
  upperCase, // `UPPER CASE`
  upperCaseFirst, // `Upper case first`
  swapCase, // `sWaP cAsE` -> `SwAp CaSe`
  sentenceCase,
  isLowerCase,
  isUpperCase,
} from "text-case";
```

Methods can also be installed [independently](https://github.com/idimetrix/text-case). All functions also accept [`options`](https://github.com/idimetrix/text-case#options) as the second argument.

### Options

- **`splitRegexp`** RegExp used to split into word segments (see [example](#split-example)).
- **`stripRegexp`** RegExp used to remove extraneous characters (default: `/[^A-Z0-9]/gi`).
- **`delimiter`** Value used between words (e.g. `" "`).
- **`transform`** Used to transform each word segment (e.g. `lowerCase`).

#### Split Example

If you find the default split hard to use, you can provide a different one. The example below will change the behavior to `expo2020 -> expo 2020` and `WorldExpo -> world expo`:

```js
const options = {
  splitRegexp: /([a-z])([A-Z0-9])/g,
};
```

## License

MIT

## Development

This project uses [pnpm workspaces](https://pnpm.io/workspaces) for managing dependencies and [Lerna](https://lerna.js.org/) for versioning and publishing.

### Setup

```bash
# Install dependencies for all packages
pnpm install
```

### Building

```bash
# Build all packages
pnpm run build

# Build a specific package
pnpm --filter text-camel-case run build
```

### Testing

```bash
# Test all packages
pnpm run test

# Test a specific package
pnpm --filter text-camel-case run test
```

### Type Checking

```bash
# Type check all packages
pnpm run typecheck

# Type check a specific package
pnpm --filter text-camel-case run typecheck

# Type check all packages in watch mode
pnpm run typecheck:watch

# Type check a specific package in watch mode
pnpm --filter text-camel-case run typecheck:watch
```

### Adding Dependencies

```bash
# Add a dependency to a specific package
pnpm add lodash --filter text-camel-case

# Add a dev dependency to a specific package
pnpm add -D @types/lodash --filter text-camel-case

# Add a dependency to the root workspace
pnpm add -w prettier
```

### Versioning and Publishing

```bash
# Version packages (interactive)
pnpm run version

# Publish packages
pnpm run publish
```

[npm-image]: https://img.shields.io/npm/v/text-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-case
[downloads-image]: https://img.shields.io/npm/dm/text-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-case
