# Pascal Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into PascalCase format where the first letter of each word is capitalized and no separators are used.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-pascal-case

# yarn
yarn add text-pascal-case

# pnpm
pnpm add text-pascal-case

# bun
bun add text-pascal-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { pascalCase } from "text-pascal-case";

console.log(pascalCase("hello world")); // "HelloWorld"
```

### CommonJS

```javascript
const { pascalCase } = require("text-pascal-case");

console.log(pascalCase("hello world")); // "HelloWorld"
```

### TypeScript

```typescript
import { pascalCase, pascalCaseTransformMerge, Options } from "text-pascal-case";

const result: string = pascalCase("hello world");
console.log(result); // "HelloWorld"
```

## Examples

### Basic Usage

```javascript
import { pascalCase } from "text-pascal-case";

// Simple transformations
pascalCase("hello world");          // "HelloWorld"
pascalCase("Hello World");          // "HelloWorld"
pascalCase("HELLO WORLD");          // "HelloWorld"

// From other cases
pascalCase("snake_case");           // "SnakeCase"
pascalCase("kebab-case");           // "KebabCase"
pascalCase("dot.case");             // "DotCase"
pascalCase("camelCase");            // "CamelCase"

// Complex examples
pascalCase("XMLHttpRequest");       // "XmlHttpRequest"
pascalCase("iPhone");               // "IPhone"
pascalCase("version 1.2.3");       // "Version123"
```

### Advanced Options

```javascript
import { pascalCase, pascalCaseTransformMerge } from "text-pascal-case";

// Custom transform to merge numbers without separator
pascalCase("version 1.2.3", {
  transform: pascalCaseTransformMerge
}); // "Version123"

// With custom separator handling
pascalCase("hello_world-test", {
  stripRegexp: /[_-]/g
}); // "HelloWorldTest"
```

### Real-world Examples

```javascript
import { pascalCase } from "text-pascal-case";

// Class names
pascalCase("user_service");         // "UserService"
pascalCase("email_validator");      // "EmailValidator"
pascalCase("api_client");           // "ApiClient"

// Component names
pascalCase("button-component");     // "ButtonComponent"
pascalCase("navigation_bar");       // "NavigationBar"
pascalCase("form-input");           // "FormInput"

// Type definitions
pascalCase("user_profile");         // "UserProfile"
pascalCase("api_response");         // "ApiResponse"
pascalCase("config_options");       // "ConfigOptions"
```

## API

### `pascalCase(input, options?)`

Converts a string to PascalCase.

#### Parameters

- `input` (`string`): The string to convert
- `options` (`Options`, optional): Configuration options

#### Returns

- `string`: The PascalCase formatted string

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

### `pascalCaseTransformMerge`

A transform function that merges numeric characters without separation.

```javascript
import { pascalCase, pascalCaseTransformMerge } from "text-pascal-case";

pascalCase("version 1.2.3", { transform: pascalCaseTransformMerge }); // "Version123"
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

- **Minified**: ~400 B
- **Gzipped**: ~200 B
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

[npm-image]: https://img.shields.io/npm/v/text-pascal-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-pascal-case
[downloads-image]: https://img.shields.io/npm/dm/text-pascal-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-pascal-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-pascal-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-pascal-case
