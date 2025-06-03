# Constant Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text to **CONSTANT_CASE** format - uppercase words separated by underscores.

## 🚀 Features

- **Lightweight** - Only ~450B minified + gzipped
- **Type-safe** - Full TypeScript support with comprehensive type definitions
- **Zero dependencies** - No external dependencies
- **Tree-shakeable** - ES modules support
- **Universal** - Works in browsers, Node.js, and serverless environments
- **Well-tested** - Comprehensive test suite with edge cases
- **Customizable** - Support for custom transform functions and options

## 📦 Installation

```bash
# npm
npm install text-constant-case

# yarn
yarn add text-constant-case

# pnpm
pnpm add text-constant-case

# bun
bun add text-constant-case
```

## 🎯 Quick Start

```javascript
import { constantCase } from "text-constant-case";

console.log(constantCase("hello world")); // "HELLO_WORLD"
console.log(constantCase("camelCase")); // "CAMEL_CASE"
console.log(constantCase("kebab-case")); // "KEBAB_CASE"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { constantCase } from "text-constant-case";

console.log(constantCase("hello world")); // "HELLO_WORLD"
```

### CommonJS

```javascript
const { constantCase } = require("text-constant-case");

console.log(constantCase("hello world")); // "HELLO_WORLD"
```

### TypeScript

```typescript
import { constantCase } from "text-constant-case";

const result: string = constantCase("hello world");
console.log(result); // "HELLO_WORLD"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { constantCase } from "text-constant-case";

// Simple cases
constantCase("hello world"); // "HELLO_WORLD"
constantCase("Hello World"); // "HELLO_WORLD"
constantCase("HELLO WORLD"); // "HELLO_WORLD"

// From other cases
constantCase("camelCase"); // "CAMEL_CASE"
constantCase("PascalCase"); // "PASCAL_CASE"
constantCase("snake_case"); // "SNAKE_CASE"
constantCase("kebab-case"); // "KEBAB_CASE"
constantCase("dot.case"); // "DOT_CASE"

// Complex examples
constantCase("XMLHttpRequest"); // "XML_HTTP_REQUEST"
constantCase("iPhone"); // "I_PHONE"
constantCase("version 1.2.3"); // "VERSION_1_2_3"
```

### Advanced Usage with Options

```javascript
import { constantCase } from "text-constant-case";

// Custom transform function
constantCase("hello world", {
  transform: (word, index, words) => {
    // Custom transformation logic
    return word.toUpperCase();
  },
}); // "HELLO_WORLD"

// Custom split regex
constantCase("hello-world_test", {
  splitRegexp: /[-_\s]+/,
}); // "HELLO_WORLD_TEST"

// Strip specific characters
constantCase("hello@world#test", {
  stripRegexp: /[@#]/g,
}); // "HELLO_WORLD_TEST"
```

## 🌍 Real-World Examples

### Environment Variables

```javascript
import { constantCase } from "text-constant-case";

// Convert configuration keys to environment variable format
constantCase("database url"); // "DATABASE_URL"
constantCase("api secret key"); // "API_SECRET_KEY"
constantCase("max file size"); // "MAX_FILE_SIZE"
constantCase("redis host"); // "REDIS_HOST"
constantCase("jwt expiration"); // "JWT_EXPIRATION"
```

### Constants and Enums

```javascript
import { constantCase } from "text-constant-case";

// HTTP status codes
constantCase("ok"); // "OK"
constantCase("not found"); // "NOT_FOUND"
constantCase("internal server error"); // "INTERNAL_SERVER_ERROR"
constantCase("bad request"); // "BAD_REQUEST"

// User roles
constantCase("admin user"); // "ADMIN_USER"
constantCase("guest user"); // "GUEST_USER"
constantCase("super admin"); // "SUPER_ADMIN"
constantCase("read only"); // "READ_ONLY"
```

### Configuration Management

```javascript
import { constantCase } from "text-constant-case";

function createEnvironmentConfig(config) {
  const envConfig = {};

  for (const [key, value] of Object.entries(config)) {
    const envKey = constantCase(key);
    envConfig[envKey] = value;
  }

  return envConfig;
}

const appConfig = {
  "database host": "localhost",
  "database port": 5432,
  "api base url": "https://api.example.com",
  "jwt secret": "secret-key",
  "session timeout": 3600,
};

console.log(createEnvironmentConfig(appConfig));
// {
//   "DATABASE_HOST": "localhost",
//   "DATABASE_PORT": 5432,
//   "API_BASE_URL": "https://api.example.com",
//   "JWT_SECRET": "secret-key",
//   "SESSION_TIMEOUT": 3600
// }
```

### Error Code Generation

```javascript
import { constantCase } from "text-constant-case";

class ErrorCodeGenerator {
  static generate(message) {
    return constantCase(message);
  }

  static createErrorMap(errors) {
    const errorMap = {};

    errors.forEach((error, index) => {
      const code = this.generate(error);
      errorMap[code] = {
        code,
        message: error,
        id: index + 1,
      };
    });

    return errorMap;
  }
}

const errorMessages = [
  "invalid email address",
  "password too short",
  "user not found",
  "access denied",
  "database connection failed",
];

console.log(ErrorCodeGenerator.createErrorMap(errorMessages));
// {
//   "INVALID_EMAIL_ADDRESS": { code: "INVALID_EMAIL_ADDRESS", message: "invalid email address", id: 1 },
//   "PASSWORD_TOO_SHORT": { code: "PASSWORD_TOO_SHORT", message: "password too short", id: 2 },
//   "USER_NOT_FOUND": { code: "USER_NOT_FOUND", message: "user not found", id: 3 },
//   "ACCESS_DENIED": { code: "ACCESS_DENIED", message: "access denied", id: 4 },
//   "DATABASE_CONNECTION_FAILED": { code: "DATABASE_CONNECTION_FAILED", message: "database connection failed", id: 5 }
// }
```

### API Response Processing

```javascript
import { constantCase } from "text-constant-case";

function createApiConstants(endpoints) {
  const constants = {};

  endpoints.forEach((endpoint) => {
    const constantName = constantCase(endpoint.name);
    constants[constantName] = {
      url: endpoint.url,
      method: endpoint.method,
      name: constantName,
    };
  });

  return constants;
}

const apiEndpoints = [
  { name: "get user profile", url: "/api/user/profile", method: "GET" },
  { name: "update user settings", url: "/api/user/settings", method: "PUT" },
  { name: "delete user account", url: "/api/user/account", method: "DELETE" },
  { name: "create new post", url: "/api/posts", method: "POST" },
];

console.log(createApiConstants(apiEndpoints));
// {
//   "GET_USER_PROFILE": { url: "/api/user/profile", method: "GET", name: "GET_USER_PROFILE" },
//   "UPDATE_USER_SETTINGS": { url: "/api/user/settings", method: "PUT", name: "UPDATE_USER_SETTINGS" },
//   "DELETE_USER_ACCOUNT": { url: "/api/user/account", method: "DELETE", name: "DELETE_USER_ACCOUNT" },
//   "CREATE_NEW_POST": { url: "/api/posts", method: "POST", name: "CREATE_NEW_POST" }
// }
```

### Database Schema Generation

```javascript
import { constantCase } from "text-constant-case";

class SchemaGenerator {
  static generateTableConstants(tables) {
    const constants = {};

    tables.forEach((table) => {
      const tableName = constantCase(table.name);
      constants[tableName] = table.name;

      // Generate column constants
      if (table.columns) {
        table.columns.forEach((column) => {
          const columnKey = `${tableName}_${constantCase(column)}`;
          constants[columnKey] = column;
        });
      }
    });

    return constants;
  }
}

const databaseTables = [
  {
    name: "user_profiles",
    columns: [
      "user id",
      "first name",
      "last name",
      "email address",
      "created at",
    ],
  },
  {
    name: "blog_posts",
    columns: ["post id", "title", "content", "author id", "published at"],
  },
];

console.log(SchemaGenerator.generateTableConstants(databaseTables));
// {
//   "USER_PROFILES": "user_profiles",
//   "USER_PROFILES_USER_ID": "user id",
//   "USER_PROFILES_FIRST_NAME": "first name",
//   "USER_PROFILES_LAST_NAME": "last name",
//   "USER_PROFILES_EMAIL_ADDRESS": "email address",
//   "USER_PROFILES_CREATED_AT": "created at",
//   "BLOG_POSTS": "blog_posts",
//   "BLOG_POSTS_POST_ID": "post id",
//   "BLOG_POSTS_TITLE": "title",
//   "BLOG_POSTS_CONTENT": "content",
//   "BLOG_POSTS_AUTHOR_ID": "author id",
//   "BLOG_POSTS_PUBLISHED_AT": "published at"
// }
```

### Build Configuration

```javascript
import { constantCase } from "text-constant-case";

function generateBuildConstants(config) {
  const constants = {};

  function processObject(obj, prefix = "") {
    for (const [key, value] of Object.entries(obj)) {
      const constantKey = prefix
        ? `${prefix}_${constantCase(key)}`
        : constantCase(key);

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        processObject(value, constantKey);
      } else {
        constants[constantKey] = value;
      }
    }
  }

  processObject(config);
  return constants;
}

const buildConfig = {
  "app name": "MyApp",
  version: "1.0.0",
  "build settings": {
    "output directory": "dist",
    "source maps": true,
    "minify code": true,
  },
  "server settings": {
    port: 3000,
    host: "localhost",
    "ssl enabled": false,
  },
};

console.log(generateBuildConstants(buildConfig));
// {
//   "APP_NAME": "MyApp",
//   "VERSION": "1.0.0",
//   "BUILD_SETTINGS_OUTPUT_DIRECTORY": "dist",
//   "BUILD_SETTINGS_SOURCE_MAPS": true,
//   "BUILD_SETTINGS_MINIFY_CODE": true,
//   "SERVER_SETTINGS_PORT": 3000,
//   "SERVER_SETTINGS_HOST": "localhost",
//   "SERVER_SETTINGS_SSL_ENABLED": false
// }
```

## 📖 API Reference

### `constantCase(input, options?)`

Transforms text to CONSTANT_CASE format.

#### Parameters

- **`input`** (`string`): The string to transform
- **`options`** (`object`, optional): Configuration options
  - **`transform`** (`function`): Custom transform function for each word
  - **`splitRegexp`** (`RegExp`): Custom regex for splitting words
  - **`stripRegexp`** (`RegExp`): Custom regex for stripping characters

#### Returns

- **`string`**: The CONSTANT_CASE formatted string

#### Options Interface

```typescript
interface Options {
  transform?: (word: string, index: number, words: string[]) => string;
  splitRegexp?: RegExp;
  stripRegexp?: RegExp;
}
```

## 📊 Bundle Size

This package is optimized for minimal bundle size:

- **Minified**: ~450B
- **Gzipped**: ~300B
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

[npm-image]: https://img.shields.io/npm/v/text-constant-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-constant-case
[downloads-image]: https://img.shields.io/npm/dm/text-constant-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-constant-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-constant-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-constant-case
