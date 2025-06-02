# Upper Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into UPPER CASE format where all characters are converted to uppercase.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-upper-case

# yarn
yarn add text-upper-case

# pnpm
pnpm add text-upper-case

# bun
bun add text-upper-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { upperCase } from "text-upper-case";

console.log(upperCase("hello world")); // "HELLO WORLD"
```

### CommonJS

```javascript
const { upperCase } = require("text-upper-case");

console.log(upperCase("hello world")); // "HELLO WORLD"
```

### TypeScript

```typescript
import { upperCase } from "text-upper-case";

const result: string = upperCase("hello world");
console.log(result); // "HELLO WORLD"
```

## Examples

### Basic Usage

```javascript
import { upperCase } from "text-upper-case";

// Simple transformations
upperCase("hello world"); // "HELLO WORLD"
upperCase("Hello World"); // "HELLO WORLD"
upperCase("HELLO WORLD"); // "HELLO WORLD"

// From other cases
upperCase("camelCase"); // "CAMELCASE"
upperCase("PascalCase"); // "PASCALCASE"
upperCase("snake_case"); // "SNAKE_CASE"
upperCase("kebab-case"); // "KEBAB-CASE"

// Complex examples
upperCase("XMLHttpRequest"); // "XMLHTTPREQUEST"
upperCase("iPhone"); // "IPHONE"
upperCase("version 1.2.3"); // "VERSION 1.2.3"
```

### Real-world Examples

```javascript
import { upperCase } from "text-upper-case";

// Environment variables
upperCase("database_url"); // "DATABASE_URL"
upperCase("api_secret_key"); // "API_SECRET_KEY"
upperCase("max_file_size"); // "MAX_FILE_SIZE"

// Constants
upperCase("http_status_ok"); // "HTTP_STATUS_OK"
upperCase("error_codes"); // "ERROR_CODES"
upperCase("default_timeout"); // "DEFAULT_TIMEOUT"

// Acronyms and abbreviations
upperCase("html"); // "HTML"
upperCase("css"); // "CSS"
upperCase("json"); // "JSON"
upperCase("xml"); // "XML"

// Status messages
upperCase("success"); // "SUCCESS"
upperCase("error"); // "ERROR"
upperCase("warning"); // "WARNING"
upperCase("info"); // "INFO"
```

### Configuration Examples

```javascript
import { upperCase } from "text-upper-case";

// Configuration keys
upperCase("server_port"); // "SERVER_PORT"
upperCase("database_host"); // "DATABASE_HOST"
upperCase("redis_url"); // "REDIS_URL"

// Log levels
upperCase("debug"); // "DEBUG"
upperCase("verbose"); // "VERBOSE"
upperCase("warn"); // "WARN"
upperCase("fatal"); // "FATAL"

// HTTP methods
upperCase("get"); // "GET"
upperCase("post"); // "POST"
upperCase("put"); // "PUT"
upperCase("delete"); // "DELETE"
```

### Programming Examples

```javascript
import { upperCase } from "text-upper-case";

// File extensions
upperCase(".js"); // ".JS"
upperCase(".ts"); // ".TS"
upperCase(".json"); // ".JSON"

// Protocol names
upperCase("http"); // "HTTP"
upperCase("https"); // "HTTPS"
upperCase("ftp"); // "FTP"
upperCase("ssh"); // "SSH"

// Programming languages
upperCase("javascript"); // "JAVASCRIPT"
upperCase("typescript"); // "TYPESCRIPT"
upperCase("python"); // "PYTHON"
upperCase("rust"); // "RUST"
```

## API

### `upperCase(input)`

Converts a string to upper case.

#### Parameters

- `input` (`string`): The string to convert

#### Returns

- `string`: The upper case formatted string

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

- [`text-lower-case`](../lower-case) - Convert to lowercase
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

[npm-image]: https://img.shields.io/npm/v/text-upper-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-upper-case
[downloads-image]: https://img.shields.io/npm/dm/text-upper-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-upper-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-upper-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-upper-case
