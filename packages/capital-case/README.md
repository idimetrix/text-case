# Capital Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into Capital Case format where every word is capitalized and separated by spaces.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-capital-case

# yarn
yarn add text-capital-case

# pnpm
pnpm add text-capital-case

# bun
bun add text-capital-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { capitalCase } from "text-capital-case";

console.log(capitalCase("hello world")); // "Hello World"
```

### CommonJS

```javascript
const { capitalCase } = require("text-capital-case");

console.log(capitalCase("hello world")); // "Hello World"
```

### TypeScript

```typescript
import { capitalCase, Options } from "text-capital-case";

const result: string = capitalCase("hello world");
console.log(result); // "Hello World"
```

## Examples

### Basic Usage

```javascript
import { capitalCase } from "text-capital-case";

// Simple transformations
capitalCase("hello world");           // "Hello World"
capitalCase("Hello World");           // "Hello World"
capitalCase("HELLO WORLD");           // "Hello World"

// From other cases
capitalCase("camelCase");             // "Camel Case"
capitalCase("PascalCase");            // "Pascal Case"
capitalCase("snake_case");            // "Snake Case"
capitalCase("kebab-case");            // "Kebab Case"

// Complex examples
capitalCase("XMLHttpRequest");        // "Xml Http Request"
capitalCase("iPhone");                // "I Phone"
capitalCase("version 1.2.3");        // "Version 1 2 3"
```

### Advanced Usage

```javascript
import { capitalCase } from "text-capital-case";

// Proper nouns and names
capitalCase("john doe");              // "John Doe"
capitalCase("new york city");         // "New York City"
capitalCase("united states");         // "United States"

// Technical terms
capitalCase("artificial intelligence"); // "Artificial Intelligence"
capitalCase("machine learning");      // "Machine Learning"
capitalCase("web development");       // "Web Development"

// Business terms
capitalCase("customer relationship management"); // "Customer Relationship Management"
capitalCase("enterprise resource planning");     // "Enterprise Resource Planning"
capitalCase("return on investment");             // "Return On Investment"
```

### Real-world Examples

```javascript
import { capitalCase } from "text-capital-case";

// Page titles and headers
capitalCase("about our company");     // "About Our Company"
capitalCase("privacy policy");        // "Privacy Policy"
capitalCase("terms of service");      // "Terms Of Service"

// Navigation menus
capitalCase("user dashboard");        // "User Dashboard"
capitalCase("account settings");      // "Account Settings"
capitalCase("billing information");   // "Billing Information"

// Form sections
capitalCase("personal information");  // "Personal Information"
capitalCase("contact details");       // "Contact Details"
capitalCase("payment method");        // "Payment Method"

// Product categories
capitalCase("consumer electronics");  // "Consumer Electronics"
capitalCase("home and garden");       // "Home And Garden"
capitalCase("sports and outdoors");   // "Sports And Outdoors"
```

### With Custom Options

```javascript
import { capitalCase } from "text-capital-case";

// Using custom transform
const customCapital = capitalCase("hello_world", {
  transform: (word, index) => {
    // Custom logic for specific words
    if (word === "api") return "API";
    if (word === "ui") return "UI";
    return word;
  }
});

// Using custom split function
const customSplit = capitalCase("my-custom-string", {
  split: (value) => value.split(/[-_]/g)
});
```

## API

### `capitalCase(input, options?)`

Converts a string to Capital Case.

#### Parameters

- `input` (`string`): The string to convert
- `options` (`Options`, optional): Configuration options

#### Returns

- `string`: The Capital Case formatted string

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

- **Minified**: ~330 B
- **Gzipped**: ~175 B
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
- [`text-sentence-case`](../sentence-case) - Convert to Sentence case
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

[npm-image]: https://img.shields.io/npm/v/text-capital-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-capital-case
[downloads-image]: https://img.shields.io/npm/dm/text-capital-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-capital-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-capital-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-capital-case
