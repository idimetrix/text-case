# Is Upper Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Check if a string is in UPPER CASE format.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-is-upper-case

# yarn
yarn add text-is-upper-case

# pnpm
pnpm add text-is-upper-case

# bun
bun add text-is-upper-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { isUpperCase } from "text-is-upper-case";

console.log(isUpperCase("HELLO WORLD")); // true
```

### CommonJS

```javascript
const { isUpperCase } = require("text-is-upper-case");

console.log(isUpperCase("HELLO WORLD")); // true
```

### TypeScript

```typescript
import { isUpperCase } from "text-is-upper-case";

const result: boolean = isUpperCase("HELLO WORLD");
console.log(result); // true
```

## Examples

### Basic Usage

```javascript
import { isUpperCase } from "text-is-upper-case";

// True cases
isUpperCase("HELLO"); // true
isUpperCase("WORLD"); // true
isUpperCase("HELLO WORLD"); // true
isUpperCase("TEST123"); // true
isUpperCase("API"); // true

// False cases
isUpperCase("hello"); // false
isUpperCase("Hello"); // false
isUpperCase("HELLO world"); // false
isUpperCase("Test"); // false
```

### Validation Examples

```javascript
import { isUpperCase } from "text-is-upper-case";

// Environment variables validation
isUpperCase("DATABASE_URL"); // true
isUpperCase("API_SECRET_KEY"); // true
isUpperCase("MAX_FILE_SIZE"); // true

// Constants validation
isUpperCase("HTTP_STATUS_OK"); // true
isUpperCase("ERROR_CODES"); // true
isUpperCase("DEFAULT_TIMEOUT"); // true

// Acronyms validation
isUpperCase("HTML"); // true
isUpperCase("CSS"); // true
isUpperCase("JSON"); // true
isUpperCase("XML"); // true
```

### Form Validation Examples

```javascript
import { isUpperCase } from "text-is-upper-case";

// Code validation
function validateCode(code) {
  if (!isUpperCase(code)) {
    return "Code must be in uppercase";
  }
  return null;
}

validateCode("ABC123"); // null (valid)
validateCode("abc123"); // "Code must be in uppercase"

// Currency code validation
function validateCurrencyCode(code) {
  return isUpperCase(code) && code.length === 3;
}

validateCurrencyCode("USD"); // true
validateCurrencyCode("usd"); // false
validateCurrencyCode("EUR"); // true
```

### Programming Examples

```javascript
import { isUpperCase } from "text-is-upper-case";

// Check constants format
const constants = ["API_KEY", "BASE_URL", "MAX_RETRIES"];
const validConstants = constants.filter(isUpperCase);
// ["API_KEY", "BASE_URL", "MAX_RETRIES"]

// Validate configuration keys
function isValidConfigKey(key) {
  return isUpperCase(key) && key.includes("_");
}

isValidConfigKey("SERVER_PORT"); // true
isValidConfigKey("DATABASE_HOST"); // true
isValidConfigKey("serverPort"); // false

// Check if string follows CONSTANT_CASE
function isConstantCase(str) {
  return isUpperCase(str) && /^[A-Z_]+$/.test(str);
}

isConstantCase("API_KEY"); // true
isConstantCase("BASE_URL"); // true
isConstantCase("API-KEY"); // false (contains hyphen)
```

### Special Cases

```javascript
import { isUpperCase } from "text-is-upper-case";

// Numbers and symbols
isUpperCase("123"); // true (no letters to check)
isUpperCase("!!!@@@"); // true (no letters to check)
isUpperCase("TEST123"); // true
isUpperCase("123TEST"); // true

// Empty and whitespace
isUpperCase(""); // true (no letters to check)
isUpperCase(" "); // true (no letters to check)
isUpperCase("   "); // true (no letters to check)

// Mixed with symbols
isUpperCase("API_KEY"); // true
isUpperCase("TEST-123"); // true
isUpperCase("HELLO.WORLD"); // true
isUpperCase("HELLO@WORLD.COM"); // true
```

### Real-world Applications

```javascript
import { isUpperCase } from "text-is-upper-case";

// Country code validation
function validateCountryCode(code) {
  return isUpperCase(code) && code.length === 2;
}

validateCountryCode("US"); // true
validateCountryCode("GB"); // true
validateCountryCode("us"); // false

// Language code validation
function validateLanguageCode(code) {
  return isUpperCase(code) && /^[A-Z]{2}(-[A-Z]{2})?$/.test(code);
}

validateLanguageCode("EN"); // true
validateLanguageCode("EN-US"); // true
validateLanguageCode("en-us"); // false

// File extension validation (for specific formats)
function isUpperCaseExtension(ext) {
  return ext.startsWith(".") && isUpperCase(ext.slice(1));
}

isUpperCaseExtension(".PDF"); // true
isUpperCaseExtension(".JPG"); // true
isUpperCaseExtension(".pdf"); // false
```

### Input Sanitization

```javascript
import { isUpperCase } from "text-is-upper-case";

// Sanitize input for uppercase-only fields
function sanitizeUpperCaseInput(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  if (!isUpperCase(input)) {
    throw new Error("Input must be in uppercase");
  }

  return input;
}

// User input validation
function validatePostalCode(code) {
  // Some postal codes must be uppercase
  return typeof code === "string" && code.length >= 3 && isUpperCase(code);
}

validatePostalCode("SW1A 1AA"); // true (UK postal code)
validatePostalCode("sw1a 1aa"); // false
validatePostalCode("10001"); // true (US ZIP code)
```

### Batch Validation

```javascript
import { isUpperCase } from "text-is-upper-case";

// Validate array of strings
function validateUpperCaseArray(strings) {
  return strings.every(isUpperCase);
}

validateUpperCaseArray(["API", "URL", "JSON"]); // true
validateUpperCaseArray(["API", "url", "JSON"]); // false

// Find non-uppercase strings
function findNonUpperCase(strings) {
  return strings.filter((str) => !isUpperCase(str));
}

const mixed = ["API", "url", "JSON", "html"];
findNonUpperCase(mixed); // ["url", "html"]
```

## API

### `isUpperCase(input)`

Checks if a string is in upper case.

#### Parameters

- `input` (`string`): The string to check

#### Returns

- `boolean`: `true` if the string is in upper case, `false` otherwise

#### Notes

- Returns `true` for strings with no alphabetic characters
- Case-sensitive comparison for alphabetic characters only
- Numbers, symbols, and whitespace are ignored

## Development

### Type Checking

```bash
# Check types
pnpm typecheck

# Check types in watch mode
pnpm typecheck:watch
```

### Linting

```bash
# Run linter
pnpm lint

# Auto-fix linting issues
pnpm lint --fix
```

### Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

### Building

```bash
# Build the package
pnpm build

# Build and watch for changes
pnpm build --watch
```

## Bundle Size

This package is optimized for minimal bundle size:

- **Minified**: ~150 B
- **Gzipped**: ~100 B
- **Tree-shakeable**: Yes
- **Side effects**: None

## TypeScript Support

This package includes comprehensive TypeScript definitions and supports:

- Full type safety
- IntelliSense autocompletion
- Type inference
- Type guards for string validation

## Browser Support

- **Modern browsers**: ES2015+
- **Node.js**: 12+
- **Bundle formats**: UMD, ESM, CommonJS

## Related Packages

- [`text-is-lower-case`](../is-lower-case) - Check if string is lowercase
- [`text-upper-case`](../upper-case) - Convert to UPPERCASE
- [`text-lower-case`](../lower-case) - Convert to lowercase
- [`text-swap-case`](../swap-case) - Swap character case

## License

[MIT](LICENSE)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

- 📧 Email: [selikhov.dmitrey@gmail.com](mailto:selikhov.dmitrey@gmail.com)
- 🐛 Issues: [GitHub Issues](https://github.com/idimetrix/text-case/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/idimetrix/text-case/discussions)

[npm-image]: https://img.shields.io/npm/v/text-is-upper-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-is-upper-case
[downloads-image]: https://img.shields.io/npm/dm/text-is-upper-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-is-upper-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-is-upper-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-is-upper-case
