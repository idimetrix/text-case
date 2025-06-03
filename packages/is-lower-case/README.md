# Is Lower Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Check if a string is in **lowercase** format.

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
npm install text-is-lower-case

# yarn
yarn add text-is-lower-case

# pnpm
pnpm add text-is-lower-case

# bun
bun add text-is-lower-case
```

## 🎯 Quick Start

```javascript
import { isLowerCase } from "text-is-lower-case";

console.log(isLowerCase("hello world")); // true
console.log(isLowerCase("Hello World")); // false
console.log(isLowerCase("HELLO WORLD")); // false
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { isLowerCase } from "text-is-lower-case";

console.log(isLowerCase("hello")); // true
```

### CommonJS

```javascript
const { isLowerCase } = require("text-is-lower-case");

console.log(isLowerCase("hello")); // true
```

### TypeScript

```typescript
import { isLowerCase } from "text-is-lower-case";

const result: boolean = isLowerCase("hello world");
console.log(result); // true
```

## 🔄 Validation Examples

### Basic Validation

```javascript
import { isLowerCase } from "text-is-lower-case";

// Valid lowercase
isLowerCase("hello"); // true
isLowerCase("hello world"); // true
isLowerCase("test123"); // true
isLowerCase("user_name"); // true
isLowerCase("api-key"); // true

// Invalid (not lowercase)
isLowerCase("Hello"); // false
isLowerCase("HELLO"); // false
isLowerCase("Hello World"); // false
isLowerCase("camelCase"); // false
isLowerCase("PascalCase"); // false
```

### Edge Cases

```javascript
import { isLowerCase } from "text-is-lower-case";

// Numbers and symbols
isLowerCase("123"); // true
isLowerCase("hello123"); // true
isLowerCase("test@email.com"); // true
isLowerCase("user_123"); // true

// Empty and whitespace
isLowerCase(""); // true
isLowerCase("   "); // true
isLowerCase("\n\t"); // true

// Special characters
isLowerCase("hello-world"); // true
isLowerCase("test_case"); // true
isLowerCase("file.txt"); // true
```

## 🌍 Real-World Examples

### Form Validation

```javascript
import { isLowerCase } from "text-is-lower-case";

function validateUsername(username) {
  if (!isLowerCase(username)) {
    return "Username must be lowercase";
  }
  return null;
}

console.log(validateUsername("john_doe")); // null (valid)
console.log(validateUsername("John_Doe")); // "Username must be lowercase"
```

### Email Validation

```javascript
import { isLowerCase } from "text-is-lower-case";

function validateEmailFormat(email) {
  const [localPart] = email.split("@");

  if (!isLowerCase(localPart)) {
    return "Email local part should be lowercase";
  }
  return null;
}

console.log(validateEmailFormat("user@example.com")); // null
console.log(validateEmailFormat("User@example.com")); // "Email local part should be lowercase"
```

### URL Slug Validation

```javascript
import { isLowerCase } from "text-is-lower-case";

function validateSlug(slug) {
  if (!isLowerCase(slug)) {
    return "URL slug must be lowercase";
  }
  return null;
}

console.log(validateSlug("my-blog-post")); // null
console.log(validateSlug("My-Blog-Post")); // "URL slug must be lowercase"
```

### Configuration Validation

```javascript
import { isLowerCase } from "text-is-lower-case";

function validateConfigKeys(config) {
  const invalidKeys = Object.keys(config).filter((key) => !isLowerCase(key));

  if (invalidKeys.length > 0) {
    return `Invalid config keys (must be lowercase): ${invalidKeys.join(", ")}`;
  }
  return null;
}

const config1 = { database_url: "...", api_key: "..." };
const config2 = { databaseUrl: "...", apiKey: "..." };

console.log(validateConfigKeys(config1)); // null
console.log(validateConfigKeys(config2)); // "Invalid config keys..."
```

## 📖 API Reference

### `isLowerCase(input)`

Checks if a string is in lowercase format.

#### Parameters

- **`input`** (`string`): The string to check

#### Returns

- **`boolean`**: `true` if the string is lowercase, `false` otherwise

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

- [`text-is-upper-case`](../is-upper-case) - Check if string is uppercase
- [`text-lower-case`](../lower-case) - Convert to lowercase
- [`text-upper-case`](../upper-case) - Convert to uppercase
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

[npm-image]: https://img.shields.io/npm/v/text-is-lower-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-is-lower-case
[downloads-image]: https://img.shields.io/npm/dm/text-is-lower-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-is-lower-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-is-lower-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-is-lower-case
