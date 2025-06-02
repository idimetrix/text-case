# Title Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into Title Case format where the first letter of each word is capitalized.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-title-case

# yarn
yarn add text-title-case

# pnpm
pnpm add text-title-case

# bun
bun add text-title-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { titleCase } from "text-title-case";

console.log(titleCase("hello world")); // "Hello World"
```

### CommonJS

```javascript
const { titleCase } = require("text-title-case");

console.log(titleCase("hello world")); // "Hello World"
```

### TypeScript

```typescript
import { titleCase, Options } from "text-title-case";

const result: string = titleCase("hello world");
console.log(result); // "Hello World"
```

## Examples

### Basic Usage

```javascript
import { titleCase } from "text-title-case";

// Simple transformations
titleCase("hello world");           // "Hello World"
titleCase("Hello World");           // "Hello World"
titleCase("HELLO WORLD");           // "Hello World"

// From other cases
titleCase("camelCase");             // "Camel Case"
titleCase("PascalCase");            // "Pascal Case"
titleCase("snake_case");            // "Snake Case"
titleCase("kebab-case");            // "Kebab Case"

// Complex examples
titleCase("XMLHttpRequest");        // "Xml Http Request"
titleCase("iPhone");                // "I Phone"
titleCase("version 1.2.3");        // "Version 1 2 3"
```

### Advanced Usage

```javascript
import { titleCase } from "text-title-case";

// Proper nouns and names
titleCase("john doe");              // "John Doe"
titleCase("new york city");         // "New York City"
titleCase("united states");         // "United States"

// Article and book titles
titleCase("the great gatsby");      // "The Great Gatsby"
titleCase("to kill a mockingbird"); // "To Kill A Mockingbird"
titleCase("war and peace");         // "War And Peace"

// Technical documentation
titleCase("getting started guide"); // "Getting Started Guide"
titleCase("api reference");         // "Api Reference"
titleCase("installation instructions"); // "Installation Instructions"
```

### Real-world Examples

```javascript
import { titleCase } from "text-title-case";

// Headers and titles
titleCase("user profile settings"); // "User Profile Settings"
titleCase("account management");    // "Account Management"
titleCase("privacy policy");        // "Privacy Policy"

// Menu items
titleCase("home page");             // "Home Page"
titleCase("about us");              // "About Us"
titleCase("contact information");   // "Contact Information"

// Form labels
titleCase("first name");            // "First Name"
titleCase("email address");         // "Email Address"
titleCase("phone number");          // "Phone Number"

// Business terms
titleCase("project management");    // "Project Management"
titleCase("customer service");      // "Customer Service"
titleCase("quality assurance");     // "Quality Assurance"
```

## API

### `titleCase(input, options?)`

Converts a string to Title Case.

#### Parameters

- `input` (`string`): The string to convert
- `options` (`Options`, optional): Configuration options

#### Returns

- `string`: The Title Case formatted string

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

- [`text-sentence-case`](../sentence-case) - Convert to Sentence case
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

[npm-image]: https://img.shields.io/npm/v/text-title-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-title-case
[downloads-image]: https://img.shields.io/npm/dm/text-title-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-title-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-title-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-title-case
