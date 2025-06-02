# Sentence Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into Sentence case format where only the first letter is capitalized.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-sentence-case

# yarn
yarn add text-sentence-case

# pnpm
pnpm add text-sentence-case

# bun
bun add text-sentence-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { sentenceCase } from "text-sentence-case";

console.log(sentenceCase("hello world")); // "Hello world"
```

### CommonJS

```javascript
const { sentenceCase } = require("text-sentence-case");

console.log(sentenceCase("hello world")); // "Hello world"
```

### TypeScript

```typescript
import { sentenceCase, Options } from "text-sentence-case";

const result: string = sentenceCase("hello world");
console.log(result); // "Hello world"
```

## Examples

### Basic Usage

```javascript
import { sentenceCase } from "text-sentence-case";

// Simple transformations
sentenceCase("hello world"); // "Hello world"
sentenceCase("Hello World"); // "Hello world"
sentenceCase("HELLO WORLD"); // "Hello world"

// From other cases
sentenceCase("camelCase"); // "Camel case"
sentenceCase("PascalCase"); // "Pascal case"
sentenceCase("snake_case"); // "Snake case"
sentenceCase("kebab-case"); // "Kebab case"

// Complex examples
sentenceCase("XMLHttpRequest"); // "Xml http request"
sentenceCase("iPhone"); // "I phone"
sentenceCase("version 1.2.3"); // "Version 1 2 3"
```

### Advanced Usage

```javascript
import { sentenceCase } from "text-sentence-case";

// Proper nouns and names
sentenceCase("john doe"); // "John doe"
sentenceCase("new york city"); // "New york city"
sentenceCase("united states"); // "United states"

// Descriptive text
sentenceCase("getting started guide"); // "Getting started guide"
sentenceCase("api reference"); // "Api reference"
sentenceCase("installation instructions"); // "Installation instructions"

// Error messages
sentenceCase("invalid input data"); // "Invalid input data"
sentenceCase("connection timeout"); // "Connection timeout"
sentenceCase("access denied"); // "Access denied"
```

### Real-world Examples

```javascript
import { sentenceCase } from "text-sentence-case";

// Error messages and notifications
sentenceCase("user not found"); // "User not found"
sentenceCase("operation successful"); // "Operation successful"
sentenceCase("invalid credentials"); // "Invalid credentials"

// Form validation messages
sentenceCase("email is required"); // "Email is required"
sentenceCase("password too short"); // "Password too short"
sentenceCase("invalid phone number"); // "Invalid phone number"

// Status messages
sentenceCase("processing request"); // "Processing request"
sentenceCase("upload complete"); // "Upload complete"
sentenceCase("connection established"); // "Connection established"

// User interface text
sentenceCase("please wait"); // "Please wait"
sentenceCase("loading content"); // "Loading content"
sentenceCase("no results found"); // "No results found"
```

### With Custom Options

```javascript
import { sentenceCase } from "text-sentence-case";

// Using custom transform
const customSentence = sentenceCase("hello_world", {
  transform: (word, index) => {
    // Custom logic for specific words
    if (word === "api") return "API";
    return word;
  },
});
```

## API

### `sentenceCase(input, options?)`

Converts a string to Sentence case.

#### Parameters

- `input` (`string`): The string to convert
- `options` (`Options`, optional): Configuration options

#### Returns

- `string`: The Sentence case formatted string

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

- **Minified**: ~320 B
- **Gzipped**: ~170 B
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

- [`text-title-case`](../title-case) - Convert to Title Case
- [`text-capital-case`](../capital-case) - Convert to Capital Case
- [`text-header-case`](../header-case) - Convert to Header-Case
- [`text-pascal-case`](../pascal-case) - Convert to PascalCase

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

[npm-image]: https://img.shields.io/npm/v/text-sentence-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-sentence-case
[downloads-image]: https://img.shields.io/npm/dm/text-sentence-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-sentence-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-sentence-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-sentence-case
