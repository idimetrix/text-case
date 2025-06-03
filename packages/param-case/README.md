# Param Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **param-case** format where words are lowercase and separated by hyphens.

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
npm install text-param-case

# yarn
yarn add text-param-case

# pnpm
pnpm add text-param-case

# bun
bun add text-param-case
```

## 🎯 Quick Start

```javascript
import { paramCase } from "text-param-case";

console.log(paramCase("hello world")); // "hello-world"
console.log(paramCase("userProfileData")); // "user-profile-data"
console.log(paramCase("backgroundColor")); // "background-color"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { paramCase } from "text-param-case";

console.log(paramCase("hello world")); // "hello-world"
```

### CommonJS

```javascript
const { paramCase } = require("text-param-case");

console.log(paramCase("hello world")); // "hello-world"
```

### TypeScript

```typescript
import { paramCase, Options } from "text-param-case";

const result: string = paramCase("hello world");
console.log(result); // "hello-world"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { paramCase } from "text-param-case";

// From different cases
paramCase("hello world"); // "hello-world"
paramCase("Hello World"); // "hello-world"
paramCase("HELLO WORLD"); // "hello-world"
paramCase("camelCase"); // "camel-case"
paramCase("PascalCase"); // "pascal-case"
paramCase("snake_case"); // "snake-case"
paramCase("kebab-case"); // "kebab-case"
paramCase("dot.case"); // "dot-case"

// Complex examples
paramCase("XMLHttpRequest"); // "xml-http-request"
paramCase("iPhone"); // "i-phone"
paramCase("version 1.2.3"); // "version-1-2-3"
paramCase("userProfileData"); // "user-profile-data"
```

### Advanced Options

```javascript
import { paramCase } from "text-param-case";

// Custom word splitting
paramCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml-http-request"

// Custom character stripping
paramCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello-world-com"

// Custom transformation function
paramCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (word === "api") return "api";
    if (word === "v2") return "v2";
    return word.toLowerCase();
  },
}); // "api-v2-endpoint"
```

## 🌍 Real-World Examples

### URL Parameters

```javascript
import { paramCase } from "text-param-case";

// URL parameter names
paramCase("userId"); // "user-id"
paramCase("sortOrder"); // "sort-order"
paramCase("pageSize"); // "page-size"
paramCase("filterType"); // "filter-type"
paramCase("searchQuery"); // "search-query"
```

### CSS Class Names

```javascript
import { paramCase } from "text-param-case";

// CSS class generation
paramCase("primaryButton"); // "primary-button"
paramCase("navigationMenu"); // "navigation-menu"
paramCase("contentWrapper"); // "content-wrapper"
paramCase("errorMessage"); // "error-message"
paramCase("loadingSpinner"); // "loading-spinner"
```

### HTML Attributes

```javascript
import { paramCase } from "text-param-case";

// HTML attribute names
paramCase("dataTestId"); // "data-test-id"
paramCase("ariaLabel"); // "aria-label"
paramCase("tabIndex"); // "tab-index"
paramCase("contentEditable"); // "content-editable"
paramCase("spellCheck"); // "spell-check"
```

### API Endpoint Names

```javascript
import { paramCase } from "text-param-case";

// REST API endpoints
paramCase("getUserProfile"); // "get-user-profile"
paramCase("createNewOrder"); // "create-new-order"
paramCase("updateUserData"); // "update-user-data"
paramCase("deleteAccount"); // "delete-account"
paramCase("resetPassword"); // "reset-password"
```

### Configuration Processing

```javascript
import { paramCase } from "text-param-case";

// Transform object keys for URL parameters
const filters = {
  sortOrder: "desc",
  pageSize: 20,
  filterType: "active",
  searchQuery: "javascript",
};

const urlParams = new URLSearchParams(
  Object.fromEntries(
    Object.entries(filters).map(([key, value]) => [paramCase(key), value]),
  ),
);

console.log(urlParams.toString());
// "sort-order=desc&page-size=20&filter-type=active&search-query=javascript"
```

### Component Props Processing

```javascript
import { paramCase } from "text-param-case";

function generateDataAttributes(props) {
  const dataAttrs = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key.startsWith("data")) {
      const attrName = paramCase(key);
      dataAttrs[attrName] = value;
    }
  });

  return dataAttrs;
}

const props = {
  dataTestId: "submit-button",
  dataTrackingId: "btn-submit",
  dataAnalytics: "form-submission",
};

console.log(generateDataAttributes(props));
// {
//   "data-test-id": "submit-button",
//   "data-tracking-id": "btn-submit",
//   "data-analytics": "form-submission"
// }
```

### Form Field Processing

```javascript
import { paramCase } from "text-param-case";

function createFormField(name, type = "text", options = {}) {
  const fieldName = paramCase(name);
  const fieldId = `field-${fieldName}`;

  return {
    name: fieldName,
    id: fieldId,
    type,
    className: `form-${fieldName}`,
    ...options,
  };
}

console.log(createFormField("firstName"));
// {
//   name: "first-name",
//   id: "field-first-name",
//   type: "text",
//   className: "form-first-name"
// }
```

### CSS-in-JS Processing

```javascript
import { paramCase } from "text-param-case";

function convertCSSProperties(styles) {
  const converted = {};

  Object.entries(styles).forEach(([property, value]) => {
    const cssProperty = paramCase(property);
    converted[cssProperty] = value;
  });

  return converted;
}

const jsStyles = {
  backgroundColor: "#fff",
  fontSize: "16px",
  marginTop: "10px",
  borderRadius: "4px",
};

console.log(convertCSSProperties(jsStyles));
// {
//   "background-color": "#fff",
//   "font-size": "16px",
//   "margin-top": "10px",
//   "border-radius": "4px"
// }
```

### Route Generation

```javascript
import { paramCase } from "text-param-case";

class RouteGenerator {
  static generateRoute(controller, action) {
    const controllerPath = paramCase(controller);
    const actionPath = paramCase(action);
    return `/${controllerPath}/${actionPath}`;
  }

  static generateApiRoute(resource, action) {
    const resourcePath = paramCase(resource);
    const actionPath = paramCase(action);
    return `/api/${resourcePath}/${actionPath}`;
  }
}

console.log(RouteGenerator.generateRoute("UserProfile", "EditSettings"));
// "/user-profile/edit-settings"

console.log(RouteGenerator.generateApiRoute("BlogPost", "GetComments"));
// "/api/blog-post/get-comments"
```

## 📖 API Reference

### `paramCase(input, options?)`

Converts a string to param-case format.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The param-case formatted string

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
import { paramCase } from "text-param-case";

// Split on specific patterns
paramCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "xml-http-request"

// Split on numbers
paramCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "user-123-data"
```

### Custom Character Stripping

```javascript
import { paramCase } from "text-param-case";

// Strip specific characters
paramCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "hello-world-com"

// Strip all non-alphanumeric
paramCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "hello-world"
```

### Custom Transform Functions

```javascript
import { paramCase } from "text-param-case";

// Preserve acronyms
paramCase("xml-http-request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url", "html", "css", "js"];
    if (acronyms.includes(word.toLowerCase())) {
      return word.toLowerCase();
    }
    return word.toLowerCase();
  },
}); // "xml-http-request"

// Custom business logic
paramCase("user-v2-api", {
  transform: (word, index) => {
    if (word === "v2") return "v2";
    if (word === "api") return "api";
    return word.toLowerCase();
  },
}); // "user-v2-api"
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

- [`text-kebab-case`](../kebab-case) - Convert to kebab-case (alias)
- [`text-snake-case`](../snake-case) - Convert to snake_case
- [`text-camel-case`](../camel-case) - Convert to camelCase
- [`text-pascal-case`](../pascal-case) - Convert to PascalCase
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

[npm-image]: https://img.shields.io/npm/v/text-param-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-param-case
[downloads-image]: https://img.shields.io/npm/dm/text-param-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-param-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-param-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-param-case
