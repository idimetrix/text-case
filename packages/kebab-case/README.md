# Kebab Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **kebab-case** format where words are lowercase and separated by hyphens.

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
npm install text-kebab-case

# yarn
yarn add text-kebab-case

# pnpm
pnpm add text-kebab-case

# bun
bun add text-kebab-case
```

## 🎯 Quick Start

```javascript
import { kebabCase } from "text-kebab-case";

console.log(kebabCase("hello world")); // "hello-world"
console.log(kebabCase("userProfileData")); // "user-profile-data"
console.log(kebabCase("backgroundColor")); // "background-color"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { kebabCase } from "text-kebab-case";

console.log(kebabCase("hello world")); // "hello-world"
```

### CommonJS

```javascript
const { kebabCase } = require("text-kebab-case");

console.log(kebabCase("hello world")); // "hello-world"
```

### TypeScript

```typescript
import { kebabCase, kebabCaseTransformMerge, Options } from "text-kebab-case";

const result: string = kebabCase("hello world");
console.log(result); // "hello-world"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { kebabCase } from "text-kebab-case";

// From different cases
kebabCase("hello world"); // "hello-world"
kebabCase("Hello World"); // "hello-world"
kebabCase("HELLO WORLD"); // "hello-world"
kebabCase("camelCase"); // "camel-case"
kebabCase("PascalCase"); // "pascal-case"
kebabCase("snake_case"); // "snake-case"
kebabCase("dot.case"); // "dot-case"
kebabCase("CONSTANT_CASE"); // "constant-case"

// Complex examples
kebabCase("XMLHttpRequest"); // "xml-http-request"
kebabCase("iPhone"); // "i-phone"
kebabCase("version 1.2.3"); // "version-1-2-3"
kebabCase("userProfileData"); // "user-profile-data"
```

### Advanced Options

```javascript
import { kebabCase, kebabCaseTransformMerge } from "text-kebab-case";

// Custom transform to merge numbers without separator
kebabCase("version 1.2.3", {
  transform: kebabCaseTransformMerge,
}); // "version-123"

// Custom word splitting
kebabCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml-http-request"

// Custom character stripping
kebabCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello-world-com"

// Custom transformation function
kebabCase("API-v2-endpoint", {
  transform: (word, index) => {
    if (word === "API") return "api";
    if (word === "v2") return "v2";
    return word.toLowerCase();
  },
}); // "api-v2-endpoint"
```

## 🌍 Real-World Examples

### CSS Class Names

```javascript
import { kebabCase } from "text-kebab-case";

// Component classes
kebabCase("primaryButton"); // "primary-button"
kebabCase("navigationBar"); // "navigation-bar"
kebabCase("formInput"); // "form-input"
kebabCase("modalDialog"); // "modal-dialog"
kebabCase("loadingSpinner"); // "loading-spinner"
```

### HTML Attributes

```javascript
import { kebabCase } from "text-kebab-case";

// Data attributes
kebabCase("dataToggle"); // "data-toggle"
kebabCase("ariaLabel"); // "aria-label"
kebabCase("tabIndex"); // "tab-index"
kebabCase("customAttribute"); // "custom-attribute"
kebabCase("roleButton"); // "role-button"
```

### URL Slugs

```javascript
import { kebabCase } from "text-kebab-case";

// Blog post slugs
kebabCase("My Blog Post Title"); // "my-blog-post-title"
kebabCase("Product Category"); // "product-category"
kebabCase("Special Characters!"); // "special-characters"
kebabCase("How to Use APIs"); // "how-to-use-apis"
```

### File Names

```javascript
import { kebabCase } from "text-kebab-case";

// Component files
kebabCase("userProfile.component"); // "user-profile-component"
kebabCase("apiService"); // "api-service"
kebabCase("configUtils"); // "config-utils"
kebabCase("authMiddleware"); // "auth-middleware"
```

### Object Key Transformation

```javascript
import { kebabCase } from "text-kebab-case";

// Transform object keys for CSS-in-JS
const styles = {
  backgroundColor: "#fff",
  fontSize: "16px",
  marginTop: "10px",
  borderRadius: "4px",
};

const cssStyles = Object.fromEntries(
  Object.entries(styles).map(([key, value]) => [kebabCase(key), value]),
);

console.log(cssStyles);
// {
//   "background-color": "#fff",
//   "font-size": "16px",
//   "margin-top": "10px",
//   "border-radius": "4px"
// }
```

## 📖 API Reference

### `kebabCase(input, options?)`

Converts a string to kebab-case.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The kebab-case formatted string

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

### `kebabCaseTransformMerge`

A transform function that merges numeric characters without separation.

```javascript
import { kebabCase, kebabCaseTransformMerge } from "text-kebab-case";

kebabCase("version 1.2.3", { transform: kebabCaseTransformMerge }); // "version-123"
```

## 🔧 Advanced Configuration

### Custom Word Splitting

```javascript
import { kebabCase } from "text-kebab-case";

// Split on specific patterns
kebabCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml-http-request"

// Split on numbers
kebabCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "user-123-data"
```

### Custom Character Stripping

```javascript
import { kebabCase } from "text-kebab-case";

// Strip specific characters
kebabCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello-world-com"

// Strip all non-alphanumeric
kebabCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "hello-world"
```

### Custom Transform Functions

```javascript
import { kebabCase } from "text-kebab-case";

// Preserve specific formatting
kebabCase("XML-HTTP-Request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toLowerCase();
    }
    return word.toLowerCase();
  },
}); // "xml-http-request"

// Custom business logic
kebabCase("UserV2API", {
  transform: (word, index) => {
    if (word === "V2") return "v2";
    if (word === "API") return "api";
    return word.toLowerCase();
  },
}); // "user-v2-api"
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

- [`text-camel-case`](https://www.npmjs.com/package/text-camel-case) - Convert to camelCase
- [`text-pascal-case`](https://www.npmjs.com/package/text-pascal-case) - Convert to PascalCase
- [`text-snake-case`](https://www.npmjs.com/package/text-snake-case) - Convert to snake_case
- [`text-title-case`](https://www.npmjs.com/package/text-title-case) - Convert to Title Case
- [`text-case`](https://www.npmjs.com/package/text-case) - All case transformations in one package

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

[npm-image]: https://img.shields.io/npm/v/text-kebab-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-kebab-case
[downloads-image]: https://img.shields.io/npm/dm/text-kebab-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-kebab-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-kebab-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-kebab-case
