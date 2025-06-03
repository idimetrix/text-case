# Camel Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **camelCase** format where the first letter is lowercase and subsequent words have their first letter capitalized with no separators.

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
npm install text-camel-case

# yarn
yarn add text-camel-case

# pnpm
pnpm add text-camel-case

# bun
bun add text-camel-case
```

## 🎯 Quick Start

```javascript
import { camelCase } from "text-camel-case";

console.log(camelCase("hello world")); // "helloWorld"
console.log(camelCase("user_profile_data")); // "userProfileData"
console.log(camelCase("background-color")); // "backgroundColor"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { camelCase } from "text-camel-case";

console.log(camelCase("hello world")); // "helloWorld"
```

### CommonJS

```javascript
const { camelCase } = require("text-camel-case");

console.log(camelCase("hello world")); // "helloWorld"
```

### TypeScript

```typescript
import { camelCase, camelCaseTransformMerge, Options } from "text-camel-case";

const result: string = camelCase("hello world");
console.log(result); // "helloWorld"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { camelCase } from "text-camel-case";

// From different cases
camelCase("hello world"); // "helloWorld"
camelCase("Hello World"); // "helloWorld"
camelCase("HELLO WORLD"); // "helloWorld"
camelCase("snake_case"); // "snakeCase"
camelCase("kebab-case"); // "kebabCase"
camelCase("dot.case"); // "dotCase"
camelCase("PascalCase"); // "pascalCase"
camelCase("CONSTANT_CASE"); // "constantCase"

// Complex examples
camelCase("XMLHttpRequest"); // "xmlHttpRequest"
camelCase("iPhone"); // "iPhone"
camelCase("version 1.2.3"); // "version123"
camelCase("user-profile-data"); // "userProfileData"
```

### Advanced Options

```javascript
import { camelCase, camelCaseTransformMerge } from "text-camel-case";

// Custom transform to merge numbers without separator
camelCase("version 1.2.3", {
  transform: camelCaseTransformMerge,
}); // "version123"

// Custom word splitting
camelCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xmlHttpRequest"

// Custom character stripping
camelCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "helloWorldCom"

// Custom transformation function
camelCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (word === "api") return "API";
    if (word === "v2") return "V2";
    return word;
  },
}); // "APIV2Endpoint"
```

## 🌍 Real-World Examples

### JavaScript Variables

```javascript
import { camelCase } from "text-camel-case";

// API field names
camelCase("first_name"); // "firstName"
camelCase("email_address"); // "emailAddress"
camelCase("created_at"); // "createdAt"
camelCase("user_id"); // "userId"
camelCase("access_token"); // "accessToken"
```

### CSS Properties to JavaScript

```javascript
import { camelCase } from "text-camel-case";

// CSS properties
camelCase("background-color"); // "backgroundColor"
camelCase("font-family"); // "fontFamily"
camelCase("border-radius"); // "borderRadius"
camelCase("margin-top"); // "marginTop"
camelCase("z-index"); // "zIndex"
```

### Database Columns to Object Properties

```javascript
import { camelCase } from "text-camel-case";

// Database columns
camelCase("user_profile"); // "userProfile"
camelCase("last_login_date"); // "lastLoginDate"
camelCase("is_active"); // "isActive"
camelCase("created_by_user_id"); // "createdByUserId"
```

### Object Key Transformation

```javascript
import { camelCase } from "text-camel-case";

// Transform object keys from snake_case to camelCase
const dbUser = {
  first_name: "John",
  last_name: "Doe",
  email_address: "john@example.com",
  created_at: "2023-01-01",
};

const jsUser = Object.fromEntries(
  Object.entries(dbUser).map(([key, value]) => [camelCase(key), value]),
);

console.log(jsUser);
// {
//   firstName: "John",
//   lastName: "Doe",
//   emailAddress: "john@example.com",
//   createdAt: "2023-01-01"
// }
```

## 📖 API Reference

### `camelCase(input, options?)`

Converts a string to camelCase.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The camelCase formatted string

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

### `camelCaseTransformMerge`

A transform function that merges numeric characters without separation.

```javascript
import { camelCase, camelCaseTransformMerge } from "text-camel-case";

camelCase("version 1.2.3", { transform: camelCaseTransformMerge }); // "version123"
```

## 🔧 Advanced Configuration

### Custom Word Splitting

```javascript
import { camelCase } from "text-camel-case";

// Split on specific patterns
camelCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xmlHttpRequest"

// Split on numbers
camelCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "user123Data"
```

### Custom Character Stripping

```javascript
import { camelCase } from "text-camel-case";

// Strip specific characters
camelCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "helloWorldCom"

// Strip all non-alphanumeric
camelCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "helloWorld"
```

### Custom Transform Functions

```javascript
import { camelCase } from "text-camel-case";

// Preserve acronyms
camelCase("xml-http-request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toUpperCase();
    }
    return word;
  },
}); // "XMLHTTPRequest"

// Custom business logic
camelCase("user-v2-api", {
  transform: (word, index) => {
    if (word === "v2") return "V2";
    if (word === "api") return "API";
    return word;
  },
}); // "userV2API"
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

- [`text-pascal-case`](../pascal-case) - Convert to PascalCase
- [`text-snake-case`](../snake-case) - Convert to snake_case
- [`text-kebab-case`](../kebab-case) - Convert to kebab-case
- [`text-title-case`](../title-case) - Convert to Title Case
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

[npm-image]: https://img.shields.io/npm/v/text-camel-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-camel-case
[downloads-image]: https://img.shields.io/npm/dm/text-camel-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-camel-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-camel-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-camel-case
