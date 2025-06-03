# Is Upper Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Check if a string is in **UPPERCASE** format.

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
npm install text-is-upper-case

# yarn
yarn add text-is-upper-case

# pnpm
pnpm add text-is-upper-case

# bun
bun add text-is-upper-case
```

## 🎯 Quick Start

```javascript
import { isUpperCase } from "text-is-upper-case";

console.log(isUpperCase("HELLO WORLD")); // true
console.log(isUpperCase("Hello World")); // false
console.log(isUpperCase("hello world")); // false
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { isUpperCase } from "text-is-upper-case";

console.log(isUpperCase("HELLO")); // true
```

### CommonJS

```javascript
const { isUpperCase } = require("text-is-upper-case");

console.log(isUpperCase("HELLO")); // true
```

### TypeScript

```typescript
import { isUpperCase } from "text-is-upper-case";

const result: boolean = isUpperCase("HELLO WORLD");
console.log(result); // true
```

## 🔄 Validation Examples

### Basic Validation

```javascript
import { isUpperCase } from "text-is-upper-case";

// Valid uppercase
isUpperCase("HELLO"); // true
isUpperCase("HELLO WORLD"); // true
isUpperCase("TEST123"); // true
isUpperCase("USER_NAME"); // true
isUpperCase("API-KEY"); // true

// Invalid (not uppercase)
isUpperCase("Hello"); // false
isUpperCase("hello"); // false
isUpperCase("Hello World"); // false
isUpperCase("camelCase"); // false
isUpperCase("PascalCase"); // false
```

### Edge Cases

```javascript
import { isUpperCase } from "text-is-upper-case";

// Numbers and symbols
isUpperCase("123"); // true
isUpperCase("HELLO123"); // true
isUpperCase("TEST@EMAIL.COM"); // true
isUpperCase("USER_123"); // true

// Empty and whitespace
isUpperCase(""); // true
isUpperCase("   "); // true
isUpperCase("\n\t"); // true

// Special characters
isUpperCase("HELLO-WORLD"); // true
isUpperCase("TEST_CASE"); // true
isUpperCase("FILE.TXT"); // true
```

## 🌍 Real-World Examples

### Environment Variable Validation

```javascript
import { isUpperCase } from "text-is-upper-case";

function validateEnvVarName(name) {
  if (!isUpperCase(name)) {
    return "Environment variable names should be uppercase";
  }
  return null;
}

console.log(validateEnvVarName("DATABASE_URL")); // null (valid)
console.log(validateEnvVarName("databaseUrl")); // "Environment variable names should be uppercase"
```

### Constant Validation

```javascript
import { isUpperCase } from "text-is-upper-case";

function validateConstantName(name) {
  if (!isUpperCase(name)) {
    return "Constants should be uppercase";
  }
  return null;
}

console.log(validateConstantName("MAX_RETRIES")); // null
console.log(validateConstantName("maxRetries")); // "Constants should be uppercase"
```

### HTTP Header Validation

```javascript
import { isUpperCase } from "text-is-upper-case";

function validateHeaderMethod(method) {
  if (!isUpperCase(method)) {
    return "HTTP methods should be uppercase";
  }
  return null;
}

console.log(validateHeaderMethod("GET")); // null
console.log(validateHeaderMethod("get")); // "HTTP methods should be uppercase"
```

### Configuration Validation

```javascript
import { isUpperCase } from "text-is-upper-case";

function validateConfigConstants(config) {
  const invalidKeys = Object.keys(config).filter(
    (key) => key.startsWith("CONST_") && !isUpperCase(key),
  );

  if (invalidKeys.length > 0) {
    return `Invalid constant keys (must be uppercase): ${invalidKeys.join(", ")}`;
  }
  return null;
}

const config1 = { CONST_MAX_SIZE: 100, normalKey: "value" };
const config2 = { CONST_max_size: 100, normalKey: "value" };

console.log(validateConfigConstants(config1)); // null
console.log(validateConfigConstants(config2)); // "Invalid constant keys..."
```

## 📖 API Reference

### `isUpperCase(input)`

Checks if a string is in uppercase format.

#### Parameters

- **`input`** (`string`): The string to check

#### Returns

- **`boolean`**: `true` if the string is uppercase, `false` otherwise

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

- [`text-is-lower-case`](../is-lower-case) - Check if string is lowercase
- [`text-upper-case`](../upper-case) - Convert to uppercase
- [`text-lower-case`](../lower-case) - Convert to lowercase
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

[npm-image]: https://img.shields.io/npm/v/text-is-upper-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-is-upper-case
[downloads-image]: https://img.shields.io/npm/dm/text-is-upper-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-is-upper-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-is-upper-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-is-upper-case
