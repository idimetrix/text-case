# Path Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **path/case** format where words are lowercase and separated by forward slashes.

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
npm install text-path-case

# yarn
yarn add text-path-case

# pnpm
pnpm add text-path-case

# bun
bun add text-path-case
```

## 🎯 Quick Start

```javascript
import { pathCase } from "text-path-case";

console.log(pathCase("hello world")); // "hello/world"
console.log(pathCase("userProfileData")); // "user/profile/data"
console.log(pathCase("backgroundColor")); // "background/color"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { pathCase } from "text-path-case";

console.log(pathCase("hello world")); // "hello/world"
```

### CommonJS

```javascript
const { pathCase } = require("text-path-case");

console.log(pathCase("hello world")); // "hello/world"
```

### TypeScript

```typescript
import { pathCase, Options } from "text-path-case";

const result: string = pathCase("hello world");
console.log(result); // "hello/world"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { pathCase } from "text-path-case";

// From different cases
pathCase("hello world");         // "hello/world"
pathCase("Hello World");         // "hello/world"
pathCase("HELLO WORLD");         // "hello/world"
pathCase("camelCase");           // "camel/case"
pathCase("PascalCase");          // "pascal/case"
pathCase("snake_case");          // "snake/case"
pathCase("kebab-case");          // "kebab/case"
pathCase("dot.case");            // "dot/case"

// Complex examples
pathCase("XMLHttpRequest");      // "xml/http/request"
pathCase("iPhone");              // "i/phone"
pathCase("version 1.2.3");      // "version/1/2/3"
pathCase("userProfileData");     // "user/profile/data"
```

### Advanced Options

```javascript
import { pathCase } from "text-path-case";

// Custom word splitting
pathCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml/http/request"

// Custom character stripping
pathCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello/world/com"

// Custom transformation function
pathCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (word === "api") return "api";
    if (word === "v2") return "v2";
    return word.toLowerCase();
  },
}); // "api/v2/endpoint"
```

## 🌍 Real-World Examples

### File Paths

```javascript
import { pathCase } from "text-path-case";

// Generate file paths
pathCase("userComponents");      // "user/components"
pathCase("apiHelpers");          // "api/helpers"
pathCase("utilityFunctions");    // "utility/functions"
pathCase("testFixtures");        // "test/fixtures"
pathCase("configFiles");         // "config/files"
```

### URL Paths

```javascript
import { pathCase } from "text-path-case";

// URL path generation
pathCase("userProfile");         // "user/profile"
pathCase("adminDashboard");      // "admin/dashboard"
pathCase("productCatalog");      // "product/catalog"
pathCase("orderHistory");        // "order/history"
pathCase("accountSettings");     // "account/settings"
```

### Module Paths

```javascript
import { pathCase } from "text-path-case";

// Module import paths
pathCase("userManagement");      // "user/management"
pathCase("dataVisualization");   // "data/visualization"
pathCase("errorHandling");       // "error/handling"
pathCase("performanceMonitoring"); // "performance/monitoring"
pathCase("securityValidation");  // "security/validation"
```

### Directory Structure

```javascript
import { pathCase } from "text-path-case";

// Create directory structure
const modules = [
  "userAuthentication",
  "dataProcessing",
  "fileManagement",
  "apiIntegration",
  "errorLogging"
];

const directories = modules.map(pathCase);
console.log(directories);
// [
//   "user/authentication",
//   "data/processing",
//   "file/management",
//   "api/integration",
//   "error/logging"
// ]
```

### Route Generation

```javascript
import { pathCase } from "text-path-case";

function generateRoute(controllerAction) {
  return `/${pathCase(controllerAction)}`;
}

console.log(generateRoute("getUserProfile")); // "/get/user/profile"
console.log(generateRoute("createNewOrder")); // "/create/new/order"
console.log(generateRoute("updateUserData")); // "/update/user/data"
```

## 📖 API Reference

### `pathCase(input, options?)`

Converts a string to path/case.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The path/case formatted string

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
import { pathCase } from "text-path-case";

// Split on specific patterns
pathCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml/http/request"

// Split on numbers
pathCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "user/123/data"
```

### Custom Character Stripping

```javascript
import { pathCase } from "text-path-case";

// Strip specific characters
pathCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello/world/com"

// Strip all non-alphanumeric
pathCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "hello/world"
```

### Custom Transform Functions

```javascript
import { pathCase } from "text-path-case";

// Preserve specific formatting
pathCase("xml-http-request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toLowerCase();
    }
    return word.toLowerCase();
  },
}); // "xml/http/request"

// Custom business logic
pathCase("userV2API", {
  transform: (word, index) => {
    if (word === "V2") return "v2";
    if (word === "API") return "api";
    return word.toLowerCase();
  },
}); // "user/v2/api"
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
- [`text-snake-case`](../snake-case) - Convert to snake_case
- [`text-dot-case`](../dot-case) - Convert to dot.case
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

[npm-image]: https://img.shields.io/npm/v/text-path-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-path-case
[downloads-image]: https://img.shields.io/npm/dm/text-path-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-path-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-path-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-path-case
