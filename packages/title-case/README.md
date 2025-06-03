# Title Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **Title Case** format where the first letter of each word is capitalized and separated by spaces.

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
npm install text-title-case

# yarn
yarn add text-title-case

# pnpm
pnpm add text-title-case

# bun
bun add text-title-case
```

## 🎯 Quick Start

```javascript
import { titleCase } from "text-title-case";

console.log(titleCase("hello world")); // "Hello World"
console.log(titleCase("user_profile_data")); // "User Profile Data"
console.log(titleCase("backgroundColor")); // "Background Color"
```

## 📖 Usage

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

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { titleCase } from "text-title-case";

// From different cases
titleCase("hello world"); // "Hello World"
titleCase("Hello World"); // "Hello World"
titleCase("HELLO WORLD"); // "Hello World"
titleCase("camelCase"); // "Camel Case"
titleCase("PascalCase"); // "Pascal Case"
titleCase("snake_case"); // "Snake Case"
titleCase("kebab-case"); // "Kebab Case"
titleCase("dot.case"); // "Dot Case"

// Complex examples
titleCase("XMLHttpRequest"); // "Xml Http Request"
titleCase("iPhone"); // "I Phone"
titleCase("version 1.2.3"); // "Version 1 2 3"
titleCase("userProfileData"); // "User Profile Data"
```

### Advanced Options

```javascript
import { titleCase } from "text-title-case";

// Custom word splitting
titleCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "Xml Http Request"

// Custom character stripping
titleCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "Hello World Com"

// Custom transformation function
titleCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (word === "api") return "API";
    if (word === "v2") return "V2";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },
}); // "API V2 Endpoint"
```

## 🌍 Real-World Examples

### Headers and Titles

```javascript
import { titleCase } from "text-title-case";

// Page titles
titleCase("user profile settings"); // "User Profile Settings"
titleCase("account management"); // "Account Management"
titleCase("privacy policy"); // "Privacy Policy"
titleCase("terms of service"); // "Terms Of Service"
titleCase("getting started guide"); // "Getting Started Guide"
```

### Navigation and Menu Items

```javascript
import { titleCase } from "text-title-case";

// Menu items
titleCase("home page"); // "Home Page"
titleCase("about us"); // "About Us"
titleCase("contact information"); // "Contact Information"
titleCase("product catalog"); // "Product Catalog"
titleCase("customer support"); // "Customer Support"
```

### Form Labels

```javascript
import { titleCase } from "text-title-case";

// Form fields
titleCase("first name"); // "First Name"
titleCase("email address"); // "Email Address"
titleCase("phone number"); // "Phone Number"
titleCase("date of birth"); // "Date Of Birth"
titleCase("billing address"); // "Billing Address"
```

### Business and Technical Terms

```javascript
import { titleCase } from "text-title-case";

// Business terms
titleCase("project management"); // "Project Management"
titleCase("quality assurance"); // "Quality Assurance"
titleCase("human resources"); // "Human Resources"
titleCase("customer relationship"); // "Customer Relationship"

// Technical documentation
titleCase("api reference"); // "Api Reference"
titleCase("installation guide"); // "Installation Guide"
titleCase("troubleshooting tips"); // "Troubleshooting Tips"
```

### Content Management

```javascript
import { titleCase } from "text-title-case";

// Transform content titles
const blogPosts = [
  "getting_started_with_react",
  "advanced-javascript-patterns",
  "building_scalable_apis",
];

const formattedTitles = blogPosts.map(titleCase);
console.log(formattedTitles);
// [
//   "Getting Started With React",
//   "Advanced Javascript Patterns",
//   "Building Scalable Apis"
// ]

// Article categories
titleCase("web development"); // "Web Development"
titleCase("machine learning"); // "Machine Learning"
titleCase("data science"); // "Data Science"
```

## 📖 API Reference

### `titleCase(input, options?)`

Converts a string to Title Case.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The Title Case formatted string

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
import { titleCase } from "text-title-case";

// Split on specific patterns
titleCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "Xml Http Request"

// Split on numbers
titleCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "User 123 Data"
```

### Custom Character Stripping

```javascript
import { titleCase } from "text-title-case";

// Strip specific characters
titleCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "Hello World Com"

// Strip all non-alphanumeric
titleCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "Hello World"
```

### Custom Transform Functions

```javascript
import { titleCase } from "text-title-case";

// Preserve acronyms
titleCase("xml-http-request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url", "html", "css", "js"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },
}); // "XML HTTP Request"

// Custom business logic
titleCase("user-v2-api", {
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

- [`text-camel-case`](../camel-case) - Convert to camelCase
- [`text-pascal-case`](../pascal-case) - Convert to PascalCase
- [`text-snake-case`](../snake-case) - Convert to snake_case
- [`text-kebab-case`](../kebab-case) - Convert to kebab-case
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

[npm-image]: https://img.shields.io/npm/v/text-title-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-title-case
[downloads-image]: https://img.shields.io/npm/dm/text-title-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-title-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-title-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-title-case
