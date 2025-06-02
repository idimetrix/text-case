# Lower Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into lower case format where all characters are converted to lowercase.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-lower-case

# yarn
yarn add text-lower-case

# pnpm
pnpm add text-lower-case

# bun
bun add text-lower-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { lowerCase } from "text-lower-case";

console.log(lowerCase("Hello World")); // "hello world"
```

### CommonJS

```javascript
const { lowerCase } = require("text-lower-case");

console.log(lowerCase("Hello World")); // "hello world"
```

### TypeScript

```typescript
import { lowerCase } from "text-lower-case";

const result: string = lowerCase("Hello World");
console.log(result); // "hello world"
```

## Examples

### Basic Usage

```javascript
import { lowerCase } from "text-lower-case";

// Simple transformations
lowerCase("Hello World");             // "hello world"
lowerCase("HELLO WORLD");             // "hello world"
lowerCase("hello world");             // "hello world"

// From other cases
lowerCase("CamelCase");               // "camelcase"
lowerCase("PascalCase");              // "pascalcase"
lowerCase("SNAKE_CASE");              // "snake_case"
lowerCase("KEBAB-CASE");              // "kebab-case"

// Complex examples
lowerCase("XMLHttpRequest");          // "xmlhttprequest"
lowerCase("iPhone");                  // "iphone"
lowerCase("VERSION 1.2.3");          // "version 1.2.3"
```

### Real-world Examples

```javascript
import { lowerCase } from "text-lower-case";

// Email normalization
lowerCase("John.Doe@EXAMPLE.COM");    // "john.doe@example.com"
lowerCase("USER@DOMAIN.ORG");         // "user@domain.org"

// URL normalization
lowerCase("HTTP://EXAMPLE.COM");      // "http://example.com"
lowerCase("HTTPS://API.SERVICE.COM"); // "https://api.service.com"

// File names
lowerCase("MyDocument.PDF");          // "mydocument.pdf"
lowerCase("IMAGE.JPG");               // "image.jpg"
lowerCase("SCRIPT.JS");               // "script.js"

// CSS classes and IDs
lowerCase("MAIN-HEADER");             // "main-header"
lowerCase("SIDEBAR-CONTENT");         // "sidebar-content"
lowerCase("FOOTER-LINKS");            // "footer-links"
```

### Programming Examples

```javascript
import { lowerCase } from "text-lower-case";

// Package names
lowerCase("TEXT-CASE-LIBRARY");       // "text-case-library"
lowerCase("MY-AWESOME-PACKAGE");      // "my-awesome-package"

// Database table names
lowerCase("USER_PROFILES");           // "user_profiles"
lowerCase("ORDER_ITEMS");             // "order_items"
lowerCase("CUSTOMER_ADDRESSES");      // "customer_addresses"

// Command line arguments
lowerCase("--VERBOSE");               // "--verbose"
lowerCase("--DEBUG-MODE");            // "--debug-mode"
lowerCase("--OUTPUT-FILE");           // "--output-file"

// Configuration keys
lowerCase("SERVER_PORT");             // "server_port"
lowerCase("DATABASE_URL");            // "database_url"
lowerCase("API_SECRET_KEY");          // "api_secret_key"
```

### Text Processing Examples

```javascript
import { lowerCase } from "text-lower-case";

// Search normalization
lowerCase("SEARCH QUERY");            // "search query"
lowerCase("Product Name");            // "product name"
lowerCase("Category Filter");         // "category filter"

// User input normalization
lowerCase("USERNAME");                // "username"
lowerCase("PASSWORD");                // "password"
lowerCase("FULL NAME");               // "full name"

// Tag normalization
lowerCase("JAVASCRIPT");              // "javascript"
lowerCase("REACT.JS");                // "react.js"
lowerCase("NODE.JS");                 // "node.js"

// Language codes
lowerCase("EN-US");                   // "en-us"
lowerCase("FR-CA");                   // "fr-ca"
lowerCase("ZH-CN");                   // "zh-cn"
```

## API

### `lowerCase(input)`

Converts a string to lower case.

#### Parameters

- `input` (`string`): The string to convert

#### Returns

- `string`: The lower case formatted string

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

- **Minified**: ~120 B
- **Gzipped**: ~80 B
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

- [`text-upper-case`](../upper-case) - Convert to UPPERCASE
- [`text-upper-case-first`](../upper-case-first) - Uppercase first character
- [`text-lower-case-first`](../lower-case-first) - Lowercase first character
- [`text-swap-case`](../swap-case) - Swap character case

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

[npm-image]: https://img.shields.io/npm/v/text-lower-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-lower-case
[downloads-image]: https://img.shields.io/npm/dm/text-lower-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-lower-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-lower-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-lower-case
