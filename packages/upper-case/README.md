# Upper Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text to **UPPERCASE** format - all characters converted to uppercase.

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
npm install text-upper-case

# yarn
yarn add text-upper-case

# pnpm
pnpm add text-upper-case

# bun
bun add text-upper-case
```

## 🎯 Quick Start

```javascript
import { upperCase } from "text-upper-case";

console.log(upperCase("hello world")); // "HELLO WORLD"
console.log(upperCase("camelCase")); // "CAMELCASE"
console.log(upperCase("kebab-case")); // "KEBAB-CASE"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { upperCase } from "text-upper-case";

console.log(upperCase("hello")); // "HELLO"
```

### CommonJS

```javascript
const { upperCase } = require("text-upper-case");

console.log(upperCase("hello")); // "HELLO"
```

### TypeScript

```typescript
import { upperCase } from "text-upper-case";

const result: string = upperCase("hello world");
console.log(result); // "HELLO WORLD"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { upperCase } from "text-upper-case";

// Simple cases
upperCase("hello"); // "HELLO"
upperCase("world"); // "WORLD"
upperCase("Hello World"); // "HELLO WORLD"

// Mixed case
upperCase("hELLo WoRLD"); // "HELLO WORLD"
upperCase("CamelCase"); // "CAMELCASE"
upperCase("PascalCase"); // "PASCALCASE"

// Programming cases
upperCase("snake_case"); // "SNAKE_CASE"
upperCase("kebab-case"); // "KEBAB-CASE"
upperCase("dot.case"); // "DOT.CASE"
```

### Edge Cases

```javascript
import { upperCase } from "text-upper-case";

// Empty and single character
upperCase(""); // ""
upperCase("a"); // "A"
upperCase("A"); // "A"

// Numbers and symbols
upperCase("hello123"); // "HELLO123"
upperCase("test@email.com"); // "TEST@EMAIL.COM"
upperCase("user-123"); // "USER-123"

// Unicode characters
upperCase("café"); // "CAFÉ"
upperCase("naïve"); // "NAÏVE"
upperCase("résumé"); // "RÉSUMÉ"
```

## 🌍 Real-World Examples

### Constants and Environment Variables

```javascript
import { upperCase } from "text-upper-case";

// Environment variables
upperCase("api_base_url"); // "API_BASE_URL"
upperCase("database-host"); // "DATABASE-HOST"
upperCase("redis.port"); // "REDIS.PORT"

// Configuration constants
const config = {
  [upperCase("app_name")]: "MyApp",
  [upperCase("version")]: "1.0.0",
  [upperCase("debug_mode")]: true,
};
```

### SQL and Database Operations

```javascript
import { upperCase } from "text-upper-case";

// SQL keywords
upperCase("select"); // "SELECT"
upperCase("from"); // "FROM"
upperCase("where"); // "WHERE"
upperCase("order by"); // "ORDER BY"

// Table and column names
upperCase("user_profile"); // "USER_PROFILE"
upperCase("created_at"); // "CREATED_AT"
upperCase("last_login"); // "LAST_LOGIN"
```

### API Headers and HTTP Methods

```javascript
import { upperCase } from "text-upper-case";

// HTTP methods
upperCase("get"); // "GET"
upperCase("post"); // "POST"
upperCase("put"); // "PUT"
upperCase("delete"); // "DELETE"

// HTTP headers
upperCase("content-type"); // "CONTENT-TYPE"
upperCase("authorization"); // "AUTHORIZATION"
upperCase("x-api-key"); // "X-API-KEY"
```

### Log Levels and Status Messages

```javascript
import { upperCase } from "text-upper-case";

// Log levels
upperCase("info"); // "INFO"
upperCase("warning"); // "WARNING"
upperCase("error"); // "ERROR"
upperCase("debug"); // "DEBUG"

// Status messages
upperCase("success"); // "SUCCESS"
upperCase("failed"); // "FAILED"
upperCase("pending"); // "PENDING"
upperCase("in progress"); // "IN PROGRESS"
```

### Form Validation and Error Messages

```javascript
import { upperCase } from "text-upper-case";

function createErrorCode(message) {
  return upperCase(message.replace(/\s+/g, "_"));
}

console.log(createErrorCode("invalid email")); // "INVALID_EMAIL"
console.log(createErrorCode("password too short")); // "PASSWORD_TOO_SHORT"
console.log(createErrorCode("user not found")); // "USER_NOT_FOUND"
```

### Configuration Management

```javascript
import { upperCase } from "text-upper-case";

class ConfigManager {
  constructor() {
    this.config = {};
  }

  set(key, value) {
    const upperKey = upperCase(key.replace(/[.-]/g, "_"));
    this.config[upperKey] = value;
    return this;
  }

  get(key) {
    const upperKey = upperCase(key.replace(/[.-]/g, "_"));
    return this.config[upperKey];
  }

  getAll() {
    return this.config;
  }
}

const config = new ConfigManager()
  .set("app.name", "MyApp")
  .set("database-url", "localhost:5432")
  .set("redis.host", "localhost");

console.log(config.getAll());
// {
//   "APP_NAME": "MyApp",
//   "DATABASE_URL": "localhost:5432",
//   "REDIS_HOST": "localhost"
// }
```

### Command Line Interface

```javascript
import { upperCase } from "text-upper-case";

function processCommand(command) {
  const upperCommand = upperCase(command);

  switch (upperCommand) {
    case "HELP":
      return "Display help information";
    case "VERSION":
      return "Show version number";
    case "BUILD":
      return "Build the project";
    case "TEST":
      return "Run tests";
    default:
      return `Unknown command: ${upperCommand}`;
  }
}

console.log(processCommand("help")); // "Display help information"
console.log(processCommand("Build")); // "Build the project"
console.log(processCommand("TEST")); // "Run tests"
```

### File Processing and Naming

```javascript
import { upperCase } from "text-upper-case";

function generateConstantName(filename) {
  const baseName = filename.replace(/\.[^/.]+$/, ""); // Remove extension
  return upperCase(baseName.replace(/[^a-zA-Z0-9]/g, "_"));
}

console.log(generateConstantName("config.json")); // "CONFIG_JSON"
console.log(generateConstantName("user-data.xml")); // "USER_DATA_XML"
console.log(generateConstantName("app.settings.yml")); // "APP_SETTINGS_YML"
```

### Enum and Constant Generation

```javascript
import { upperCase } from "text-upper-case";

function createEnum(values) {
  const enumObj = {};

  values.forEach((value) => {
    const key = upperCase(value.replace(/\s+/g, "_"));
    enumObj[key] = value;
  });

  return enumObj;
}

const UserStatus = createEnum([
  "active",
  "inactive",
  "pending approval",
  "suspended",
  "deleted",
]);

console.log(UserStatus);
// {
//   "ACTIVE": "active",
//   "INACTIVE": "inactive",
//   "PENDING_APPROVAL": "pending approval",
//   "SUSPENDED": "suspended",
//   "DELETED": "deleted"
// }
```

## 📖 API Reference

### `upperCase(input)`

Converts a string to uppercase format.

#### Parameters

- **`input`** (`string`): The string to transform

#### Returns

- **`string`**: The string converted to uppercase

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

- [`text-lower-case`](../lower-case) - Convert to lowercase
- [`text-upper-case-first`](../upper-case-first) - Make first character uppercase
- [`text-constant-case`](../constant-case) - Convert to CONSTANT_CASE
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

[npm-image]: https://img.shields.io/npm/v/text-upper-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-upper-case
[downloads-image]: https://img.shields.io/npm/dm/text-upper-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-upper-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-upper-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-upper-case
