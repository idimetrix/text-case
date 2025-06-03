# Swap Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text by **swapping the case** of each character (uppercase becomes lowercase and vice versa).

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
npm install text-swap-case

# yarn
yarn add text-swap-case

# pnpm
pnpm add text-swap-case

# bun
bun add text-swap-case
```

## 🎯 Quick Start

```javascript
import { swapCase } from "text-swap-case";

console.log(swapCase("Hello World")); // "hELLO wORLD"
console.log(swapCase("JavaScript")); // "jAVAsCRIPT"
console.log(swapCase("CamelCase")); // "cAMELcASE"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { swapCase } from "text-swap-case";

console.log(swapCase("Hello")); // "hELLO"
```

### CommonJS

```javascript
const { swapCase } = require("text-swap-case");

console.log(swapCase("Hello")); // "hELLO"
```

### TypeScript

```typescript
import { swapCase } from "text-swap-case";

const result: string = swapCase("Hello World");
console.log(result); // "hELLO wORLD"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { swapCase } from "text-swap-case";

// Simple cases
swapCase("Hello"); // "hELLO"
swapCase("HELLO"); // "hello"
swapCase("hello"); // "HELLO"

// Mixed cases
swapCase("Hello World"); // "hELLO wORLD"
swapCase("CamelCase"); // "cAMELcASE"
swapCase("PascalCase"); // "pASCALcASE"
swapCase("snake_case"); // "SNAKE_CASE"
swapCase("kebab-case"); // "KEBAB-CASE"

// Complex examples
swapCase("JavaScript"); // "jAVAsCRIPT"
swapCase("XMLHttpRequest"); // "xmlhTTPrEQUEST"
swapCase("iPhone"); // "IpHONE"
swapCase("macOS"); // "MACos"
```

### Edge Cases

```javascript
import { swapCase } from "text-swap-case";

// Numbers and symbols (unchanged)
swapCase("Hello123"); // "hELLO123"
swapCase("Test@Email.Com"); // "tEST@eMAIL.cOM"
swapCase("User_123"); // "uSER_123"

// Empty and whitespace
swapCase(""); // ""
swapCase("   "); // "   "
swapCase("\n\t"); // "\n\t"

// Unicode characters
swapCase("Café"); // "cAFÉ"
swapCase("Naïve"); // "nAÏVE"
swapCase("Résumé"); // "rÉSUMÉ"
```

## 🌍 Real-World Examples

### Text Obfuscation

```javascript
import { swapCase } from "text-swap-case";

// Simple text obfuscation
function obfuscateText(text) {
  return swapCase(text);
}

console.log(obfuscateText("Secret Message")); // "sECRET mESSAGE"
console.log(obfuscateText("Password123")); // "pASSWORD123"
```

### Alternating Case Effect

```javascript
import { swapCase } from "text-swap-case";

// Create alternating case effect
function alternatingCase(text) {
  return text
    .split("")
    .map((char, index) =>
      index % 2 === 0 ? char.toLowerCase() : char.toUpperCase(),
    )
    .join("");
}

// Compare with swap case
const original = "Hello World";
console.log("Original:", original); // "Hello World"
console.log("Swap Case:", swapCase(original)); // "hELLO wORLD"
console.log("Alternating:", alternatingCase(original)); // "hElLo WoRlD"
```

### Case Inversion for Testing

```javascript
import { swapCase } from "text-swap-case";

// Test case sensitivity
function testCaseSensitivity(input) {
  const swapped = swapCase(input);
  return {
    original: input,
    swapped: swapped,
    areEqual: input === swapped,
    length: input.length,
  };
}

console.log(testCaseSensitivity("Hello"));
// {
//   original: "Hello",
//   swapped: "hELLO",
//   areEqual: false,
//   length: 5
// }
```

### Creative Text Effects

```javascript
import { swapCase } from "text-swap-case";

// Create stylized text
function stylizeText(text, style = "swap") {
  switch (style) {
    case "swap":
      return swapCase(text);
    case "upper":
      return text.toUpperCase();
    case "lower":
      return text.toLowerCase();
    case "title":
      return text.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
      );
    default:
      return text;
  }
}

const text = "JavaScript Programming";
console.log("Swap:", stylizeText(text, "swap")); // "jAVAsCRIPT pROGRAMMING"
console.log("Upper:", stylizeText(text, "upper")); // "JAVASCRIPT PROGRAMMING"
console.log("Lower:", stylizeText(text, "lower")); // "javascript programming"
console.log("Title:", stylizeText(text, "title")); // "Javascript Programming"
```

### Password Transformation

```javascript
import { swapCase } from "text-swap-case";

// Transform passwords (for demonstration only)
function transformPassword(password) {
  // Note: This is for demonstration only, not for real security
  return swapCase(password);
}

console.log(transformPassword("MyPassword123")); // "mYpASSWORD123"
```

### Text Processing Pipeline

```javascript
import { swapCase } from "text-swap-case";

class TextProcessor {
  constructor() {
    this.processors = [];
  }

  addSwapCase() {
    this.processors.push(swapCase);
    return this;
  }

  addReverse() {
    this.processors.push((text) => text.split("").reverse().join(""));
    return this;
  }

  process(text) {
    return this.processors.reduce(
      (result, processor) => processor(result),
      text,
    );
  }
}

const processor = new TextProcessor().addSwapCase().addReverse();

console.log(processor.process("Hello World")); // "DLROw OLLEh"
```

## 📖 API Reference

### `swapCase(input)`

Swaps the case of each character in a string.

#### Parameters

- **`input`** (`string`): The string to transform

#### Returns

- **`string`**: The string with swapped case

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

- [`text-upper-case`](../upper-case) - Convert to uppercase
- [`text-lower-case`](../lower-case) - Convert to lowercase
- [`text-upper-case-first`](../upper-case-first) - Make first character uppercase
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

[npm-image]: https://img.shields.io/npm/v/text-swap-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-swap-case
[downloads-image]: https://img.shields.io/npm/dm/text-swap-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-swap-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-swap-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-swap-case
