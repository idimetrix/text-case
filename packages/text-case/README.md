# Text Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> **The ultimate text case transformation library** for JavaScript and TypeScript. Convert text between `camelCase`, `PascalCase`, `snake_case`, `kebab-case`, `CONSTANT_CASE`, `Title Case`, `Sentence case`, `dot.case`, `path/case`, `Header-Case`, and many more formats with comprehensive TypeScript support.

## 🚀 Features

- **21 case transformation functions** covering all common text formatting needs
- **Type-safe** with comprehensive TypeScript definitions
- **Zero dependencies** - lightweight and fast
- **Tree-shakeable** - import only what you need
- **Universal** - works in browsers, Node.js, and serverless environments
- **Comprehensive testing** - 100% test coverage with extensive edge cases
- **Professional documentation** - detailed examples and API references
- **Modern tooling** - ES modules, CommonJS, and UMD support

## 📦 Installation

```bash
# npm
npm install text-case

# yarn
yarn add text-case

# pnpm
pnpm add text-case

# bun
bun add text-case
```

## 🎯 Quick Start

```javascript
import {
  camelCase, // userProfileData
  pascalCase, // UserProfileData
  kebabCase, // user-profile-data
  snakeCase, // user_profile_data
  titleCase, // User Profile Data
  sentenceCase, // User profile data
  constantCase, // USER_PROFILE_DATA
  dotCase, // user.profile.data
  pathCase, // user/profile/data
  headerCase, // User-Profile-Data
  capitalCase, // User Profile Data
  noCase, // user profile data
  paramCase, // user-profile-data (alias for kebab-case)
  upperCase, // USER PROFILE DATA
  lowerCase, // user profile data
  upperCaseFirst, // User profile data
  lowerCaseFirst, // user Profile Data
  swapCase, // uSER pROFILE dATA
  isUpperCase, // Boolean check
  isLowerCase, // Boolean check
} from "text-case";

// Transform any text format
const input = "user_profile_data";

console.log(camelCase(input)); // "userProfileData"
console.log(pascalCase(input)); // "UserProfileData"
console.log(kebabCase(input)); // "user-profile-data"
console.log(titleCase(input)); // "User Profile Data"
```

## 📚 Available Functions

### Core Transformations

| Function         | Output Example      | Description                                        |
| ---------------- | ------------------- | -------------------------------------------------- |
| `camelCase()`    | `userProfileData`   | First word lowercase, subsequent words capitalized |
| `pascalCase()`   | `UserProfileData`   | All words capitalized, no separators               |
| `snakeCase()`    | `user_profile_data` | Lowercase words separated by underscores           |
| `kebabCase()`    | `user-profile-data` | Lowercase words separated by hyphens               |
| `titleCase()`    | `User Profile Data` | All words capitalized, separated by spaces         |
| `sentenceCase()` | `User profile data` | First word capitalized, rest lowercase             |

### Specialized Formats

| Function         | Output Example      | Description                                  |
| ---------------- | ------------------- | -------------------------------------------- |
| `constantCase()` | `USER_PROFILE_DATA` | Uppercase words separated by underscores     |
| `dotCase()`      | `user.profile.data` | Lowercase words separated by dots            |
| `pathCase()`     | `user/profile/data` | Lowercase words separated by forward slashes |
| `headerCase()`   | `User-Profile-Data` | Capitalized words separated by hyphens       |
| `capitalCase()`  | `User Profile Data` | All words capitalized, separated by spaces   |
| `noCase()`       | `user profile data` | Lowercase words separated by spaces          |
| `paramCase()`    | `user-profile-data` | Alias for kebab-case                         |

### Character Transformations

| Function           | Output Example      | Description                 |
| ------------------ | ------------------- | --------------------------- |
| `upperCase()`      | `USER PROFILE DATA` | All characters uppercase    |
| `lowerCase()`      | `user profile data` | All characters lowercase    |
| `upperCaseFirst()` | `User profile data` | First character uppercase   |
| `lowerCaseFirst()` | `user Profile Data` | First character lowercase   |
| `swapCase()`       | `uSER pROFILE dATA` | Swap case of all characters |

### Validation Utilities

| Function        | Output Example | Description                  |
| --------------- | -------------- | ---------------------------- |
| `isUpperCase()` | `true/false`   | Check if string is uppercase |
| `isLowerCase()` | `true/false`   | Check if string is lowercase |

## 🛠️ Advanced Usage

### Custom Options

All transformation functions accept an optional second parameter for customization:

```javascript
import { camelCase, snakeCase } from "text-case";

// Custom word splitting
camelCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xmlHttpRequest"

// Custom character stripping
snakeCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello_world_com"

// Custom transformations
camelCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (word === "api") return "API";
    if (word === "v2") return "V2";
    return word;
  },
}); // "APIV2Endpoint"
```

### TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import { camelCase, Options } from "text-case";

// Type-safe options
const options: Options = {
  splitRegexp: /([a-z])([A-Z])/g,
  stripRegexp: /[^a-zA-Z0-9]/g,
  transform: (word: string, index: number, words: string[]) =>
    word.toLowerCase(),
};

// Type inference
const result: string = camelCase("hello-world", options);
```

### Real-World Examples

#### API Development

```javascript
import { camelCase, snakeCase, kebabCase } from "text-case";

// Convert database columns to JavaScript
const dbUser = {
  first_name: "John",
  last_name: "Doe",
  email_address: "john@example.com",
};
const jsUser = Object.fromEntries(
  Object.entries(dbUser).map(([key, value]) => [camelCase(key), value]),
);
// { firstName: "John", lastName: "Doe", emailAddress: "john@example.com" }

// Generate API endpoints
const createEndpoint = (resource, action) =>
  `/api/${kebabCase(resource)}/${kebabCase(action)}`;

createEndpoint("UserProfile", "GetById"); // "/api/user-profile/get-by-id"
```

#### React Development

```javascript
import { pascalCase, camelCase } from "text-case";

// Component generation
const createComponent = (name) => `
  import React from 'react';

  interface ${pascalCase(name)}Props {
    ${camelCase(name)}Data?: any;
  }

  export const ${pascalCase(name)}: React.FC<${pascalCase(name)}Props> = ({ ${camelCase(name)}Data }) => {
    return <div>{/* ${pascalCase(name)} component */}</div>;
  };
`;

console.log(createComponent("user_profile_card"));
```

#### Configuration Management

```javascript
import { constantCase, camelCase } from "text-case";

// Environment variables to config object
const envToConfig = (envVars) => {
  return Object.fromEntries(
    Object.entries(envVars)
      .filter(([key]) => key.startsWith("APP_"))
      .map(([key, value]) => [camelCase(key.replace("APP_", "")), value]),
  );
};

const env = {
  APP_DATABASE_URL: "postgres://...",
  APP_API_SECRET_KEY: "secret123",
  APP_MAX_FILE_SIZE: "10MB",
};

const config = envToConfig(env);
// { databaseUrl: "postgres://...", apiSecretKey: "secret123", maxFileSize: "10MB" }
```

## 📖 API Reference

### Options Interface

```typescript
interface Options {
  // RegExp to split input into words
  splitRegexp?: RegExp;

  // RegExp to strip unwanted characters
  stripRegexp?: RegExp;

  // Custom word transformation function
  transform?: (word: string, index: number, words: string[]) => string;

  // Custom split function (alternative to splitRegexp)
  split?: (value: string) => string[];

  // Delimiter between words (for spaced formats)
  delimiter?: string;
}
```

### Common Patterns

```javascript
// Split on camelCase and PascalCase boundaries
const camelSplit = { splitRegexp: /([a-z])([A-Z])/g };

// Preserve numbers as separate words
const numberSplit = { splitRegexp: /([a-zA-Z])(\d)/g };

// Strip special characters
const stripSpecial = { stripRegexp: /[^a-zA-Z0-9]/g };

// Custom acronym handling
const acronymTransform = {
  transform: (word) => {
    const acronyms = ["API", "URL", "HTTP", "JSON", "XML"];
    return acronyms.includes(word.toUpperCase()) ? word.toUpperCase() : word;
  },
};
```

## 📊 Bundle Size

This package is optimized for minimal bundle size:

- **Minified**: ~8KB (all functions)
- **Gzipped**: ~3KB (all functions)
- **Tree-shakeable**: Yes
- **Side effects**: None

For even smaller bundles, consider using individual packages:

```javascript
// ❌ Imports entire library (~8KB)
import { camelCase } from "text-case";

// ✅ Imports only camelCase (~450B)
import { camelCase } from "text-camel-case";
```

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
```

## 🔗 Individual Packages

For optimal bundle size, you can install individual packages:

- [`text-camel-case`](https://www.npmjs.com/package/text-camel-case) - camelCase transformation
- [`text-pascal-case`](https://www.npmjs.com/package/text-pascal-case) - PascalCase transformation
- [`text-snake-case`](https://www.npmjs.com/package/text-snake-case) - snake_case transformation
- [`text-kebab-case`](https://www.npmjs.com/package/text-kebab-case) - kebab-case transformation
- [`text-title-case`](https://www.npmjs.com/package/text-title-case) - Title Case transformation
- [`text-sentence-case`](https://www.npmjs.com/package/text-sentence-case) - Sentence case transformation
- [`text-constant-case`](https://www.npmjs.com/package/text-constant-case) - CONSTANT_CASE transformation
- [`text-dot-case`](https://www.npmjs.com/package/text-dot-case) - dot.case transformation
- [`text-path-case`](https://www.npmjs.com/package/text-path-case) - path/case transformation
- [`text-header-case`](https://www.npmjs.com/package/text-header-case) - Header-Case transformation
- [`text-capital-case`](https://www.npmjs.com/package/text-capital-case) - Capital Case transformation
- [`text-no-case`](https://www.npmjs.com/package/text-no-case) - no case transformation
- [`text-param-case`](https://www.npmjs.com/package/text-param-case) - param-case transformation
- [`text-upper-case`](https://www.npmjs.com/package/text-upper-case) - UPPER CASE transformation
- [`text-lower-case`](https://www.npmjs.com/package/text-lower-case) - lower case transformation
- [`text-upper-case-first`](https://www.npmjs.com/package/text-upper-case-first) - Upper case first transformation
- [`text-lower-case-first`](https://www.npmjs.com/package/text-lower-case-first) - lower case first transformation
- [`text-swap-case`](https://www.npmjs.com/package/text-swap-case) - sWaP cAsE transformation
- [`text-is-upper-case`](https://www.npmjs.com/package/text-is-upper-case) - UPPER CASE validation
- [`text-is-lower-case`](https://www.npmjs.com/package/text-is-lower-case) - lower case validation

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

---

**Made with ❤️ by [Dmitry Selikhov](https://github.com/idimetrix)**

[npm-image]: https://img.shields.io/npm/v/text-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-case
[downloads-image]: https://img.shields.io/npm/dm/text-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-case
