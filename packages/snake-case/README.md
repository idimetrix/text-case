# Snake Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into snake_case format with lowercase words separated by underscores.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-snake-case

# yarn
yarn add text-snake-case

# pnpm
pnpm add text-snake-case

# bun
bun add text-snake-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { snakeCase } from "text-snake-case";

console.log(snakeCase("hello world")); // "hello_world"
```

### CommonJS

```javascript
const { snakeCase } = require("text-snake-case");

console.log(snakeCase("hello world")); // "hello_world"
```

### TypeScript

```typescript
import { snakeCase, snakeCaseTransformMerge, Options } from "text-snake-case";

const result: string = snakeCase("hello world");
console.log(result); // "hello_world"
```

## Examples

### Basic Usage

```javascript
import { snakeCase } from "text-snake-case";

// Simple transformations
snakeCase("hello world");          // "hello_world"
snakeCase("Hello World");          // "hello_world"
snakeCase("HELLO WORLD");          // "hello_world"

// From other cases
snakeCase("camelCase");            // "camel_case"
snakeCase("PascalCase");           // "pascal_case"
snakeCase("kebab-case");           // "kebab_case"
snakeCase("dot.case");             // "dot_case"

// Complex examples
snakeCase("XMLHttpRequest");       // "xml_http_request"
snakeCase("iPhone");               // "i_phone"
snakeCase("version 1.2.3");       // "version_1_2_3"
```

### Advanced Options

```javascript
import { snakeCase, snakeCaseTransformMerge } from "text-snake-case";

// Custom transform to merge numbers without separator
snakeCase("version 1.2.3", {
  transform: snakeCaseTransformMerge
}); // "version_123"

// With custom separator handling
snakeCase("hello-world.test", {
  stripRegexp: /[-.]/g
}); // "hello_world_test"
```

### Real-world Examples

```javascript
import { snakeCase } from "text-snake-case";

// Database column names
snakeCase("firstName");             // "first_name"
snakeCase("emailAddress");          // "email_address"
snakeCase("createdAt");             // "created_at"

// API field names
snakeCase("userId");                // "user_id"
snakeCase("accessToken");           // "access_token"
snakeCase("refreshToken");          // "refresh_token"

// Configuration variables
snakeCase("apiBaseUrl");            // "api_base_url"
snakeCase("databaseUrl");           // "database_url"
snakeCase("maxConnections");        // "max_connections"

// Python variables and functions
snakeCase("getUserInfo");           // "get_user_info"
snakeCase("validateEmailAddress");  // "validate_email_address"
snakeCase("calculateTotalAmount");  // "calculate_total_amount"
```

## API

### `snakeCase(input, options?)`

Converts a string to snake_case.

#### Parameters

- `input` (`string`): The string to convert
- `options` (`Options`, optional): Configuration options

#### Returns

- `string`: The snake_case formatted string

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

### `snakeCaseTransformMerge`

A transform function that merges numeric characters without separation.

```javascript
import { snakeCase, snakeCaseTransformMerge } from "text-snake-case";

snakeCase("version 1.2.3", { transform: snakeCaseTransformMerge }); // "version_123"
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

- **Minified**: ~300 B
- **Gzipped**: ~160 B
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
- [`text-kebab-case`](../kebab-case) - Convert to kebab-case
- [`text-constant-case`](../constant-case) - Convert to CONSTANT_CASE

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

[npm-image]: https://img.shields.io/npm/v/text-snake-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-snake-case
[downloads-image]: https://img.shields.io/npm/dm/text-snake-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-snake-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-snake-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-snake-case
