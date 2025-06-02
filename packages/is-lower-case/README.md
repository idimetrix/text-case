# Is Lower Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Check if a string is in lower case format.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-is-lower-case

# yarn
yarn add text-is-lower-case

# pnpm
pnpm add text-is-lower-case

# bun
bun add text-is-lower-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { isLowerCase } from "text-is-lower-case";

console.log(isLowerCase("hello world")); // true
```

### CommonJS

```javascript
const { isLowerCase } = require("text-is-lower-case");

console.log(isLowerCase("hello world")); // true
```

### TypeScript

```typescript
import { isLowerCase } from "text-is-lower-case";

const result: boolean = isLowerCase("hello world");
console.log(result); // true
```

## Examples

### Basic Usage

```javascript
import { isLowerCase } from "text-is-lower-case";

// True cases
isLowerCase("hello");                 // true
isLowerCase("world");                 // true
isLowerCase("hello world");           // true
isLowerCase("test123");               // true
isLowerCase("api");                   // true

// False cases
isLowerCase("Hello");                 // false
isLowerCase("HELLO");                 // false
isLowerCase("hello World");           // false
isLowerCase("Test");                  // false
```

### Validation Examples

```javascript
import { isLowerCase } from "text-is-lower-case";

// URL validation
isLowerCase("example.com");           // true
isLowerCase("api.service.com");       // true
isLowerCase("My-Website.COM");        // false

// Email validation (partial)
isLowerCase("user@example.com");      // true
isLowerCase("User@Example.com");      // false
isLowerCase("admin@service.org");     // true

// CSS class names
isLowerCase("container");             // true
isLowerCase("nav-item");              // true
isLowerCase("Button");                // false
```

### Form Validation Examples

```javascript
import { isLowerCase } from "text-is-lower-case";

// Username validation
function validateUsername(username) {
  if (!isLowerCase(username)) {
    return "Username must be lowercase";
  }
  return null;
}

validateUsername("john123");          // null (valid)
validateUsername("John123");          // "Username must be lowercase"

// Domain validation
function validateDomain(domain) {
  return isLowerCase(domain) && domain.includes(".");
}

validateDomain("example.com");        // true
validateDomain("Example.COM");        // false
validateDomain("api.service.org");    // true
```

### Programming Examples

```javascript
import { isLowerCase } from "text-is-lower-case";

// Check variable naming convention
const variables = ["userName", "apiKey", "maxRetries"];
const lowerCaseVars = variables.filter(isLowerCase);
// ["userName", "apiKey", "maxRetries"] (if following camelCase with lowercase start)

// Validate CSS property names
function isValidCSSProperty(property) {
  return isLowerCase(property) && property.includes("-");
}

isValidCSSProperty("font-size");      // true
isValidCSSProperty("background-color"); // true
isValidCSSProperty("FontSize");       // false

// Check if string follows snake_case
function isSnakeCase(str) {
  return isLowerCase(str) && /^[a-z_]+$/.test(str);
}

isSnakeCase("user_name");             // true
isSnakeCase("api_key");               // true
isSnakeCase("UserName");              // false
```

### Special Cases

```javascript
import { isLowerCase } from "text-is-lower-case";

// Numbers and symbols
isLowerCase("123");                   // true (no letters to check)
isLowerCase("!!!@@@");                // true (no letters to check)
isLowerCase("test123");               // true
isLowerCase("123test");               // true

// Empty and whitespace
isLowerCase("");                      // true (no letters to check)
isLowerCase(" ");                     // true (no letters to check)
isLowerCase("   ");                   // true (no letters to check)

// Mixed with symbols
isLowerCase("user_name");             // true
isLowerCase("test-123");              // true
isLowerCase("hello.world");           // true
isLowerCase("user@domain.com");       // true
```

### Real-world Applications

```javascript
import { isLowerCase } from "text-is-lower-case";

// Package name validation
function validatePackageName(name) {
  return isLowerCase(name) && /^[a-z0-9-]+$/.test(name);
}

validatePackageName("my-package");    // true
validatePackageName("text-case");     // true
validatePackageName("MyPackage");     // false

// File name validation (for certain naming conventions)
function validateFileName(filename) {
  const nameWithoutExt = filename.split('.')[0];
  return isLowerCase(nameWithoutExt);
}

validateFileName("config.json");      // true
validateFileName("package.json");     // true
validateFileName("Config.JSON");      // false

// URL slug validation
function validateSlug(slug) {
  return isLowerCase(slug) && /^[a-z0-9-]+$/.test(slug);
}

validateSlug("my-blog-post");         // true
validateSlug("hello-world");          // true
validateSlug("Hello-World");          // false
```

### Input Sanitization

```javascript
import { isLowerCase } from "text-is-lower-case";

// Sanitize input for lowercase-only fields
function sanitizeLowerCaseInput(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  if (!isLowerCase(input)) {
    throw new Error('Input must be in lowercase');
  }

  return input;
}

// Email domain validation
function validateEmailDomain(email) {
  const domain = email.split('@')[1];
  return domain && isLowerCase(domain);
}

validateEmailDomain("user@example.com"); // true
validateEmailDomain("user@Example.COM"); // false

// CSS selector validation
function isValidCSSSelector(selector) {
  // Basic validation for class selectors
  if (selector.startsWith('.')) {
    const className = selector.slice(1);
    return isLowerCase(className) && /^[a-z0-9-_]+$/.test(className);
  }
  return false;
}

isValidCSSSelector(".nav-item");      // true
isValidCSSSelector(".NavItem");       // false
```

### Batch Validation

```javascript
import { isLowerCase } from "text-is-lower-case";

// Validate array of strings
function validateLowerCaseArray(strings) {
  return strings.every(isLowerCase);
}

validateLowerCaseArray(["api", "url", "json"]); // true
validateLowerCaseArray(["api", "URL", "json"]); // false

// Find non-lowercase strings
function findNonLowerCase(strings) {
  return strings.filter(str => !isLowerCase(str));
}

const mixed = ["api", "URL", "json", "HTML"];
findNonLowerCase(mixed); // ["URL", "HTML"]

// Clean data for lowercase requirements
function cleanLowerCaseData(data) {
  return data.map(item => ({
    ...item,
    slug: isLowerCase(item.slug) ? item.slug : item.slug.toLowerCase()
  }));
}
```

### Integration Examples

```javascript
import { isLowerCase } from "text-is-lower-case";

// React component prop validation
function validateProps(props) {
  const errors = [];

  if (props.className && !isLowerCase(props.className)) {
    errors.push("className must be lowercase");
  }

  if (props.id && !isLowerCase(props.id)) {
    errors.push("id must be lowercase");
  }

  return errors;
}

// Express.js route validation
function validateRoute(req, res, next) {
  const { slug } = req.params;

  if (!isLowerCase(slug)) {
    return res.status(400).json({
      error: "URL slug must be lowercase"
    });
  }

  next();
}

// Database field validation
function validateDbField(fieldName, value) {
  const lowerCaseFields = ['email', 'username', 'slug'];

  if (lowerCaseFields.includes(fieldName) && !isLowerCase(value)) {
    throw new Error(`${fieldName} must be lowercase`);
  }
}
```

## API

### `isLowerCase(input)`

Checks if a string is in lower case.

#### Parameters

- `input` (`string`): The string to check

#### Returns

- `boolean`: `true` if the string is in lower case, `false` otherwise

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

- [`text-is-upper-case`](../is-upper-case) - Check if string is uppercase
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

[npm-image]: https://img.shields.io/npm/v/text-is-lower-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-is-lower-case
[downloads-image]: https://img.shields.io/npm/dm/text-is-lower-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-is-lower-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-is-lower-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-is-lower-case
