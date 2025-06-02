# Header Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into Header-Case format where words are capitalized and separated by hyphens.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-header-case

# yarn
yarn add text-header-case

# pnpm
pnpm add text-header-case

# bun
bun add text-header-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { headerCase } from "text-header-case";

console.log(headerCase("hello world")); // "Hello-World"
```

### CommonJS

```javascript
const { headerCase } = require("text-header-case");

console.log(headerCase("hello world")); // "Hello-World"
```

### TypeScript

```typescript
import { headerCase, Options } from "text-header-case";

const result: string = headerCase("hello world");
console.log(result); // "Hello-World"
```

## Examples

### Basic Usage

```javascript
import { headerCase } from "text-header-case";

// Simple transformations
headerCase("hello world");            // "Hello-World"
headerCase("Hello World");            // "Hello-World"
headerCase("HELLO WORLD");            // "Hello-World"

// From other cases
headerCase("camelCase");              // "Camel-Case"
headerCase("PascalCase");             // "Pascal-Case"
headerCase("snake_case");             // "Snake-Case"
headerCase("kebab-case");             // "Kebab-Case"

// Complex examples
headerCase("XMLHttpRequest");         // "Xml-Http-Request"
headerCase("iPhone");                 // "I-Phone"
headerCase("version 1.2.3");         // "Version-1-2-3"
```

### Advanced Usage

```javascript
import { headerCase } from "text-header-case";

// HTTP headers
headerCase("content-type");           // "Content-Type"
headerCase("authorization");          // "Authorization"
headerCase("user-agent");             // "User-Agent"
headerCase("accept-language");        // "Accept-Language"

// Custom headers
headerCase("x-api-key");              // "X-Api-Key"
headerCase("x-request-id");           // "X-Request-Id"
headerCase("x-forwarded-for");        // "X-Forwarded-For"

// CORS headers
headerCase("access-control-allow-origin");      // "Access-Control-Allow-Origin"
headerCase("access-control-allow-methods");     // "Access-Control-Allow-Methods"
headerCase("access-control-allow-headers");     // "Access-Control-Allow-Headers"
```

### Real-world Examples

```javascript
import { headerCase } from "text-header-case";

// HTTP request headers
headerCase("cache-control");          // "Cache-Control"
headerCase("last-modified");          // "Last-Modified"
headerCase("if-none-match");          // "If-None-Match"
headerCase("accept-encoding");        // "Accept-Encoding"

// Response headers
headerCase("content-length");         // "Content-Length"
headerCase("content-encoding");       // "Content-Encoding"
headerCase("transfer-encoding");      // "Transfer-Encoding"
headerCase("strict-transport-security"); // "Strict-Transport-Security"

// Authentication headers
headerCase("www-authenticate");       // "Www-Authenticate"
headerCase("proxy-authenticate");     // "Proxy-Authenticate"
headerCase("proxy-authorization");    // "Proxy-Authorization"

// Custom application headers
headerCase("api-version");            // "Api-Version"
headerCase("request-timeout");        // "Request-Timeout"
headerCase("rate-limit-remaining");   // "Rate-Limit-Remaining"
```

### With Custom Options

```javascript
import { headerCase } from "text-header-case";

// Using custom transform
const customHeader = headerCase("hello_world", {
  transform: (word, index) => {
    // Custom logic for specific words
    if (word === "api") return "API";
    if (word === "http") return "HTTP";
    if (word === "www") return "WWW";
    return word;
  }
});

// Using custom split function
const customSplit = headerCase("my-custom-string", {
  split: (value) => value.split(/[-_]/g)
});
```

## API

### `headerCase(input, options?)`

Converts a string to Header-Case.

#### Parameters

- `input` (`string`): The string to convert
- `options` (`Options`, optional): Configuration options

#### Returns

- `string`: The Header-Case formatted string

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

- **Minified**: ~340 B
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

- [`text-title-case`](../title-case) - Convert to Title Case
- [`text-capital-case`](../capital-case) - Convert to Capital Case
- [`text-kebab-case`](../kebab-case) - Convert to kebab-case
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

[npm-image]: https://img.shields.io/npm/v/text-header-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-header-case
[downloads-image]: https://img.shields.io/npm/dm/text-header-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-header-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-header-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-header-case
