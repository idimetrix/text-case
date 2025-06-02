# Kebab Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into kebab-case format with lowercase words separated by hyphens.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-kebab-case

# yarn
yarn add text-kebab-case

# pnpm
pnpm add text-kebab-case

# bun
bun add text-kebab-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { kebabCase } from "text-kebab-case";

console.log(kebabCase("hello world")); // "hello-world"
```

### CommonJS

```javascript
const { kebabCase } = require("text-kebab-case");

console.log(kebabCase("hello world")); // "hello-world"
```

### TypeScript

```typescript
import { kebabCase, kebabCaseTransformMerge, Options } from "text-kebab-case";

const result: string = kebabCase("hello world");
console.log(result); // "hello-world"
```

## Examples

### Basic Usage

```javascript
import { kebabCase } from "text-kebab-case";

// Simple transformations
kebabCase("hello world"); // "hello-world"
kebabCase("Hello World"); // "hello-world"
kebabCase("HELLO WORLD"); // "hello-world"

// From other cases
kebabCase("camelCase"); // "camel-case"
kebabCase("PascalCase"); // "pascal-case"
kebabCase("snake_case"); // "snake-case"
kebabCase("dot.case"); // "dot-case"

// Complex examples
kebabCase("XMLHttpRequest"); // "xml-http-request"
kebabCase("iPhone"); // "i-phone"
kebabCase("version 1.2.3"); // "version-1-2-3"
```

### Advanced Options

```javascript
import { kebabCase, kebabCaseTransformMerge } from "text-kebab-case";

// Custom transform to merge numbers without separator
kebabCase("version 1.2.3", {
  transform: kebabCaseTransformMerge,
}); // "version-123"

// With custom separator handling
kebabCase("hello_world.test", {
  stripRegexp: /[_.]/g,
}); // "hello-world-test"
```

### Real-world Examples

```javascript
import { kebabCase } from "text-kebab-case";

// CSS class names
kebabCase("primaryButton"); // "primary-button"
kebabCase("navigation_bar"); // "navigation-bar"
kebabCase("form-input"); // "form-input"

// HTML attributes
kebabCase("dataToggle"); // "data-toggle"
kebabCase("ariaLabel"); // "aria-label"
kebabCase("tabIndex"); // "tab-index"

// URL slugs
kebabCase("My Blog Post Title"); // "my-blog-post-title"
kebabCase("Product Category Name"); // "product-category-name"
kebabCase("Special Characters!"); // "special-characters"

// File names
kebabCase("userProfile.component"); // "user-profile-component"
kebabCase("api_service"); // "api-service"
kebabCase("configUtils"); // "config-utils"
```

## API

### `kebabCase(input, options?)`

Converts a string to kebab-case.

#### Parameters

- `input` (`string`): The string to convert
- `options` (`Options`, optional): Configuration options

#### Returns

- `string`: The kebab-case formatted string

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

### `kebabCaseTransformMerge`

A transform function that merges numeric characters without separation.

```javascript
import { kebabCase, kebabCaseTransformMerge } from "text-kebab-case";

kebabCase("version 1.2.3", { transform: kebabCaseTransformMerge }); // "version-123"
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

- **Minified**: ~350 B
- **Gzipped**: ~180 B
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

- [`text-camel-case`](../camel-case) - Convert to camelCase
- [`text-pascal-case`](../pascal-case) - Convert to PascalCase
- [`text-snake-case`](../snake-case) - Convert to snake_case
- [`text-param-case`](../param-case) - Alias for kebab-case

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

[npm-image]: https://img.shields.io/npm/v/text-kebab-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-kebab-case
[downloads-image]: https://img.shields.io/npm/dm/text-kebab-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-kebab-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-kebab-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-kebab-case
