# No Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into no case format with lowercase words separated by spaces.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-no-case

# yarn
yarn add text-no-case

# pnpm
pnpm add text-no-case

# bun
bun add text-no-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { noCase } from "text-no-case";

console.log(noCase("hello world")); // "hello world"
```

### CommonJS

```javascript
const { noCase } = require("text-no-case");

console.log(noCase("hello world")); // "hello world"
```

### TypeScript

```typescript
import { noCase, Options } from "text-no-case";

const result: string = noCase("hello world");
console.log(result); // "hello world"
```

## Examples

### Basic Usage

```javascript
import { noCase } from "text-no-case";

// Simple transformations
noCase("hello world"); // "hello world"
noCase("Hello World"); // "hello world"
noCase("HELLO WORLD"); // "hello world"

// From other cases
noCase("camelCase"); // "camel case"
noCase("PascalCase"); // "pascal case"
noCase("snake_case"); // "snake case"
noCase("kebab-case"); // "kebab case"
noCase("CONSTANT_CASE"); // "constant case"

// Complex examples
noCase("XMLHttpRequest"); // "xml http request"
noCase("iPhone"); // "i phone"
noCase("version 1.2.3"); // "version 1 2 3"
```

### Advanced Usage

```javascript
import { noCase } from "text-no-case";

// Technical terms
noCase("API_KEY"); // "api key"
noCase("HTTPSConnection"); // "https connection"
noCase("JSONResponse"); // "json response"

// Mixed separators
noCase("some-mixed_caseExample"); // "some mixed case example"
noCase("kebab-snake_camelCase"); // "kebab snake camel case"

// Numbers and special characters
noCase("version1.2.3"); // "version 1 2 3"
noCase("HTML5Parser"); // "html 5 parser"
noCase("CSS3Animation"); // "css 3 animation"
```

### Real-world Examples

```javascript
import { noCase } from "text-no-case";

// Configuration keys
noCase("DATABASE_URL"); // "database url"
noCase("API_SECRET_KEY"); // "api secret key"
noCase("MAX_FILE_SIZE"); // "max file size"

// Class names to readable text
noCase("UserProfileComponent"); // "user profile component"
noCase("PaymentGatewayService"); // "payment gateway service"
noCase("DatabaseConnectionPool"); // "database connection pool"

// Method names to descriptions
noCase("getUserById"); // "get user by id"
noCase("validateEmailAddress"); // "validate email address"
noCase("generatePasswordHash"); // "generate password hash"

// Error codes to messages
noCase("INVALID_CREDENTIALS"); // "invalid credentials"
noCase("CONNECTION_TIMEOUT"); // "connection timeout"
noCase("RESOURCE_NOT_FOUND"); // "resource not found"
```

### With Custom Options

```javascript
import { noCase } from "text-no-case";

// Using custom transform
const customNoCase = noCase("hello_world", {
  transform: (word, index) => {
    // Custom logic for specific words
    if (word === "api") return "API";
    if (word === "id") return "ID";
    return word;
  },
});

// Using custom split function
const customSplit = noCase("my-custom-string", {
  split: (value) => value.split(/[-_]/g),
});

// Using strip regex
const customStrip = noCase("test@example.com", {
  stripRegexp: /[@.]/g,
});
```

## API

### `noCase(input, options?)`

Converts a string to no case.

#### Parameters

- `input` (`string`): The string to convert
- `options` (`Options`, optional): Configuration options

#### Returns

- `string`: The no case formatted string

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

- **Minified**: ~280 B
- **Gzipped**: ~150 B
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

- [`text-sentence-case`](../sentence-case) - Convert to Sentence case
- [`text-title-case`](../title-case) - Convert to Title Case
- [`text-capital-case`](../capital-case) - Convert to Capital Case
- [`text-kebab-case`](../kebab-case) - Convert to kebab-case

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

[npm-image]: https://img.shields.io/npm/v/text-no-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-no-case
[downloads-image]: https://img.shields.io/npm/dm/text-no-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-no-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-no-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-no-case
