# Lower Case First

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text by making the **first character lowercase** while preserving the rest.

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
npm install text-lower-case-first

# yarn
yarn add text-lower-case-first

# pnpm
pnpm add text-lower-case-first

# bun
bun add text-lower-case-first
```

## 🎯 Quick Start

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

console.log(lowerCaseFirst("Hello World")); // "hello World"
console.log(lowerCaseFirst("HELLO WORLD")); // "hELLO WORLD"
console.log(lowerCaseFirst("CamelCase")); // "camelCase"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

console.log(lowerCaseFirst("Hello")); // "hello"
```

### CommonJS

```javascript
const { lowerCaseFirst } = require("text-lower-case-first");

console.log(lowerCaseFirst("Hello")); // "hello"
```

### TypeScript

```typescript
import { lowerCaseFirst } from "text-lower-case-first";

const result: string = lowerCaseFirst("Hello World");
console.log(result); // "hello World"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

// Simple cases
lowerCaseFirst("Hello"); // "hello"
lowerCaseFirst("hello"); // "hello"
lowerCaseFirst("HELLO"); // "hELLO"

// Multiple words
lowerCaseFirst("Hello World"); // "hello World"
lowerCaseFirst("HELLO WORLD"); // "hELLO WORLD"
lowerCaseFirst("hello world"); // "hello world"

// Programming cases
lowerCaseFirst("CamelCase"); // "camelCase"
lowerCaseFirst("PascalCase"); // "pascalCase"
lowerCaseFirst("Snake_case"); // "snake_case"
lowerCaseFirst("Kebab-case"); // "kebab-case"
```

### Edge Cases

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

// Empty and single character
lowerCaseFirst(""); // ""
lowerCaseFirst("A"); // "a"
lowerCaseFirst("a"); // "a"

// Numbers and symbols
lowerCaseFirst("123hello"); // "123hello"
lowerCaseFirst("@Hello"); // "@Hello"
lowerCaseFirst("Hello123"); // "hello123"

// Unicode characters
lowerCaseFirst("Ñice"); // "ñice"
lowerCaseFirst("Über"); // "über"
lowerCaseFirst("Café"); // "café"
```

## 🌍 Real-World Examples

### Variable Name Conversion

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

// Convert PascalCase to camelCase
lowerCaseFirst("UserProfile"); // "userProfile"
lowerCaseFirst("DatabaseConnection"); // "databaseConnection"
lowerCaseFirst("ApiResponse"); // "apiResponse"
lowerCaseFirst("HttpClient"); // "httpClient"
```

### JSON Property Processing

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

function convertObjectKeys(obj) {
  const converted = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = lowerCaseFirst(key);
    converted[newKey] =
      typeof value === "object" && value !== null
        ? convertObjectKeys(value)
        : value;
  }

  return converted;
}

const apiResponse = {
  UserName: "john_doe",
  EmailAddress: "john@example.com",
  ProfileData: {
    FirstName: "John",
    LastName: "Doe",
    PhoneNumber: "123-456-7890",
  },
};

console.log(convertObjectKeys(apiResponse));
// {
//   userName: "john_doe",
//   emailAddress: "john@example.com",
//   profileData: {
//     firstName: "John",
//     lastName: "Doe",
//     phoneNumber: "123-456-7890"
//   }
// }
```

### Class Method Generation

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

function createGetter(propertyName) {
  const methodName = `get${propertyName}`;
  return lowerCaseFirst(methodName);
}

function createSetter(propertyName) {
  const methodName = `set${propertyName}`;
  return lowerCaseFirst(methodName);
}

console.log(createGetter("UserName")); // "getUserName"
console.log(createSetter("EmailAddress")); // "setEmailAddress"
console.log(createGetter("IsActive")); // "getIsActive"
```

### Form Field Processing

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

function processFormFields(fields) {
  const processed = {};

  fields.forEach((field) => {
    // Convert field names to camelCase
    const fieldName = lowerCaseFirst(field.Name || field.name);
    processed[fieldName] = {
      value: field.Value || field.value || "",
      required: field.Required || field.required || false,
      type: field.Type || field.type || "text",
    };
  });

  return processed;
}

const formFields = [
  { Name: "FirstName", Value: "John", Required: true, Type: "text" },
  { Name: "LastName", Value: "Doe", Required: true, Type: "text" },
  { Name: "EmailAddress", Value: "", Required: true, Type: "email" },
];

console.log(processFormFields(formFields));
// {
//   firstName: { value: "John", required: true, type: "text" },
//   lastName: { value: "Doe", required: true, type: "text" },
//   emailAddress: { value: "", required: true, type: "email" }
// }
```

### API Response Normalization

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

function normalizeApiResponse(response) {
  if (Array.isArray(response)) {
    return response.map(normalizeApiResponse);
  }

  if (typeof response === "object" && response !== null) {
    const normalized = {};

    for (const [key, value] of Object.entries(response)) {
      const normalizedKey = lowerCaseFirst(key);
      normalized[normalizedKey] = normalizeApiResponse(value);
    }

    return normalized;
  }

  return response;
}

const apiData = {
  UserId: 123,
  UserName: "john_doe",
  ProfileInfo: {
    FirstName: "John",
    LastName: "Doe",
    ContactDetails: {
      EmailAddress: "john@example.com",
      PhoneNumber: "123-456-7890",
    },
  },
  Preferences: [
    { SettingName: "theme", SettingValue: "dark" },
    { SettingName: "language", SettingValue: "en" },
  ],
};

console.log(normalizeApiResponse(apiData));
// {
//   userId: 123,
//   userName: "john_doe",
//   profileInfo: {
//     firstName: "John",
//     lastName: "Doe",
//     contactDetails: {
//       emailAddress: "john@example.com",
//       phoneNumber: "123-456-7890"
//     }
//   },
//   preferences: [
//     { settingName: "theme", settingValue: "dark" },
//     { settingName: "language", settingValue: "en" }
//   ]
// }
```

### Code Generation

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

class CodeGenerator {
  generateProperty(name, type = "string") {
    const propertyName = lowerCaseFirst(name);
    return `private ${propertyName}: ${type};`;
  }

  generateGetter(name, type = "string") {
    const propertyName = lowerCaseFirst(name);
    const methodName = `get${name}`;
    return `public ${lowerCaseFirst(methodName)}(): ${type} {
      return this.${propertyName};
    }`;
  }

  generateSetter(name, type = "string") {
    const propertyName = lowerCaseFirst(name);
    const methodName = `set${name}`;
    const paramName = lowerCaseFirst(name);
    return `public ${lowerCaseFirst(methodName)}(${paramName}: ${type}): void {
      this.${propertyName} = ${paramName};
    }`;
  }
}

const generator = new CodeGenerator();
console.log(generator.generateProperty("UserName"));
// "private userName: string;"

console.log(generator.generateGetter("UserName"));
// "public getUserName(): string {
//   return this.userName;
// }"
```

### Configuration Processing

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

function processConfiguration(config) {
  const processed = {};

  for (const [section, settings] of Object.entries(config)) {
    const sectionName = lowerCaseFirst(section);
    processed[sectionName] = {};

    for (const [key, value] of Object.entries(settings)) {
      const settingName = lowerCaseFirst(key);
      processed[sectionName][settingName] = value;
    }
  }

  return processed;
}

const appConfig = {
  DatabaseSettings: {
    ConnectionString: "localhost:5432",
    MaxConnections: 100,
    TimeoutSeconds: 30,
  },
  ApiSettings: {
    BaseUrl: "https://api.example.com",
    ApiKey: "secret-key",
    RateLimitPerMinute: 1000,
  },
};

console.log(processConfiguration(appConfig));
// {
//   databaseSettings: {
//     connectionString: "localhost:5432",
//     maxConnections: 100,
//     timeoutSeconds: 30
//   },
//   apiSettings: {
//     baseUrl: "https://api.example.com",
//     apiKey: "secret-key",
//     rateLimitPerMinute: 1000
//   }
// }
```

## 📖 API Reference

### `lowerCaseFirst(input)`

Makes the first character of a string lowercase while preserving the rest.

#### Parameters

- **`input`** (`string`): The string to transform

#### Returns

- **`string`**: The string with the first character in lowercase

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

- [`text-upper-case-first`](../upper-case-first) - Make first character uppercase
- [`text-camel-case`](../camel-case) - Convert to camelCase
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

[npm-image]: https://img.shields.io/npm/v/text-lower-case-first.svg?style=flat
[npm-url]: https://npmjs.org/package/text-lower-case-first
[downloads-image]: https://img.shields.io/npm/dm/text-lower-case-first.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-lower-case-first
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-lower-case-first.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-lower-case-first
