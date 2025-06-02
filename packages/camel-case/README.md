# Camel Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into camelCase format where the first letter is lowercase and subsequent words have their first letter capitalized.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-camel-case

# yarn
yarn add text-camel-case

# pnpm
pnpm add text-camel-case

# bun
bun add text-camel-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { camelCase } from "text-camel-case";

console.log(camelCase("hello world")); // "helloWorld"
```

### CommonJS

```javascript
const { camelCase } = require("text-camel-case");

console.log(camelCase("hello world")); // "helloWorld"
```

### TypeScript

```typescript
import { camelCase, camelCaseTransformMerge, Options } from "text-camel-case";

const result: string = camelCase("hello world");
console.log(result); // "helloWorld"
```

## Examples

### Basic Usage

```javascript
import { camelCase } from "text-camel-case";

// Simple transformations
camelCase("hello world"); // "helloWorld"
camelCase("Hello World"); // "helloWorld"
camelCase("HELLO WORLD"); // "helloWorld"

// From other cases
camelCase("snake_case"); // "snakeCase"
camelCase("kebab-case"); // "kebabCase"
camelCase("dot.case"); // "dotCase"
camelCase("PascalCase"); // "pascalCase"

// Complex examples
camelCase("XMLHttpRequest"); // "xmlHttpRequest"
camelCase("iPhone"); // "iPhone"
camelCase("version 1.2.3"); // "version123"
```

### Advanced Options

```javascript
import { camelCase, camelCaseTransformMerge } from "text-camel-case";

// Custom transform to merge numbers without separator
camelCase("version 1.2.3", {
  transform: camelCaseTransformMerge,
}); // "version123"

// With custom separator handling
camelCase("hello_world-test", {
  stripRegexp: /[_-]/g,
}); // "helloWorldTest"
```

### Real-world Examples

```javascript
import { camelCase } from "text-camel-case";

// API field names
camelCase("first_name"); // "firstName"
camelCase("email_address"); // "emailAddress"
camelCase("created_at"); // "createdAt"

// CSS properties to JavaScript
camelCase("background-color"); // "backgroundColor"
camelCase("font-family"); // "fontFamily"
camelCase("border-radius"); // "borderRadius"

// Database columns to object properties
camelCase("user_id"); // "userId"
camelCase("last_login_date"); // "lastLoginDate"
camelCase("is_active"); // "isActive"
```

## API

### `camelCase(input, options?)`

Converts a string to camelCase.

#### Parameters

- `input` (`string`): The string to convert
- `options` (`Options`, optional): Configuration options

#### Returns

- `string`: The camelCase formatted string

#### Options

```typescript
interface Options {
  // Custom transform function for word processing
  transform?: (word: string, index: number, words: string[]) => string;

  // Regex to strip characters before processing
  stripRegexp?: RegExp;

  // Custom split function
  split?: (value: string) => string[];
}
```

### `camelCaseTransformMerge`

A transform function that merges numeric characters without separation.

```javascript
import { camelCase, camelCaseTransformMerge } from "text-camel-case";

camelCase("version 1.2.3", { transform: camelCaseTransformMerge }); // "version123"
```

## Development

### Type Checking

```bash
# Check types
pnpm typecheck

# Check types in watch mode
pnpm typecheck:watch
```

### Linting

```bash
# Run linter
pnpm lint

# Auto-fix linting issues
pnpm lint --fix
```

### Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

### Building

```bash
# Build the package
pnpm build

# Build and watch for changes
pnpm build --watch
```

## Bundle Size

This package is optimized for minimal bundle size:

- **Minified**: ~450 B
- **Gzipped**: ~250 B
- **Tree-shakeable**: Yes
- **Side effects**: None

## TypeScript Support

This package includes comprehensive TypeScript definitions and supports:

- Full type safety
- IntelliSense autocompletion
- Type inference
- Generic type parameters

## Browser Support

- **Modern browsers**: ES2015+
- **Node.js**: 12+
- **Bundle formats**: UMD, ESM, CommonJS

## Related Packages

- [`text-pascal-case`](../pascal-case) - Convert to PascalCase
- [`text-snake-case`](../snake-case) - Convert to snake_case
- [`text-kebab-case`](../kebab-case) - Convert to kebab-case
- [`text-title-case`](../title-case) - Convert to Title Case

## License

[MIT](LICENSE)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

- 📧 Email: [selikhov.dmitrey@gmail.com](mailto:selikhov.dmitrey@gmail.com)
- 🐛 Issues: [GitHub Issues](https://github.com/idimetrix/text-case/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/idimetrix/text-case/discussions)

[npm-image]: https://img.shields.io/npm/v/text-camel-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-camel-case
[downloads-image]: https://img.shields.io/npm/dm/text-camel-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-camel-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-camel-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-camel-case
