# Sentence Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text into **Sentence case** format where the first word is capitalized and the rest are lowercase, separated by spaces.

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
npm install text-sentence-case

# yarn
yarn add text-sentence-case

# pnpm
pnpm add text-sentence-case

# bun
bun add text-sentence-case
```

## 🎯 Quick Start

```javascript
import { sentenceCase } from "text-sentence-case";

console.log(sentenceCase("hello world")); // "Hello world"
console.log(sentenceCase("userProfileData")); // "User profile data"
console.log(sentenceCase("backgroundColor")); // "Background color"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { sentenceCase } from "text-sentence-case";

console.log(sentenceCase("hello world")); // "Hello world"
```

### CommonJS

```javascript
const { sentenceCase } = require("text-sentence-case");

console.log(sentenceCase("hello world")); // "Hello world"
```

### TypeScript

```typescript
import { sentenceCase, Options } from "text-sentence-case";

const result: string = sentenceCase("hello world");
console.log(result); // "Hello world"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { sentenceCase } from "text-sentence-case";

// From different cases
sentenceCase("hello world"); // "Hello world"
sentenceCase("Hello World"); // "Hello world"
sentenceCase("HELLO WORLD"); // "Hello world"
sentenceCase("camelCase"); // "Camel case"
sentenceCase("PascalCase"); // "Pascal case"
sentenceCase("snake_case"); // "Snake case"
sentenceCase("kebab-case"); // "Kebab case"
sentenceCase("dot.case"); // "Dot case"

// Complex examples
sentenceCase("XMLHttpRequest"); // "Xml http request"
sentenceCase("iPhone"); // "I phone"
sentenceCase("version 1.2.3"); // "Version 1 2 3"
sentenceCase("userProfileData"); // "User profile data"
```

### Advanced Options

```javascript
import { sentenceCase } from "text-sentence-case";

// Custom word splitting
sentenceCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "Xml http request"

// Custom character stripping
sentenceCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "Hello world com"

// Custom transformation function
sentenceCase("api-v2-endpoint", {
  transform: (word, index) => {
    if (index === 0) {
      if (word === "api") return "API";
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    if (word === "v2") return "V2";
    return word.toLowerCase();
  },
}); // "API v2 endpoint"
```

## 🌍 Real-World Examples

### Content Headings

```javascript
import { sentenceCase } from "text-sentence-case";

// Article headings
sentenceCase("gettingStarted"); // "Getting started"
sentenceCase("bestPractices"); // "Best practices"
sentenceCase("troubleshooting"); // "Troubleshooting"
sentenceCase("frequentlyAskedQuestions"); // "Frequently asked questions"
sentenceCase("advancedConfiguration"); // "Advanced configuration"
```

### Form Labels

```javascript
import { sentenceCase } from "text-sentence-case";

// Form field labels
sentenceCase("firstName"); // "First name"
sentenceCase("emailAddress"); // "Email address"
sentenceCase("phoneNumber"); // "Phone number"
sentenceCase("dateOfBirth"); // "Date of birth"
sentenceCase("billingAddress"); // "Billing address"
```

### Error Messages

```javascript
import { sentenceCase } from "text-sentence-case";

// Error message formatting
sentenceCase("invalidEmailFormat"); // "Invalid email format"
sentenceCase("passwordTooShort"); // "Password too short"
sentenceCase("userNotFound"); // "User not found"
sentenceCase("accessDenied"); // "Access denied"
sentenceCase("sessionExpired"); // "Session expired"
```

### Documentation Sections

```javascript
import { sentenceCase } from "text-sentence-case";

// Documentation sections
sentenceCase("apiReference"); // "Api reference"
sentenceCase("installationGuide"); // "Installation guide"
sentenceCase("migrationNotes"); // "Migration notes"
sentenceCase("performanceTips"); // "Performance tips"
sentenceCase("securityConsiderations"); // "Security considerations"
```

### Content Processing

```javascript
import { sentenceCase } from "text-sentence-case";

// Process content titles
const contentSections = [
  "userManagement",
  "dataVisualization",
  "reportGeneration",
  "systemConfiguration",
  "backupAndRestore",
];

const formattedSections = contentSections.map(sentenceCase);
console.log(formattedSections);
// [
//   "User management",
//   "Data visualization",
//   "Report generation",
//   "System configuration",
//   "Backup and restore"
// ]
```

### Notification Messages

```javascript
import { sentenceCase } from "text-sentence-case";

function formatNotification(type, message) {
  return `${sentenceCase(type)}: ${sentenceCase(message)}`;
}

console.log(formatNotification("successMessage", "dataUpdatedSuccessfully"));
// "Success message: Data updated successfully"

console.log(formatNotification("warningAlert", "sessionWillExpireSoon"));
// "Warning alert: Session will expire soon"
```

### Menu Item Processing

```javascript
import { sentenceCase } from "text-sentence-case";

const menuItems = [
  { key: "userProfile", icon: "user" },
  { key: "accountSettings", icon: "settings" },
  { key: "billingInformation", icon: "credit-card" },
  { key: "securityOptions", icon: "shield" },
  { key: "privacySettings", icon: "lock" },
];

const formattedMenu = menuItems.map((item) => ({
  ...item,
  label: sentenceCase(item.key),
}));

console.log(formattedMenu);
// [
//   { key: "userProfile", icon: "user", label: "User profile" },
//   { key: "accountSettings", icon: "settings", label: "Account settings" },
//   { key: "billingInformation", icon: "credit-card", label: "Billing information" },
//   { key: "securityOptions", icon: "shield", label: "Security options" },
//   { key: "privacySettings", icon: "lock", label: "Privacy settings" }
// ]
```

### Help Text Generation

```javascript
import { sentenceCase } from "text-sentence-case";

function generateHelpText(fieldName, validationRule) {
  const field = sentenceCase(fieldName);
  const rule = sentenceCase(validationRule);
  return `${field} ${rule}`;
}

console.log(generateHelpText("emailAddress", "mustBeValidFormat"));
// "Email address must be valid format"

console.log(generateHelpText("password", "mustContainSpecialCharacters"));
// "Password must contain special characters"
```

### Status Message Processing

```javascript
import { sentenceCase } from "text-sentence-case";

class StatusProcessor {
  static formatStatus(status) {
    return sentenceCase(status);
  }

  static createStatusMessage(action, status) {
    const formattedAction = sentenceCase(action);
    const formattedStatus = sentenceCase(status);
    return `${formattedAction} ${formattedStatus}`;
  }
}

console.log(StatusProcessor.formatStatus("dataProcessingComplete"));
// "Data processing complete"

console.log(StatusProcessor.createStatusMessage("fileUpload", "inProgress"));
// "File upload in progress"
```

## 📖 API Reference

### `sentenceCase(input, options?)`

Converts a string to Sentence case format.

#### Parameters

- **`input`** (`string`): The string to convert
- **`options`** (`Options`, optional): Configuration options

#### Returns

- **`string`**: The Sentence case formatted string

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
import { sentenceCase } from "text-sentence-case";

// Split on specific patterns
sentenceCase("XMLHttpRequest", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "Xml http request"

// Split on numbers
sentenceCase("user123data", {
  splitRegexp: /([a-zA-Z])(\d)/g,
}); // "User 123 data"
```

### Custom Character Stripping

```javascript
import { sentenceCase } from "text-sentence-case";

// Strip specific characters
sentenceCase("hello@world.com", {
  stripRegexp: /[@.]/g,
}); // "Hello world com"

// Strip all non-alphanumeric
sentenceCase("hello!@#world", {
  stripRegexp: /[^a-zA-Z0-9]/g,
}); // "Hello world"
```

### Custom Transform Functions

```javascript
import { sentenceCase } from "text-sentence-case";

// Preserve acronyms in first position
sentenceCase("xml-http-request", {
  transform: (word, index) => {
    const acronyms = ["xml", "http", "api", "url", "html", "css", "js"];
    if (index === 0 && acronyms.includes(word.toLowerCase())) {
      return word.toUpperCase();
    }
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return word.toLowerCase();
  },
}); // "XML http request"

// Custom business logic
sentenceCase("user-v2-api", {
  transform: (word, index) => {
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    if (word === "v2") return "V2";
    if (word === "api") return "API";
    return word.toLowerCase();
  },
}); // "User V2 API"
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

- [`text-title-case`](../title-case) - Convert to Title Case
- [`text-capital-case`](../capital-case) - Convert to Capital Case
- [`text-upper-case-first`](../upper-case-first) - Make first character uppercase
- [`text-no-case`](../no-case) - Convert to no case
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

[npm-image]: https://img.shields.io/npm/v/text-sentence-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-sentence-case
[downloads-image]: https://img.shields.io/npm/dm/text-sentence-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-sentence-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-sentence-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-sentence-case
