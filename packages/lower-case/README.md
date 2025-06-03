# Lower Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text to **lowercase** format - all characters converted to lowercase.

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
npm install text-lower-case

# yarn
yarn add text-lower-case

# pnpm
pnpm add text-lower-case

# bun
bun add text-lower-case
```

## 🎯 Quick Start

```javascript
import { lowerCase } from "text-lower-case";

console.log(lowerCase("HELLO WORLD")); // "hello world"
console.log(lowerCase("CamelCase")); // "camelcase"
console.log(lowerCase("KEBAB-CASE")); // "kebab-case"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { lowerCase } from "text-lower-case";

console.log(lowerCase("HELLO")); // "hello"
```

### CommonJS

```javascript
const { lowerCase } = require("text-lower-case");

console.log(lowerCase("HELLO")); // "hello"
```

### TypeScript

```typescript
import { lowerCase } from "text-lower-case";

const result: string = lowerCase("HELLO WORLD");
console.log(result); // "hello world"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { lowerCase } from "text-lower-case";

// Simple cases
lowerCase("HELLO"); // "hello"
lowerCase("WORLD"); // "world"
lowerCase("Hello World"); // "hello world"

// Mixed case
lowerCase("hELLo WoRLD"); // "hello world"
lowerCase("CamelCase"); // "camelcase"
lowerCase("PascalCase"); // "pascalcase"

// Programming cases
lowerCase("SNAKE_CASE"); // "snake_case"
lowerCase("KEBAB-CASE"); // "kebab-case"
lowerCase("DOT.CASE"); // "dot.case"
```

### Edge Cases

```javascript
import { lowerCase } from "text-lower-case";

// Empty and single character
lowerCase(""); // ""
lowerCase("A"); // "a"
lowerCase("a"); // "a"

// Numbers and symbols
lowerCase("HELLO123"); // "hello123"
lowerCase("TEST@EMAIL.COM"); // "test@email.com"
lowerCase("USER-123"); // "user-123"

// Unicode characters
lowerCase("CAFÉ"); // "café"
lowerCase("NAÏVE"); // "naïve"
lowerCase("RÉSUMÉ"); // "résumé"
```

## 🌍 Real-World Examples

### Email and Username Processing

```javascript
import { lowerCase } from "text-lower-case";

// Email normalization
lowerCase("USER@EXAMPLE.COM"); // "user@example.com"
lowerCase("John.Doe@Gmail.Com"); // "john.doe@gmail.com"
lowerCase("ADMIN@COMPANY.ORG"); // "admin@company.org"

// Username normalization
lowerCase("JohnDoe123"); // "johndoe123"
lowerCase("ADMIN_USER"); // "admin_user"
lowerCase("Guest-User"); // "guest-user"
```

### URL and Domain Processing

```javascript
import { lowerCase } from "text-lower-case";

// Domain normalization
lowerCase("EXAMPLE.COM"); // "example.com"
lowerCase("API.GitHub.Com"); // "api.github.com"
lowerCase("SUB.DOMAIN.ORG"); // "sub.domain.org"

// Protocol normalization
lowerCase("HTTPS"); // "https"
lowerCase("HTTP"); // "http"
lowerCase("FTP"); // "ftp"
```

### Search and Filtering

```javascript
import { lowerCase } from "text-lower-case";

function searchItems(items, query) {
  const normalizedQuery = lowerCase(query);

  return items.filter(
    (item) =>
      lowerCase(item.name).includes(normalizedQuery) ||
      lowerCase(item.description).includes(normalizedQuery),
  );
}

const products = [
  { name: "iPhone 15", description: "Latest Apple smartphone" },
  { name: "Samsung Galaxy", description: "Android flagship device" },
  { name: "Google Pixel", description: "Pure Android experience" },
];

console.log(searchItems(products, "APPLE"));
// [{ name: "iPhone 15", description: "Latest Apple smartphone" }]
```

### Form Data Processing

```javascript
import { lowerCase } from "text-lower-case";

function normalizeFormData(formData) {
  const normalized = {};

  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === "string") {
      // Normalize email fields
      if (key.toLowerCase().includes("email")) {
        normalized[key] = lowerCase(value.trim());
      }
      // Normalize username fields
      else if (key.toLowerCase().includes("username")) {
        normalized[key] = lowerCase(value.trim());
      } else {
        normalized[key] = value;
      }
    } else {
      normalized[key] = value;
    }
  }

  return normalized;
}

const formData = {
  email: "  USER@EXAMPLE.COM  ",
  username: "JOHNDOE123",
  firstName: "John",
  lastName: "Doe",
};

console.log(normalizeFormData(formData));
// {
//   email: "user@example.com",
//   username: "johndoe123",
//   firstName: "John",
//   lastName: "Doe"
// }
```

### Database Query Normalization

```javascript
import { lowerCase } from "text-lower-case";

class UserRepository {
  async findByEmail(email) {
    const normalizedEmail = lowerCase(email.trim());
    return await this.db.users.findOne({
      email: normalizedEmail,
    });
  }

  async findByUsername(username) {
    const normalizedUsername = lowerCase(username.trim());
    return await this.db.users.findOne({
      username: normalizedUsername,
    });
  }

  async searchUsers(query) {
    const normalizedQuery = lowerCase(query);
    return await this.db.users.find({
      $or: [
        { email: { $regex: normalizedQuery, $options: "i" } },
        { username: { $regex: normalizedQuery, $options: "i" } },
      ],
    });
  }
}
```

### Configuration Management

```javascript
import { lowerCase } from "text-lower-case";

function parseEnvironmentVariables(env) {
  const config = {};

  for (const [key, value] of Object.entries(env)) {
    // Normalize boolean values
    if (typeof value === "string") {
      const lowerValue = lowerCase(value);

      if (lowerValue === "true" || lowerValue === "false") {
        config[key] = lowerValue === "true";
      }
      // Normalize protocol values
      else if (key.toLowerCase().includes("protocol")) {
        config[key] = lowerValue;
      }
      // Normalize host values
      else if (key.toLowerCase().includes("host")) {
        config[key] = lowerValue;
      } else {
        config[key] = value;
      }
    } else {
      config[key] = value;
    }
  }

  return config;
}

const env = {
  NODE_ENV: "PRODUCTION",
  DATABASE_HOST: "LOCALHOST",
  USE_SSL: "TRUE",
  PROTOCOL: "HTTPS",
};

console.log(parseEnvironmentVariables(env));
// {
//   NODE_ENV: "PRODUCTION",
//   DATABASE_HOST: "localhost",
//   USE_SSL: true,
//   PROTOCOL: "https"
// }
```

### Text Processing Pipeline

```javascript
import { lowerCase } from "text-lower-case";

class TextNormalizer {
  constructor() {
    this.processors = [];
  }

  addTrim() {
    this.processors.push((text) => text.trim());
    return this;
  }

  addLowerCase() {
    this.processors.push(lowerCase);
    return this;
  }

  addRemoveExtraSpaces() {
    this.processors.push((text) => text.replace(/\s+/g, " "));
    return this;
  }

  process(text) {
    return this.processors.reduce(
      (result, processor) => processor(result),
      text,
    );
  }
}

const normalizer = new TextNormalizer()
  .addTrim()
  .addLowerCase()
  .addRemoveExtraSpaces();

console.log(normalizer.process("  HELLO    WORLD  ")); // "hello world"
```

### API Response Processing

```javascript
import { lowerCase } from "text-lower-case";

function normalizeApiResponse(response) {
  if (response.data && Array.isArray(response.data)) {
    response.data = response.data.map((item) => {
      if (item.email) {
        item.email = lowerCase(item.email);
      }
      if (item.username) {
        item.username = lowerCase(item.username);
      }
      if (item.status) {
        item.status = lowerCase(item.status);
      }
      return item;
    });
  }

  return response;
}

const apiResponse = {
  success: true,
  data: [
    { id: 1, email: "USER@EXAMPLE.COM", username: "JOHNDOE", status: "ACTIVE" },
    {
      id: 2,
      email: "ADMIN@COMPANY.ORG",
      username: "ADMIN",
      status: "INACTIVE",
    },
  ],
};

console.log(normalizeApiResponse(apiResponse));
// {
//   success: true,
//   data: [
//     { id: 1, email: "user@example.com", username: "johndoe", status: "active" },
//     { id: 2, email: "admin@company.org", username: "admin", status: "inactive" }
//   ]
// }
```

## 📖 API Reference

### `lowerCase(input)`

Converts a string to lowercase format.

#### Parameters

- **`input`** (`string`): The string to transform

#### Returns

- **`string`**: The string converted to lowercase

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

- [`text-upper-case`](../upper-case) - Convert to UPPERCASE
- [`text-lower-case-first`](../lower-case-first) - Make first character lowercase
- [`text-sentence-case`](../sentence-case) - Convert to Sentence case
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

[npm-image]: https://img.shields.io/npm/v/text-lower-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-lower-case
[downloads-image]: https://img.shields.io/npm/dm/text-lower-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-lower-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-lower-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-lower-case
