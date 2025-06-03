# No Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **no case** format where words are lowercase and separated by spaces.

## 🚀 Features

- **Lightweight** - Only ~450B minified + gzipped
- **Type-safe** - Full TypeScript support with comprehensive type definitions
- **Zero dependencies** - No external dependencies
- **Tree-shakeable** - ES modules support
- **Universal** - Works in browsers, Node.js, and serverless environments
- **Well-tested** - Comprehensive test suite with edge cases
- **Customizable** - Flexible options for advanced use cases

## 📦 Installation

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

## 🎯 Quick Start

```javascript
import { noCase } from "text-no-case";

console.log(noCase("hello world")); // "hello world"
console.log(noCase("userProfileData")); // "user profile data"
console.log(noCase("backgroundColor")); // "background color"
```

## 📖 Usage

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

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { noCase } from "text-no-case";

// From different cases
noCase("hello world"); // "hello world"
noCase("Hello World"); // "hello world"
noCase("HELLO WORLD"); // "hello world"
noCase("camelCase"); // "camel case"
noCase("PascalCase"); // "pascal case"
noCase("snake_case"); // "snake case"
noCase("kebab-case"); // "kebab case"
noCase("dot.case"); // "dot case"

// Complex examples
noCase("XMLHttpRequest"); // "xml http request"
noCase("iPhone"); // "i phone"
noCase("version 1.2.3"); // "version 1 2 3"
noCase("userProfileData"); // "user profile data"
```

### Advanced Options

```javascript
import { noCase } from "text-no-case";

// Custom word splitting
noCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml http request"

// Custom character stripping
noCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello world com"

// Custom transformation function
noCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (word === "api") return "api";
    if (word === "v2") return "version 2";
    return word.toLowerCase();
  },
}); // "api version 2 endpoint"
```

## 🌍 Real-World Examples

### Search Query Processing

```javascript
import { noCase } from "text-no-case";

// Normalize search queries
noCase("JavaScript"); // "java script"
noCase("ReactJS"); // "react js"
noCase("Node.js"); // "node js"
noCase("TypeScript"); // "type script"
noCase("MongoDB"); // "mongo db"
```

### Content Processing

```javascript
import { noCase } from "text-no-case";

// Process content for readability
noCase("userManagement"); // "user management"
noCase("dataVisualization"); // "data visualization"
noCase("apiIntegration"); // "api integration"
noCase("errorHandling"); // "error handling"
noCase("performanceOptimization"); // "performance optimization"
```

### Tag Processing

```javascript
import { noCase } from "text-no-case";

// Convert tags to readable format
const tags = [
  "webDevelopment",
  "machineLearning",
  "dataScience",
  "userExperience",
  "projectManagement",
];

const readableTags = tags.map(noCase);
console.log(readableTags);
// [
//   "web development",
//   "machine learning",
//   "data science",
//   "user experience",
//   "project management"
// ]
```

### Form Label Generation

```javascript
import { noCase } from "text-no-case";

function generateFormLabel(fieldName) {
  return noCase(fieldName)
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(generateFormLabel("firstName")); // "First Name"
console.log(generateFormLabel("emailAddress")); // "Email Address"
console.log(generateFormLabel("phoneNumber")); // "Phone Number"
```

### URL Slug Preparation

```javascript
import { noCase } from "text-no-case";

function prepareSlug(title) {
  return noCase(title)
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

console.log(prepareSlug("Hello World!")); // "hello-world"
console.log(prepareSlug("JavaScript Tips & Tricks")); // "java-script-tips-tricks"
```

### Text Analysis

```javascript
import { noCase } from "text-no-case";

function analyzeText(text) {
  const normalized = noCase(text);
  const words = normalized.split(" ").filter((word) => word.length > 0);

  return {
    wordCount: words.length,
    uniqueWords: [...new Set(words)].length,
    averageWordLength:
      words.reduce((sum, word) => sum + word.length, 0) / words.length,
  };
}

console.log(analyzeText("userProfileData"));
// { wordCount: 3, uniqueWords: 3, averageWordLength: 4.67 }
```

### Content Normalization

```javascript
import { noCase } from "text-no-case";

function normalizeContent(content) {
  return content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => noCase(line))
    .join(" ");
}

const content = `
  userManagement
  dataVisualization
  apiIntegration
`;

console.log(normalizeContent(content));
// "user management data visualization api integration"
```

### Keyword Extraction

```javascript
import { noCase } from "text-no-case";

function extractKeywords(text, minLength = 3) {
  const normalized = noCase(text);
  const words = normalized.split(" ");

  return words
    .filter((word) => word.length >= minLength)
    .filter((word, index, arr) => arr.indexOf(word) === index)
    .sort();
}

console.log(extractKeywords("userProfileDataManagement"));
// ["data", "management", "profile", "user"]
```

## 📖 API Reference

### `noCase(input, options?)`

Converts a string to no case format.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The no case formatted string

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

## 🔧 Advanced Configuration

### Custom Word Splitting

```javascript
import { noCase } from "text-no-case";

// Split on specific patterns
noCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml http request"

// Split on numbers
noCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "user 123 data"
```

### Custom Character Stripping

```javascript
import { noCase } from "text-no-case";

// Strip specific characters
noCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello world com"

// Strip all non-alphanumeric
noCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "hello world"
```

### Custom Transform Functions

```javascript
import { noCase } from "text-no-case";

// Preserve certain words
noCase("xml-http-request", {
  transform: (word, index) => {
    const preserveWords = ["xml", "http", "api", "url"];
    if (preserveWords.includes(word.toLowerCase())) {
      return word.toLowerCase();
    }
    return word.toLowerCase();
  },
}); // "xml http request"

// Custom business logic
noCase("user-v2-api", {
  transform: (word, index) => {
    if (word === "v2") return "version 2";
    if (word === "api") return "api";
    return word.toLowerCase();
  },
}); // "user version 2 api"
```

## 📊 Bundle Size

This package is optimized for minimal bundle size:

- **Minified**: ~450B
- **Gzipped**: ~250B
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

- [`text-lower-case`](../lower-case) - Convert to lowercase
- [`text-sentence-case`](../sentence-case) - Convert to Sentence case
- [`text-title-case`](../title-case) - Convert to Title Case
- [`text-camel-case`](../camel-case) - Convert to camelCase
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

[npm-image]: https://img.shields.io/npm/v/text-no-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-no-case
[downloads-image]: https://img.shields.io/npm/dm/text-no-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-no-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-no-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-no-case
