# Upper Case First

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text by making the **first character uppercase** while preserving the rest.

## 🚀 Features

- **Lightweight** - Only ~200B minified + gzipped
- **Type-safe** - Full TypeScript support with comprehensive type definitions
- **Zero dependencies** - No external dependencies
- **Tree-shakeable** - ES modules support
- **Universal** - Works in browsers, Node.js, and serverless environments
- **Well-tested** - Comprehensive test suite with edge cases

## 📦 Installation

```bash
# npm
npm install text-upper-case-first

# yarn
yarn add text-upper-case-first

# pnpm
pnpm add text-upper-case-first

# bun
bun add text-upper-case-first
```

## 🎯 Quick Start

```javascript
import { upperCaseFirst } from "text-upper-case-first";

console.log(upperCaseFirst("hello world")); // "Hello world"
console.log(upperCaseFirst("HELLO WORLD")); // "HELLO WORLD"
console.log(upperCaseFirst("camelCase")); // "CamelCase"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { upperCaseFirst } from "text-upper-case-first";

console.log(upperCaseFirst("hello")); // "Hello"
```

### CommonJS

```javascript
const { upperCaseFirst } = require("text-upper-case-first");

console.log(upperCaseFirst("hello")); // "Hello"
```

### TypeScript

```typescript
import { upperCaseFirst } from "text-upper-case-first";

const result: string = upperCaseFirst("hello world");
console.log(result); // "Hello world"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Simple cases
upperCaseFirst("hello");         // "Hello"
upperCaseFirst("HELLO");         // "HELLO"
upperCaseFirst("Hello");         // "Hello"

// Multiple words
upperCaseFirst("hello world");   // "Hello world"
upperCaseFirst("HELLO WORLD");   // "HELLO WORLD"
upperCaseFirst("Hello World");   // "Hello World"

// Programming cases
upperCaseFirst("camelCase");     // "CamelCase"
upperCaseFirst("pascalCase");    // "PascalCase"
upperCaseFirst("snake_case");    // "Snake_case"
upperCaseFirst("kebab-case");    // "Kebab-case"
```

### Edge Cases

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Empty and single character
upperCaseFirst("");              // ""
upperCaseFirst("a");             // "A"
upperCaseFirst("A");             // "A"

// Numbers and symbols
upperCaseFirst("123hello");      // "123hello"
upperCaseFirst("@hello");        // "@hello"
upperCaseFirst("hello123");      // "Hello123"

// Unicode characters
upperCaseFirst("ñice");          // "Ñice"
upperCaseFirst("über");          // "Über"
upperCaseFirst("café");          // "Café"
```

## 🌍 Real-World Examples

### Sentence Capitalization

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Capitalize sentences
upperCaseFirst("this is a sentence."); // "This is a sentence."
upperCaseFirst("welcome to our app");   // "Welcome to our app"
upperCaseFirst("error: invalid input"); // "Error: invalid input"
```

### Name Formatting

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Format names
upperCaseFirst("john");          // "John"
upperCaseFirst("mary jane");     // "Mary jane"
upperCaseFirst("o'connor");      // "O'connor"
upperCaseFirst("van der berg");  // "Van der berg"
```

### Content Processing

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Process content titles
const titles = [
  "getting started",
  "installation guide",
  "best practices",
  "troubleshooting",
  "frequently asked questions"
];

const formattedTitles = titles.map(upperCaseFirst);
console.log(formattedTitles);
// [
//   "Getting started",
//   "Installation guide",
//   "Best practices",
//   "Troubleshooting",
//   "Frequently asked questions"
// ]
```

### Form Field Processing

```javascript
import { upperCaseFirst } from "text-upper-case-first";

function formatFormField(value) {
  return upperCaseFirst(value.trim().toLowerCase());
}

console.log(formatFormField("  JOHN DOE  ")); // "John doe"
console.log(formatFormField("jane smith"));   // "Jane smith"
console.log(formatFormField("BOB WILSON"));   // "Bob wilson"
```

### Message Formatting

```javascript
import { upperCaseFirst } from "text-upper-case-first";

function formatMessage(message) {
  return upperCaseFirst(message.trim()) +
    (message.endsWith('.') || message.endsWith('!') || message.endsWith('?') ? '' : '.');
}

console.log(formatMessage("hello world"));     // "Hello world."
console.log(formatMessage("welcome back!"));   // "Welcome back!"
console.log(formatMessage("are you sure?"));   // "Are you sure?"
```

### API Response Processing

```javascript
import { upperCaseFirst } from "text-upper-case-first";

function processApiResponse(response) {
  if (response.message) {
    response.message = upperCaseFirst(response.message);
  }

  if (response.errors && Array.isArray(response.errors)) {
    response.errors = response.errors.map(error =>
      typeof error === 'string' ? upperCaseFirst(error) : error
    );
  }

  return response;
}

const apiResponse = {
  success: false,
  message: "validation failed",
  errors: [
    "email is required",
    "password must be at least 8 characters",
    "username already exists"
  ]
};

console.log(processApiResponse(apiResponse));
// {
//   success: false,
//   message: "Validation failed",
//   errors: [
//     "Email is required",
//     "Password must be at least 8 characters",
//     "Username already exists"
//   ]
// }
```

### Text Processing Pipeline

```javascript
import { upperCaseFirst } from "text-upper-case-first";

class TextProcessor {
  constructor() {
    this.processors = [];
  }

  addTrim() {
    this.processors.push(text => text.trim());
    return this;
  }

  addLowerCase() {
    this.processors.push(text => text.toLowerCase());
    return this;
  }

  addUpperCaseFirst() {
    this.processors.push(upperCaseFirst);
    return this;
  }

  process(text) {
    return this.processors.reduce((result, processor) => processor(result), text);
  }
}

const processor = new TextProcessor()
  .addTrim()
  .addLowerCase()
  .addUpperCaseFirst();

console.log(processor.process("  HELLO WORLD  ")); // "Hello world"
```

## 📖 API Reference

### `upperCaseFirst(input)`

Makes the first character of a string uppercase while preserving the rest.

#### Parameters

- **`input`** (`string`): The string to transform

#### Returns

- **`string`**: The string with the first character in uppercase

## 📊 Bundle Size

This package is optimized for minimal bundle size:

- **Minified**: ~200B
- **Gzipped**: ~150B
- **Tree-shakeable**: Yes
- **Side effects**: None

## 🌍 Browser Support

- **Modern browsers**: ES2015+ (Chrome 51+, Firefox 54+, Safari 10+)
- **Node.js**: 12+
- **TypeScript**: 4.0+
- **Bundle formats**: UMD, ESM, CommonJS

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage

# Type checking
pnpm typecheck

# Linting
pnpm lint
```

## 🔗 Related Packages

- [`text-lower-case-first`](../lower-case-first) - Make first character lowercase
- [`text-title-case`](../title-case) - Convert to Title Case
- [`text-sentence-case`](../sentence-case) - Convert to Sentence case
- [`text-case`](../text-case) - All case transformations in one package

## 📜 License

[MIT](LICENSE) © [Dmitry Selikhov](https://github.com/idimetrix)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

- 📧 **Email**: [selikhov.dmitrey@gmail.com](mailto:selikhov.dmitrey@gmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/idimetrix/text-case/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/idimetrix/text-case/discussions)
- 📖 **Documentation**: [Full Documentation](https://github.com/idimetrix/text-case#readme)

---

**Made with ❤️ by [Dmitry Selikhov](https://github.com/idimetrix)**

[npm-image]: https://img.shields.io/npm/v/text-upper-case-first.svg?style=flat
[npm-url]: https://npmjs.org/package/text-upper-case-first
[downloads-image]: https://img.shields.io/npm/dm/text-upper-case-first.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-upper-case-first
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-upper-case-first.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-upper-case-first
