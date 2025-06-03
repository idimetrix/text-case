# Dot Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **dot.case** format where words are lowercase and separated by dots.

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
npm install text-dot-case

# yarn
yarn add text-dot-case

# pnpm
pnpm add text-dot-case

# bun
bun add text-dot-case
```

## 🎯 Quick Start

```javascript
import { dotCase } from "text-dot-case";

console.log(dotCase("hello world")); // "hello.world"
console.log(dotCase("userProfileData")); // "user.profile.data"
console.log(dotCase("backgroundColor")); // "background.color"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { dotCase } from "text-dot-case";

console.log(dotCase("Hello World")); // "hello.world"
```

### CommonJS

```javascript
const { dotCase } = require("text-dot-case");

console.log(dotCase("Hello World")); // "hello.world"
```

### TypeScript

```typescript
import { dotCase, Options } from "text-dot-case";

const result: string = dotCase("Hello World");
console.log(result); // "hello.world"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { dotCase } from "text-dot-case";

// From different cases
dotCase("Hello World"); // "hello.world"
dotCase("helloWorld"); // "hello.world"
dotCase("HelloWorld"); // "hello.world"
dotCase("hello_world"); // "hello.world"
dotCase("hello-world"); // "hello.world"
dotCase("HELLO_WORLD"); // "hello.world"
dotCase("CONSTANT_CASE"); // "constant.case"

// Complex examples
dotCase("XMLParser"); // "xml.parser"
dotCase("iPhone6Plus"); // "i.phone6.plus"
dotCase("HTML5Canvas"); // "html5.canvas"
dotCase("getUserID"); // "get.user.id"
```

### Advanced Options

```javascript
import { dotCase } from "text-dot-case";

// Custom word splitting
dotCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml.http.request"

// Custom character stripping
dotCase("hello@world.com", {
  stripRegexp: /[@]/g,
}); // "hello.world.com"

// Custom transformation function
dotCase("API-v2-endpoint", {
  transform: (word, index) => {
    if (word === "API") return "api";
    if (word === "v2") return "v2";
    return word.toLowerCase();
  },
}); // "api.v2.endpoint"
```

## 🌍 Real-World Examples

### Object Property Names

```javascript
import { dotCase } from "text-dot-case";

// API response normalization
const apiResponse = {
  "First Name": "John",
  Last_Name: "Doe",
  emailAddress: "john@example.com",
  phoneNumber: "+1234567890",
};

const normalized = Object.keys(apiResponse).reduce((acc, key) => {
  acc[dotCase(key)] = apiResponse[key];
  return acc;
}, {});

console.log(normalized);
// {
//   "first.name": "John",
//   "last.name": "Doe",
//   "email.address": "john@example.com",
//   "phone.number": "+1234567890"
// }
```

### Configuration Keys

```javascript
import { dotCase } from "text-dot-case";

// Environment variables to config
dotCase("DATABASE_HOST"); // "database.host"
dotCase("apiSecretKey"); // "api.secret.key"
dotCase("maxRetryAttempts"); // "max.retry.attempts"
dotCase("REDIS_CONNECTION"); // "redis.connection"
dotCase("jwtTokenExpiry"); // "jwt.token.expiry"
```

### File and Module Names

```javascript
import { dotCase } from "text-dot-case";

// Component naming
dotCase("UserProfile"); // "user.profile"
dotCase("ShoppingCart"); // "shopping.cart"
dotCase("PaymentGateway"); // "payment.gateway"
dotCase("AuthMiddleware"); // "auth.middleware"
dotCase("EmailValidator"); // "email.validator"
```

### Method and Function Names

```javascript
import { dotCase } from "text-dot-case";

// Class methods to dot notation
dotCase("getUserById"); // "get.user.by.id"
dotCase("calculateTotalPrice"); // "calculate.total.price"
dotCase("validateEmailAddress"); // "validate.email.address"
dotCase("processPaymentData"); // "process.payment.data"
dotCase("generateAccessToken"); // "generate.access.token"
```

### Database and Schema Mapping

```javascript
import { dotCase } from "text-dot-case";

// Transform form data for nested objects
function normalizeFormData(formData) {
  const normalized = {};

  for (const [key, value] of Object.entries(formData)) {
    normalized[dotCase(key)] = value;
  }

  return normalized;
}

const form = {
  firstName: "John",
  lastName: "Doe",
  emailAddress: "john@example.com",
  billingAddress: "123 Main St",
  shippingAddress: "456 Oak Ave",
};

console.log(normalizeFormData(form));
// {
//   "first.name": "John",
//   "last.name": "Doe",
//   "email.address": "john@example.com",
//   "billing.address": "123 Main St",
//   "shipping.address": "456 Oak Ave"
// }
```

### Constants and Enums

```javascript
import { dotCase } from "text-dot-case";

// Transform constants
dotCase("MAX_FILE_SIZE"); // "max.file.size"
dotCase("DEFAULT_TIMEOUT"); // "default.timeout"
dotCase("ERROR_MESSAGES"); // "error.messages"
dotCase("HTTP_STATUS_CODES"); // "http.status.codes"
dotCase("VALIDATION_RULES"); // "validation.rules"
```

## 📖 API Reference

### `dotCase(input, options?)`

Converts a string to dot.case.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The dot.case formatted string

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
import { dotCase } from "text-dot-case";

// Split on specific patterns
dotCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml.http.request"

// Split on numbers
dotCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "user.123.data"
```

### Custom Character Stripping

```javascript
import { dotCase } from "text-dot-case";

// Strip specific characters
dotCase("hello@world.com", {
  stripRegexp: /[@]/g,
}); // "hello.world.com"

// Strip all non-alphanumeric except dots
dotCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9.]/g,
}); // "hello.world"
```

### Custom Transform Functions

```javascript
import { dotCase } from "text-dot-case";

// Preserve specific formatting
dotCase("XML-HTTP-Request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toLowerCase();
    }
    return word.toLowerCase();
  },
}); // "xml.http.request"

// Custom business logic
dotCase("UserV2API", {
  transform: (word, index) => {
    if (word === "V2") return "v2";
    if (word === "API") return "api";
    return word.toLowerCase();
  },
}); // "user.v2.api"
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

[npm-image]: https://img.shields.io/npm/v/text-dot-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-dot-case
[downloads-image]: https://img.shields.io/npm/dm/text-dot-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-dot-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-dot-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-dot-case
