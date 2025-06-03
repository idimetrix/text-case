# Capital Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **Capital Case** format where each word is capitalized and separated by spaces.

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
npm install text-capital-case

# yarn
yarn add text-capital-case

# pnpm
pnpm add text-capital-case

# bun
bun add text-capital-case
```

## 🎯 Quick Start

```javascript
import { capitalCase } from "text-capital-case";

console.log(capitalCase("hello world")); // "Hello World"
console.log(capitalCase("user_profile_data")); // "User Profile Data"
console.log(capitalCase("backgroundColor")); // "Background Color"
```

## 📖 Usage

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

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { capitalCase } from "text-capital-case";

// From different cases
capitalCase("hello world"); // "Hello World"
capitalCase("Hello World"); // "Hello World"
capitalCase("HELLO WORLD"); // "Hello World"
capitalCase("camelCase"); // "Camel Case"
capitalCase("PascalCase"); // "Pascal Case"
capitalCase("snake_case"); // "Snake Case"
capitalCase("kebab-case"); // "Kebab Case"
capitalCase("dot.case"); // "Dot Case"

// Complex examples
capitalCase("XMLHttpRequest"); // "Xml Http Request"
capitalCase("iPhone"); // "I Phone"
capitalCase("version 1.2.3"); // "Version 1 2 3"
capitalCase("userProfileData"); // "User Profile Data"
```

### Advanced Options

```javascript
import { capitalCase } from "text-capital-case";

// Custom word splitting
capitalCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "Xml Http Request"

// Custom character stripping
capitalCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "Hello World Com"

// Custom transformation function
capitalCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (word === "api") return "API";
    if (word === "v2") return "V2";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },
}); // "API V2 Endpoint"
```

## 🌍 Real-World Examples

### Business Titles and Names

```javascript
import { capitalCase } from "text-capital-case";

// Job titles
capitalCase("chief executive officer"); // "Chief Executive Officer"
capitalCase("senior software engineer"); // "Senior Software Engineer"
capitalCase("product manager"); // "Product Manager"
capitalCase("data scientist"); // "Data Scientist"
capitalCase("marketing director"); // "Marketing Director"
```

### Document Headings

```javascript
import { capitalCase } from "text-capital-case";

// Document sections
capitalCase("table of contents"); // "Table Of Contents"
capitalCase("executive summary"); // "Executive Summary"
capitalCase("financial overview"); // "Financial Overview"
capitalCase("risk assessment"); // "Risk Assessment"
capitalCase("implementation plan"); // "Implementation Plan"
```

### Product and Service Names

```javascript
import { capitalCase } from "text-capital-case";

// Product names
capitalCase("premium subscription"); // "Premium Subscription"
capitalCase("enterprise solution"); // "Enterprise Solution"
capitalCase("mobile application"); // "Mobile Application"
capitalCase("cloud storage"); // "Cloud Storage"
capitalCase("customer support"); // "Customer Support"
```

### Form Labels and UI Text

```javascript
import { capitalCase } from "text-capital-case";

// Form fields
capitalCase("billing information"); // "Billing Information"
capitalCase("shipping address"); // "Shipping Address"
capitalCase("payment method"); // "Payment Method"
capitalCase("contact details"); // "Contact Details"
capitalCase("account settings"); // "Account Settings"
```

### Content Categories

```javascript
import { capitalCase } from "text-capital-case";

// Transform content categories
const categories = [
  "web_development",
  "machine-learning",
  "data.analysis",
  "userExperience",
  "projectManagement",
];

const formattedCategories = categories.map(capitalCase);
console.log(formattedCategories);
// [
//   "Web Development",
//   "Machine Learning",
//   "Data Analysis",
//   "User Experience",
//   "Project Management"
// ]
```

## 📖 API Reference

### `capitalCase(input, options?)`

Converts a string to Capital Case.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The Capital Case formatted string

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
import { capitalCase } from "text-capital-case";

// Split on specific patterns
capitalCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "Xml Http Request"

// Split on numbers
capitalCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "User 123 Data"
```

### Custom Character Stripping

```javascript
import { capitalCase } from "text-capital-case";

// Strip specific characters
capitalCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "Hello World Com"

// Strip all non-alphanumeric
capitalCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "Hello World"
```

### Custom Transform Functions

```javascript
import { capitalCase } from "text-capital-case";

// Preserve acronyms
capitalCase("xml-http-request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url", "html", "css", "js"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },
}); // "XML HTTP Request"

// Custom business logic
capitalCase("user-v2-api", {
  transform: (word, index) => {
    if (word === "v2") return "V2";
    if (word === "api") return "API";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },
}); // "User V2 API"
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

- [`text-title-case`](../title-case) - Convert to Title Case
- [`text-sentence-case`](../sentence-case) - Convert to Sentence case
- [`text-pascal-case`](../pascal-case) - Convert to PascalCase
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

[npm-image]: https://img.shields.io/npm/v/text-capital-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-capital-case
[downloads-image]: https://img.shields.io/npm/dm/text-capital-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-capital-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-capital-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-capital-case
