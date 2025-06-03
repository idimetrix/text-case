# Header Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **Header-Case** format where words are capitalized and separated by hyphens.

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
npm install text-header-case

# yarn
yarn add text-header-case

# pnpm
pnpm add text-header-case

# bun
bun add text-header-case
```

## 🎯 Quick Start

```javascript
import { headerCase } from "text-header-case";

console.log(headerCase("hello world")); // "Hello-World"
console.log(headerCase("user_profile_data")); // "User-Profile-Data"
console.log(headerCase("backgroundColor")); // "Background-Color"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { headerCase } from "text-header-case";

console.log(headerCase("hello world")); // "Hello-World"
```

### CommonJS

```javascript
const { headerCase } = require("text-header-case");

console.log(headerCase("hello world")); // "Hello-World"
```

### TypeScript

```typescript
import { headerCase, Options } from "text-header-case";

const result: string = headerCase("hello world");
console.log(result); // "Hello-World"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { headerCase } from "text-header-case";

// From different cases
headerCase("hello world"); // "Hello-World"
headerCase("Hello World"); // "Hello-World"
headerCase("HELLO WORLD"); // "Hello-World"
headerCase("camelCase"); // "Camel-Case"
headerCase("PascalCase"); // "Pascal-Case"
headerCase("snake_case"); // "Snake-Case"
headerCase("kebab-case"); // "Kebab-Case"
headerCase("dot.case"); // "Dot-Case"

// Complex examples
headerCase("XMLHttpRequest"); // "Xml-Http-Request"
headerCase("iPhone"); // "I-Phone"
headerCase("version 1.2.3"); // "Version-1-2-3"
headerCase("userProfileData"); // "User-Profile-Data"
```

### Advanced Options

```javascript
import { headerCase } from "text-header-case";

// Custom word splitting
headerCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "Xml-Http-Request"

// Custom character stripping
headerCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "Hello-World-Com"

// Custom transformation function
headerCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (word === "api") return "API";
    if (word === "v2") return "V2";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },
}); // "API-V2-Endpoint"
```

## 🌍 Real-World Examples

### HTTP Headers

```javascript
import { headerCase } from "text-header-case";

// HTTP header names
headerCase("contentType"); // "Content-Type"
headerCase("userAgent"); // "User-Agent"
headerCase("acceptLanguage"); // "Accept-Language"
headerCase("cacheControl"); // "Cache-Control"
headerCase("lastModified"); // "Last-Modified"
```

### Train Case Naming

```javascript
import { headerCase } from "text-header-case";

// Train case (alternative name for header case)
headerCase("trainCaseExample"); // "Train-Case-Example"
headerCase("thisIsTrainCase"); // "This-Is-Train-Case"
headerCase("anotherExample"); // "Another-Example"
headerCase("finalExample"); // "Final-Example"
```

### API Endpoint Names

```javascript
import { headerCase } from "text-header-case";

// RESTful endpoints
headerCase("getUserProfile"); // "Get-User-Profile"
headerCase("createNewOrder"); // "Create-New-Order"
headerCase("updateUserData"); // "Update-User-Data"
headerCase("deleteAccount"); // "Delete-Account"
headerCase("resetPassword"); // "Reset-Password"
```

### File and Directory Names

```javascript
import { headerCase } from "text-header-case";

// File naming
headerCase("userManual"); // "User-Manual"
headerCase("installationGuide"); // "Installation-Guide"
headerCase("apiDocumentation"); // "Api-Documentation"
headerCase("troubleshooting"); // "Troubleshooting"
headerCase("releaseNotes"); // "Release-Notes"
```

### Configuration Keys

```javascript
import { headerCase } from "text-header-case";

// Transform configuration for headers
const config = {
  contentType: "application/json",
  userAgent: "MyApp/1.0",
  acceptLanguage: "en-US,en;q=0.9",
  cacheControl: "no-cache",
  authorization: "Bearer token123",
};

const headerConfig = Object.fromEntries(
  Object.entries(config).map(([key, value]) => [headerCase(key), value]),
);

console.log(headerConfig);
// {
//   "Content-Type": "application/json",
//   "User-Agent": "MyApp/1.0",
//   "Accept-Language": "en-US,en;q=0.9",
//   "Cache-Control": "no-cache",
//   "Authorization": "Bearer token123"
// }
```

## 📖 API Reference

### `headerCase(input, options?)`

Converts a string to Header-Case.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The Header-Case formatted string

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
import { headerCase } from "text-header-case";

// Split on specific patterns
headerCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "Xml-Http-Request"

// Split on numbers
headerCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "User-123-Data"
```

### Custom Character Stripping

```javascript
import { headerCase } from "text-header-case";

// Strip specific characters
headerCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "Hello-World-Com"

// Strip all non-alphanumeric
headerCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "Hello-World"
```

### Custom Transform Functions

```javascript
import { headerCase } from "text-header-case";

// Preserve acronyms
headerCase("xml-http-request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url", "html", "css", "js"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },
}); // "XML-HTTP-Request"

// Custom business logic
headerCase("user-v2-api", {
  transform: (word, index) => {
    if (word === "v2") return "V2";
    if (word === "api") return "API";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },
}); // "User-V2-API"
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

- [`text-kebab-case`](../kebab-case) - Convert to kebab-case
- [`text-title-case`](../title-case) - Convert to Title Case
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

[npm-image]: https://img.shields.io/npm/v/text-header-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-header-case
[downloads-image]: https://img.shields.io/npm/dm/text-header-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-header-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-header-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-header-case
