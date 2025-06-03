# Text Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Build Status](https://img.shields.io/github/actions/workflow/status/idimetrix/text-case/ci.yml?branch=main)](https://github.com/idimetrix/text-case/actions)
[![codecov](https://codecov.io/gh/idimetrix/text-case/branch/main/graph/badge.svg)](https://codecov.io/gh/idimetrix/text-case)

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
- **Monorepo architecture** - individual packages for optimal bundle size

## 📦 Installation

### All packages (recommended)

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

### Individual packages

```bash
# Install only what you need
npm install text-camel-case text-kebab-case text-snake-case
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

## 📚 Available Packages

### Core Transformations

| Package                                          | Output Example      | Use Cases                               | Size  | NPM                                                                                                             |
| ------------------------------------------------ | ------------------- | --------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------- |
| [`text-camel-case`](./packages/camel-case)       | `userProfileData`   | JavaScript variables, object properties | ~450B | [![npm](https://img.shields.io/npm/v/text-camel-case.svg)](https://www.npmjs.com/package/text-camel-case)       |
| [`text-pascal-case`](./packages/pascal-case)     | `UserProfileData`   | Class names, components, types          | ~400B | [![npm](https://img.shields.io/npm/v/text-pascal-case.svg)](https://www.npmjs.com/package/text-pascal-case)     |
| [`text-snake-case`](./packages/snake-case)       | `user_profile_data` | Database columns, Python variables      | ~300B | [![npm](https://img.shields.io/npm/v/text-snake-case.svg)](https://www.npmjs.com/package/text-snake-case)       |
| [`text-kebab-case`](./packages/kebab-case)       | `user-profile-data` | CSS classes, URLs, HTML attributes      | ~350B | [![npm](https://img.shields.io/npm/v/text-kebab-case.svg)](https://www.npmjs.com/package/text-kebab-case)       |
| [`text-title-case`](./packages/title-case)       | `User Profile Data` | Headers, titles, proper nouns           | ~350B | [![npm](https://img.shields.io/npm/v/text-title-case.svg)](https://www.npmjs.com/package/text-title-case)       |
| [`text-sentence-case`](./packages/sentence-case) | `User profile data` | Sentences, descriptions                 | ~320B | [![npm](https://img.shields.io/npm/v/text-sentence-case.svg)](https://www.npmjs.com/package/text-sentence-case) |

### Specialized Formats

| Package                                          | Output Example      | Use Cases                        | Size  | NPM                                                                                                             |
| ------------------------------------------------ | ------------------- | -------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------- |
| [`text-constant-case`](./packages/constant-case) | `USER_PROFILE_DATA` | Environment variables, constants | ~380B | [![npm](https://img.shields.io/npm/v/text-constant-case.svg)](https://www.npmjs.com/package/text-constant-case) |
| [`text-dot-case`](./packages/dot-case)           | `user.profile.data` | Object paths, file names         | ~280B | [![npm](https://img.shields.io/npm/v/text-dot-case.svg)](https://www.npmjs.com/package/text-dot-case)           |
| [`text-path-case`](./packages/path-case)         | `user/profile/data` | File paths, URLs                 | ~300B | [![npm](https://img.shields.io/npm/v/text-path-case.svg)](https://www.npmjs.com/package/text-path-case)         |
| [`text-header-case`](./packages/header-case)     | `User-Profile-Data` | HTTP headers, train-case         | ~340B | [![npm](https://img.shields.io/npm/v/text-header-case.svg)](https://www.npmjs.com/package/text-header-case)     |
| [`text-capital-case`](./packages/capital-case)   | `User Profile Data` | Business titles, formal text     | ~330B | [![npm](https://img.shields.io/npm/v/text-capital-case.svg)](https://www.npmjs.com/package/text-capital-case)   |
| [`text-no-case`](./packages/no-case)             | `user profile data` | Search queries, plain text       | ~280B | [![npm](https://img.shields.io/npm/v/text-no-case.svg)](https://www.npmjs.com/package/text-no-case)             |
| [`text-param-case`](./packages/param-case)       | `user-profile-data` | URL parameters, kebab-case alias | ~350B | [![npm](https://img.shields.io/npm/v/text-param-case.svg)](https://www.npmjs.com/package/text-param-case)       |

### Character Transformations

| Package                                                | Output Example      | Use Cases                    | Size  | NPM                                                                                                                   |
| ------------------------------------------------------ | ------------------- | ---------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------- |
| [`text-upper-case`](./packages/upper-case)             | `USER PROFILE DATA` | Constants, emphasis          | ~120B | [![npm](https://img.shields.io/npm/v/text-upper-case.svg)](https://www.npmjs.com/package/text-upper-case)             |
| [`text-lower-case`](./packages/lower-case)             | `user profile data` | Normalization, search        | ~120B | [![npm](https://img.shields.io/npm/v/text-lower-case.svg)](https://www.npmjs.com/package/text-lower-case)             |
| [`text-upper-case-first`](./packages/upper-case-first) | `User profile data` | Sentences, proper formatting | ~130B | [![npm](https://img.shields.io/npm/v/text-upper-case-first.svg)](https://www.npmjs.com/package/text-upper-case-first) |
| [`text-lower-case-first`](./packages/lower-case-first) | `user Profile Data` | camelCase conversion         | ~130B | [![npm](https://img.shields.io/npm/v/text-lower-case-first.svg)](https://www.npmjs.com/package/text-lower-case-first) |
| [`text-swap-case`](./packages/swap-case)               | `uSER pROFILE dATA` | Creative text, obfuscation   | ~140B | [![npm](https://img.shields.io/npm/v/text-swap-case.svg)](https://www.npmjs.com/package/text-swap-case)               |

### Validation Utilities

| Package                                          | Output Example | Use Cases                      | Size  | NPM                                                                                                             |
| ------------------------------------------------ | -------------- | ------------------------------ | ----- | --------------------------------------------------------------------------------------------------------------- |
| [`text-is-upper-case`](./packages/is-upper-case) | `true/false`   | Input validation, conditionals | ~100B | [![npm](https://img.shields.io/npm/v/text-is-upper-case.svg)](https://www.npmjs.com/package/text-is-upper-case) |
| [`text-is-lower-case`](./packages/is-lower-case) | `true/false`   | Input validation, conditionals | ~100B | [![npm](https://img.shields.io/npm/v/text-is-lower-case.svg)](https://www.npmjs.com/package/text-is-lower-case) |

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
import { camelCase, PascalCase, Options } from "text-case";

// Type-safe options
const options: Options = {
  splitRegexp: /([a-z])([A-Z])/g,
  stripRegexp: /[^a-zA-Z0-9]/g,
  transform: (word: string, index: number, words: string[]) =>
    word.toLowerCase(),
};

// Type inference
const result: string = camelCase("hello-world", options);

// Generic type support for consistent transformations
function transformKeys<T extends Record<string, any>>(
  obj: T,
  transformer: (key: string) => string,
): Record<string, T[keyof T]> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [transformer(key), value]),
  );
}

const data = { user_name: "John", email_address: "john@example.com" };
const camelData = transformKeys(data, camelCase);
// { userName: "John", emailAddress: "john@example.com" }
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

#### CSS-in-JS

```javascript
import { camelCase } from "text-case";

// Convert CSS properties
const cssToJS = (cssText) => {
  return cssText.replace(
    /([a-z])-([a-z])/g,
    (match, p1, p2) => p1 + p2.toUpperCase(),
  );
};

const styles = {
  backgroundColor: "#fff", // from background-color
  fontSize: "16px", // from font-size
  marginTop: "10px", // from margin-top
};
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

## 🏗️ Framework Integration

### Express.js

```javascript
import express from "express";
import { kebabCase } from "text-case";

const app = express();

// Auto-generate kebab-case routes
const createRoute = (name, handler) => {
  app.get(`/${kebabCase(name)}`, handler);
};

createRoute("getUserProfile", (req, res) => res.json({ profile: {} }));
// Creates route: GET /get-user-profile
```

### Next.js

```javascript
// pages/[...slug].js
import { pathCase } from "text-case";

export async function getStaticPaths() {
  const pages = ["About Us", "Contact Form", "Privacy Policy"];

  return {
    paths: pages.map((page) => ({
      params: { slug: pathCase(page).split("/") },
    })),
    fallback: false,
  };
}
```

### Vue.js

```javascript
import { pascalCase } from "text-case";

// Dynamic component registration
const components = ["UserCard", "ProductList", "CheckoutForm"];

components.forEach((name) => {
  app.component(pascalCase(name), () => import(`./components/${name}.vue`));
});
```

## 🧪 Testing

Each package includes comprehensive test suites with:

- **Basic transformations** - Standard use cases
- **Edge cases** - Empty strings, special characters, unicode
- **Complex inputs** - Mixed cases, numbers, symbols
- **Performance tests** - Large string handling
- **Error handling** - Null/undefined inputs
- **Real-world scenarios** - Practical examples

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter text-camel-case test

# Run tests with coverage
pnpm test --coverage

# Run tests in watch mode
pnpm test --watch
```

## 📊 Bundle Size Comparison

| Package             | Minified  | Gzipped  | Tree-shakeable |
| ------------------- | --------- | -------- | -------------- |
| `text-case` (all)   | ~8KB      | ~3KB     | ✅             |
| Individual packages | 100B-450B | 50B-250B | ✅             |

Import only what you need for optimal bundle size:

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

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/idimetrix/text-case.git
cd text-case

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Type check
pnpm typecheck

# Lint code
pnpm lint
```

### Deployment Steps

```
npx lerna version patch --yes --force-publish=*
npx lerna publish from-package --yes
```

### Package Structure

```
packages/
├── camel-case/          # camelCase transformation
├── pascal-case/         # PascalCase transformation
├── snake-case/          # snake_case transformation
├── kebab-case/          # kebab-case transformation
├── title-case/          # Title Case transformation
├── sentence-case/       # Sentence case transformation
├── constant-case/       # CONSTANT_CASE transformation
├── dot-case/            # dot.case transformation
├── path-case/           # path/case transformation
├── header-case/         # Header-Case transformation
├── capital-case/        # Capital Case transformation
├── no-case/             # no case transformation
├── param-case/          # param-case transformation
├── upper-case/          # UPPER CASE transformation
├── lower-case/          # lower case transformation
├── upper-case-first/    # Upper case first transformation
├── lower-case-first/    # lower case first transformation
├── swap-case/           # sWaP cAsE transformation
├── is-upper-case/       # UPPER CASE validation
└── is-lower-case/       # lower case validation
```

## 📜 License

[MIT](./LICENSE) © [Dmitry Selikhov](https://github.com/idimetrix)

## 🆘 Support

- 📧 **Email**: [selikhov.dmitrey@gmail.com](mailto:selikhov.dmitrey@gmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/idimetrix/text-case/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/idimetrix/text-case/discussions)
- 📖 **Documentation**: [Individual package READMEs](./packages/)

## 🔗 Related Projects

- [change-case](https://github.com/blakeembrey/change-case) - The original inspiration
- [lodash](https://lodash.com/) - Utility library with some case functions
- [just](https://github.com/angus-c/just) - Functional programming utilities

## 🏆 Why Choose Text Case?

- **🎯 Focused**: Specialized in text case transformations
- **📦 Modular**: Use only what you need
- **🔒 Reliable**: Extensively tested and battle-tested
- **⚡ Fast**: Optimized for performance
- **🛡️ Type-safe**: Full TypeScript support
- **📚 Well-documented**: Comprehensive guides and examples
- **🔄 Consistent**: Uniform API across all packages
- **🌟 Modern**: Built with modern JavaScript standards

---

**Made with ❤️ by [Dmitry Selikhov](https://github.com/idimetrix)**

[npm-image]: https://img.shields.io/npm/v/text-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-case
[downloads-image]: https://img.shields.io/npm/dm/text-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-case
