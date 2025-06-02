# Upper Case First

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text by making the first character uppercase while keeping the rest unchanged.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-upper-case-first

# yarn
yarn add text-upper-case-first

# pnpm
pnpm add text-upper-case-first

# bun
bun add text-upper-case-first
```

## Usage

### ES Modules (Recommended)

```javascript
import { upperCaseFirst } from "text-upper-case-first";

console.log(upperCaseFirst("hello world")); // "Hello world"
```

### CommonJS

```javascript
const { upperCaseFirst } = require("text-upper-case-first");

console.log(upperCaseFirst("hello world")); // "Hello world"
```

### TypeScript

```typescript
import { upperCaseFirst } from "text-upper-case-first";

const result: string = upperCaseFirst("hello world");
console.log(result); // "Hello world"
```

## Examples

### Basic Usage

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Simple transformations
upperCaseFirst("hello"); // "Hello"
upperCaseFirst("world"); // "World"
upperCaseFirst("hello world"); // "Hello world"

// Already capitalized
upperCaseFirst("Hello"); // "Hello"
upperCaseFirst("Hello World"); // "Hello World"

// Mixed case
upperCaseFirst("hELLo WoRLD"); // "HELLo WoRLD"
upperCaseFirst("tEST"); // "TEST"

// Single character
upperCaseFirst("a"); // "A"
upperCaseFirst("A"); // "A"
```

### Real-world Examples

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Sentence formation
upperCaseFirst("the quick brown fox"); // "The quick brown fox"
upperCaseFirst("lorem ipsum dolor"); // "Lorem ipsum dolor"

// Names and titles
upperCaseFirst("john doe"); // "John doe"
upperCaseFirst("mary jane watson"); // "Mary jane watson"

// Error messages
upperCaseFirst("invalid input"); // "Invalid input"
upperCaseFirst("connection failed"); // "Connection failed"
upperCaseFirst("access denied"); // "Access denied"

// Descriptions
upperCaseFirst("user interface"); // "User interface"
upperCaseFirst("application server"); // "Application server"
upperCaseFirst("database connection"); // "Database connection"
```

### Programming Examples

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Variable names to readable text
upperCaseFirst("firstName"); // "FirstName"
upperCaseFirst("lastName"); // "LastName"
upperCaseFirst("emailAddress"); // "EmailAddress"

// Function names
upperCaseFirst("getUserData"); // "GetUserData"
upperCaseFirst("validateInput"); // "ValidateInput"
upperCaseFirst("processPayment"); // "ProcessPayment"

// Comments and documentation
upperCaseFirst("this function validates user input"); // "This function validates user input"
upperCaseFirst("returns the user profile data"); // "Returns the user profile data"

// Log messages
upperCaseFirst("starting application"); // "Starting application"
upperCaseFirst("database connected successfully"); // "Database connected successfully"
upperCaseFirst("user authentication completed"); // "User authentication completed"
```

### Form and UI Examples

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Form labels
upperCaseFirst("first name"); // "First name"
upperCaseFirst("last name"); // "Last name"
upperCaseFirst("email address"); // "Email address"
upperCaseFirst("phone number"); // "Phone number"

// Button labels
upperCaseFirst("save changes"); // "Save changes"
upperCaseFirst("cancel operation"); // "Cancel operation"
upperCaseFirst("submit form"); // "Submit form"

// Status messages
upperCaseFirst("operation successful"); // "Operation successful"
upperCaseFirst("please wait"); // "Please wait"
upperCaseFirst("loading data"); // "Loading data"

// Validation messages
upperCaseFirst("field is required"); // "Field is required"
upperCaseFirst("invalid email format"); // "Invalid email format"
upperCaseFirst("password too short"); // "Password too short"
```

### Edge Cases

```javascript
import { upperCaseFirst } from "text-upper-case-first";

// Empty and whitespace
upperCaseFirst(""); // ""
upperCaseFirst(" "); // " "
upperCaseFirst("  hello"); // "  hello"

// Numbers and symbols
upperCaseFirst("123abc"); // "123abc"
upperCaseFirst("!important"); // "!important"
upperCaseFirst("@username"); // "@username"

// Unicode characters
upperCaseFirst("élégant"); // "Élégant"
upperCaseFirst("naïve"); // "Naïve"
upperCaseFirst("résumé"); // "Résumé"
```

## API

### `upperCaseFirst(input)`

Makes the first character of a string uppercase.

#### Parameters

- `input` (`string`): The string to transform

#### Returns

- `string`: The string with first character uppercased

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

- **Minified**: ~130 B
- **Gzipped**: ~90 B
- **Tree-shakeable**: Yes
- **Side effects**: None

## TypeScript Support

This package includes comprehensive TypeScript definitions and supports:

- Full type safety
- IntelliSense autocompletion
- Type inference
- Generic type parameters

## Browser Support

- **Modern browsers**: ES2015+
- **Node.js**: 12+
- **Bundle formats**: UMD, ESM, CommonJS

## Related Packages

- [`text-lower-case-first`](../lower-case-first) - Lowercase first character
- [`text-upper-case`](../upper-case) - Convert to UPPERCASE
- [`text-lower-case`](../lower-case) - Convert to lowercase
- [`text-sentence-case`](../sentence-case) - Convert to Sentence case

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

[npm-image]: https://img.shields.io/npm/v/text-upper-case-first.svg?style=flat
[npm-url]: https://npmjs.org/package/text-upper-case-first
[downloads-image]: https://img.shields.io/npm/dm/text-upper-case-first.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-upper-case-first
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-upper-case-first.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-upper-case-first
