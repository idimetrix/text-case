# Snake Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **snake_case** format where words are lowercase and separated by underscores.

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
npm install text-snake-case

# yarn
yarn add text-snake-case

# pnpm
pnpm add text-snake-case

# bun
bun add text-snake-case
```

## 🎯 Quick Start

```javascript
import { snakeCase } from "text-snake-case";

console.log(snakeCase("hello world")); // "hello_world"
console.log(snakeCase("userProfileData")); // "user_profile_data"
console.log(snakeCase("backgroundColor")); // "background_color"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { snakeCase } from "text-snake-case";

console.log(snakeCase("hello world")); // "hello_world"
```

### CommonJS

```javascript
const { snakeCase } = require("text-snake-case");

console.log(snakeCase("hello world")); // "hello_world"
```

### TypeScript

```typescript
import { snakeCase, snakeCaseTransformMerge, Options } from "text-snake-case";

const result: string = snakeCase("hello world");
console.log(result); // "hello_world"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { snakeCase } from "text-snake-case";

// From different cases
snakeCase("hello world"); // "hello_world"
snakeCase("Hello World"); // "hello_world"
snakeCase("HELLO WORLD"); // "hello_world"
snakeCase("camelCase"); // "camel_case"
snakeCase("PascalCase"); // "pascal_case"
snakeCase("kebab-case"); // "kebab_case"
snakeCase("dot.case"); // "dot_case"
snakeCase("CONSTANT_CASE"); // "constant_case"

// Complex examples
snakeCase("XMLHttpRequest"); // "xml_http_request"
snakeCase("iPhone"); // "i_phone"
snakeCase("version 1.2.3"); // "version_1_2_3"
snakeCase("userProfileData"); // "user_profile_data"
```

### Advanced Options

```javascript
import { snakeCase, snakeCaseTransformMerge } from "text-snake-case";

// Custom transform to merge numbers without separator
snakeCase("version 1.2.3", {
  transform: snakeCaseTransformMerge,
}); // "version_123"

// Custom word splitting
snakeCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml_http_request"

// Custom character stripping
snakeCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello_world_com"

// Custom transformation function
snakeCase("API-v2-endpoint", {
  transform: (word, index) => {
    if (word === "API") return "api";
    if (word === "v2") return "v2";
    return word.toLowerCase();
  },
}); // "api_v2_endpoint"
```

## 🌍 Real-World Examples

### Database Column Names

```javascript
import { snakeCase } from "text-snake-case";

// Table columns
snakeCase("firstName"); // "first_name"
snakeCase("emailAddress"); // "email_address"
snakeCase("createdAt"); // "created_at"
snakeCase("userId"); // "user_id"
snakeCase("accessToken"); // "access_token"
```

### API Field Names

```javascript
import { snakeCase } from "text-snake-case";

// REST API fields
snakeCase("userProfile"); // "user_profile"
snakeCase("lastLoginDate"); // "last_login_date"
snakeCase("isActive"); // "is_active"
snakeCase("paymentMethod"); // "payment_method"
snakeCase("shippingAddress"); // "shipping_address"
```

### Environment Variables

```javascript
import { snakeCase } from "text-snake-case";

// Environment variable names
snakeCase("databaseUrl"); // "database_url"
snakeCase("apiKey"); // "api_key"
snakeCase("maxRetries"); // "max_retries"
snakeCase("timeoutMs"); // "timeout_ms"
snakeCase("debugMode"); // "debug_mode"
```

### Object Key Transformation

```javascript
import { snakeCase } from "text-snake-case";

// Transform object keys from camelCase to snake_case
const jsUser = {
  firstName: "John",
  lastName: "Doe",
  emailAddress: "john@example.com",
  createdAt: "2023-01-01",
};

const dbUser = Object.fromEntries(
  Object.entries(jsUser).map(([key, value]) => [snakeCase(key), value]),
);

console.log(dbUser);
// {
//   first_name: "John",
//   last_name: "Doe",
//   email_address: "john@example.com",
//   created_at: "2023-01-01"
// }
```

## 📖 API Reference

### `snakeCase(input, options?)`

Converts a string to snake_case.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The snake_case formatted string

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

### `snakeCaseTransformMerge`

A transform function that merges numeric characters without separation.

```javascript
import { snakeCase, snakeCaseTransformMerge } from "text-snake-case";

snakeCase("version 1.2.3", { transform: snakeCaseTransformMerge }); // "version_123"
```

## 🔧 Advanced Configuration

### Custom Word Splitting

```javascript
import { snakeCase } from "text-snake-case";

// Split on specific patterns
snakeCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml_http_request"

// Split on numbers
snakeCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "user_123_data"
```

### Custom Character Stripping

```javascript
import { snakeCase } from "text-snake-case";

// Strip specific characters
snakeCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello_world_com"

// Strip all non-alphanumeric
snakeCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "hello_world"
```

### Custom Transform Functions

```javascript
import { snakeCase } from "text-snake-case";

// Preserve specific formatting
snakeCase("XML-HTTP-Request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toLowerCase();
    }
    return word.toLowerCase();
  },
}); // "xml_http_request"

// Custom business logic
snakeCase("UserV2API", {
  transform: (word, index) => {
    if (word === "V2") return "v2";
    if (word === "API") return "api";
    return word.toLowerCase();
  },
}); // "user_v2_api"
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

[npm-image]: https://img.shields.io/npm/v/text-snake-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-snake-case
[downloads-image]: https://img.shields.io/npm/dm/text-snake-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-snake-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-snake-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-snake-case
