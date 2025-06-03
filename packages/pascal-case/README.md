# Pascal Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **PascalCase** format where the first letter of each word is capitalized with no separators.

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
npm install text-pascal-case

# yarn
yarn add text-pascal-case

# pnpm
pnpm add text-pascal-case

# bun
bun add text-pascal-case
```

## 🎯 Quick Start

```javascript
import { pascalCase } from "text-pascal-case";

console.log(pascalCase("hello world")); // "HelloWorld"
console.log(pascalCase("user_profile_data")); // "UserProfileData"
console.log(pascalCase("background-color")); // "BackgroundColor"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { pascalCase } from "text-pascal-case";

console.log(pascalCase("hello world")); // "HelloWorld"
```

### CommonJS

```javascript
const { pascalCase } = require("text-pascal-case");

console.log(pascalCase("hello world")); // "HelloWorld"
```

### TypeScript

```typescript
import {
  pascalCase,
  pascalCaseTransformMerge,
  Options,
} from "text-pascal-case";

const result: string = pascalCase("hello world");
console.log(result); // "HelloWorld"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { pascalCase } from "text-pascal-case";

// From different cases
pascalCase("hello world"); // "HelloWorld"
pascalCase("Hello World"); // "HelloWorld"
pascalCase("HELLO WORLD"); // "HelloWorld"
pascalCase("snake_case"); // "SnakeCase"
pascalCase("kebab-case"); // "KebabCase"
pascalCase("dot.case"); // "DotCase"
pascalCase("camelCase"); // "CamelCase"
pascalCase("CONSTANT_CASE"); // "ConstantCase"

// Complex examples
pascalCase("XMLHttpRequest"); // "XmlHttpRequest"
pascalCase("iPhone"); // "IPhone"
pascalCase("version 1.2.3"); // "Version123"
pascalCase("user-profile-data"); // "UserProfileData"
```

### Advanced Options

```javascript
import { pascalCase, pascalCaseTransformMerge } from "text-pascal-case";

// Custom transform to merge numbers without separator
pascalCase("version 1.2.3", {
  transform: pascalCaseTransformMerge,
}); // "Version123"

// Custom word splitting
pascalCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "XmlHttpRequest"

// Custom character stripping
pascalCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "HelloWorldCom"

// Custom transformation function
pascalCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (word === "api") return "API";
    if (word === "v2") return "V2";
    return word;
  },
}); // "APIV2Endpoint"
```

## 🌍 Real-World Examples

### Class Names

```javascript
import { pascalCase } from "text-pascal-case";

// Component names
pascalCase("user_profile"); // "UserProfile"
pascalCase("email_validator"); // "EmailValidator"
pascalCase("data_service"); // "DataService"
pascalCase("auth_middleware"); // "AuthMiddleware"
pascalCase("payment_gateway"); // "PaymentGateway"
```

### React Components

```javascript
import { pascalCase } from "text-pascal-case";

// Component file names
pascalCase("user-profile"); // "UserProfile"
pascalCase("navigation-bar"); // "NavigationBar"
pascalCase("modal-dialog"); // "ModalDialog"
pascalCase("search-input"); // "SearchInput"
pascalCase("loading-spinner"); // "LoadingSpinner"
```

### Database Models

```javascript
import { pascalCase } from "text-pascal-case";

// Model class names
pascalCase("user_account"); // "UserAccount"
pascalCase("order_item"); // "OrderItem"
pascalCase("product_category"); // "ProductCategory"
pascalCase("shipping_address"); // "ShippingAddress"
```

### API Endpoints to Types

```javascript
import { pascalCase } from "text-pascal-case";

// Convert API endpoints to TypeScript interface names
const endpoints = [
  "user_profile",
  "order_history",
  "payment_method",
  "shipping_address",
];

const typeNames = endpoints.map(
  (endpoint) => `${pascalCase(endpoint)}Response`,
);
console.log(typeNames);
// ["UserProfileResponse", "OrderHistoryResponse", "PaymentMethodResponse", "ShippingAddressResponse"]
```

## 📖 API Reference

### `pascalCase(input, options?)`

Converts a string to PascalCase.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The PascalCase formatted string

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

### `pascalCaseTransformMerge`

A transform function that merges numeric characters without separation.

```javascript
import { pascalCase, pascalCaseTransformMerge } from "text-pascal-case";

pascalCase("version 1.2.3", { transform: pascalCaseTransformMerge }); // "Version123"
```

## 🔧 Advanced Configuration

### Custom Word Splitting

```javascript
import { pascalCase } from "text-pascal-case";

// Split on specific patterns
pascalCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "XmlHttpRequest"

// Split on numbers
pascalCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "User123Data"
```

### Custom Character Stripping

```javascript
import { pascalCase } from "text-pascal-case";

// Strip specific characters
pascalCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "HelloWorldCom"

// Strip all non-alphanumeric
pascalCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "HelloWorld"
```

### Custom Transform Functions

```javascript
import { pascalCase } from "text-pascal-case";

// Preserve acronyms
pascalCase("xml-http-request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toUpperCase();
    }
    return word;
  },
}); // "XMLHTTPRequest"

// Custom business logic
pascalCase("user-v2-api", {
  transform: (word, index) => {
    if (word === "v2") return "V2";
    if (word === "api") return "API";
    return word;
  },
}); // "UserV2API"
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
- [`text-snake-case`](../snake-case) - Convert to snake_case
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

[npm-image]: https://img.shields.io/npm/v/text-pascal-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-pascal-case
[downloads-image]: https://img.shields.io/npm/dm/text-pascal-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-pascal-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-pascal-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-pascal-case
